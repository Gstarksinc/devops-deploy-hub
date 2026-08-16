#!/usr/bin/env node
/**
 * VXCTech — WAR packaging
 * ----------------------------------------------------------------------------
 * 1. Builds the site (vite build -> .output)
 * 2. Boots the built server once and snapshots "/" into a static index.html
 * 3. Copies every static asset from .output/public
 * 4. Adds WEB-INF/web.xml (SPA fallback so /services, /about ... resolve)
 * 5. Zips everything into dist/ROOT.war  (no Node required on the Tomcat host)
 */
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { deflateRawSync } from "node:zlib";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const root = process.cwd();
const outDir = path.join(root, ".output");
const stage = path.join(root, "dist", "war");
const warPath = path.join(root, "dist", "ROOT.war");
const PORT = process.env.WAR_SNAPSHOT_PORT || "31789";

const run = (cmd, args, opts = {}) =>
  new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit", shell: process.platform === "win32", ...opts });
    p.on("exit", (c) => (c === 0 ? resolve() : reject(new Error(`${cmd} exited with ${c}`))));
    p.on("error", reject);
  });

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name);
    const d = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function walk(dir, base = dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, base, acc);
    else acc.push(path.relative(base, full).split(path.sep).join("/"));
  }
  return acc;
}

/* ---------------------------- minimal ZIP writer --------------------------- */
const crcTable = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
const crc32 = (buf) => {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
};

function zip(files) {
  const chunks = [];
  const central = [];
  let offset = 0;
  for (const { name, data } of files) {
    const nameBuf = Buffer.from(name, "utf8");
    const deflated = deflateRawSync(data, { level: 9 });
    const useDeflate = deflated.length < data.length;
    const body = useDeflate ? deflated : data;
    const method = useDeflate ? 8 : 0;
    const crc = crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    chunks.push(local, nameBuf, body);

    const cd = Buffer.alloc(46);
    cd.writeUInt32LE(0x02014b50, 0);
    cd.writeUInt16LE(20, 4);
    cd.writeUInt16LE(20, 6);
    cd.writeUInt16LE(0x0800, 8);
    cd.writeUInt16LE(method, 10);
    cd.writeUInt32LE(crc, 16);
    cd.writeUInt32LE(body.length, 20);
    cd.writeUInt32LE(data.length, 24);
    cd.writeUInt16LE(nameBuf.length, 28);
    cd.writeUInt32LE(offset, 42);
    central.push(cd, nameBuf);

    offset += local.length + nameBuf.length + body.length;
  }
  const centralBuf = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralBuf.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...chunks, centralBuf, end]);
}

const WEB_XML = `<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                             https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0">

  <display-name>VXCTech</display-name>

  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
  </welcome-file-list>

  <!-- SPA fallback: unknown routes (/services, /about, ...) serve index.html -->
  <error-page>
    <error-code>404</error-code>
    <location>/index.html</location>
  </error-page>

  <mime-mapping><extension>webmanifest</extension><mime-type>application/manifest+json</mime-type></mime-mapping>
  <mime-mapping><extension>svg</extension><mime-type>image/svg+xml</mime-type></mime-mapping>
  <mime-mapping><extension>woff2</extension><mime-type>font/woff2</mime-type></mime-mapping>
</web-app>
`;

async function snapshotIndexHtml() {
  const entry = path.join(outDir, "server", "index.mjs");
  if (!fs.existsSync(entry)) throw new Error(`Missing build output: ${entry}`);

  const server = spawn(process.execPath, [entry], {
    env: { ...process.env, PORT, HOST: "127.0.0.1", NODE_ENV: "production" },
    stdio: "ignore",
  });

  try {
    let html = "";
    for (let i = 0; i < 60; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${PORT}/`);
        if (res.ok) {
          html = await res.text();
          break;
        }
      } catch {
        /* not up yet */
      }
      await new Promise((r) => setTimeout(r, 500));
    }
    if (!html) throw new Error("Could not snapshot / from the built server");
    return html;
  } finally {
    server.kill("SIGKILL");
  }
}

async function main() {
  console.log("→ Building production assets…");
  const runner = fs.existsSync(path.join(root, "bun.lock")) ? "bun" : "npm";
  await run(runner, ["run", "build"]);

  console.log("→ Snapshotting index.html…");
  const html = await snapshotIndexHtml();

  console.log("→ Staging WAR contents…");
  fs.rmSync(stage, { recursive: true, force: true });
  fs.mkdirSync(stage, { recursive: true });
  copyDir(path.join(outDir, "public"), stage);
  copyDir(path.join(root, "public"), stage);
  fs.writeFileSync(path.join(stage, "index.html"), html);
  fs.mkdirSync(path.join(stage, "WEB-INF"), { recursive: true });
  fs.writeFileSync(path.join(stage, "WEB-INF", "web.xml"), WEB_XML);

  console.log("→ Writing dist/ROOT.war…");
  const files = walk(stage).map((name) => ({ name, data: fs.readFileSync(path.join(stage, name)) }));
  fs.writeFileSync(warPath, zip(files));

  const kb = (fs.statSync(warPath).size / 1024).toFixed(1);
  console.log(`✔ dist/ROOT.war (${files.length} entries, ${kb} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
