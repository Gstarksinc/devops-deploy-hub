# syntax=docker/dockerfile:1

# ============================================
# VXCTech Landing Page — Production Dockerfile
# ============================================
# The project uses Bun (bun.lock) and builds through TanStack Start/Nitro
# into .output/. Build with Bun, run the server with Node.

# ---------------------------------------------------------------------------
# Stage 1: Dependencies
# ---------------------------------------------------------------------------
FROM oven/bun:1-alpine AS deps

WORKDIR /app

# Copy package manifests (bunfig.toml matters: it configures the install)
COPY package.json bun.lock bunfig.toml ./

RUN bun install --frozen-lockfile

# ---------------------------------------------------------------------------
# Stage 2: Build
# ---------------------------------------------------------------------------
FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the TanStack Start app (outputs to .output/)
RUN bun run build

# ---------------------------------------------------------------------------
# Stage 3: Production Runner
# ---------------------------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=builder /app/.output ./.output

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/').on('error', () => process.exit(1))" || exit 1

CMD ["node", ".output/server/index.mjs"]
