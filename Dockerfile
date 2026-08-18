# syntax=docker/dockerfile:1

# =============================================================================
# VXCTech — production image
#   Stage 1 (Node/Bun): install -> build -> package dist/ROOT.war
#   Stage 2 (Tomcat)  : serve ROOT.war on :8080   (no Node on the runtime host)
# =============================================================================

# ---------------------------------------------------------------------------
# Stage 1: Build + WAR packaging
# ---------------------------------------------------------------------------
FROM oven/bun:1-debian AS builder

WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .

# Produces dist/ROOT.war (static assets + WEB-INF/web.xml SPA fallback)
RUN bun run package:war && test -f dist/ROOT.war

# ---------------------------------------------------------------------------
# Stage 2: Tomcat runtime
# ---------------------------------------------------------------------------
FROM tomcat:10.1-jre17-temurin

# Serve the app at the context root
RUN rm -rf /usr/local/tomcat/webapps/*

COPY --from=builder /app/dist/ROOT.war /usr/local/tomcat/webapps/ROOT.war

ENV CATALINA_OPTS="-Xms128m -Xmx512m"

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD ["sh", "-c", "curl -fsS http://localhost:8080/ > /dev/null || exit 1"]

CMD ["catalina.sh", "run"]
