# syntax=docker/dockerfile:1

# ============================================
# VXCTech Landing Page — Production Dockerfile
# ============================================
# TanStack Start builds through Nitro into .output/.
# This multi-stage image builds the app and then runs the Nitro server.

# ---------------------------------------------------------------------------
# Stage 1: Dependencies
# ---------------------------------------------------------------------------
FROM node:20-alpine AS deps

WORKDIR /app

# Install build tooling needed for native dependencies (if any)
RUN apk add --no-cache libc6-compat

# Copy package manifests and install exact versions
COPY package.json bun.lockb* ./
RUN if [ -f bun.lockb ]; then npm install -g bun && bun install --frozen-lockfile; else npm ci --legacy-peer-deps; fi

# ---------------------------------------------------------------------------
# Stage 2: Build
# ---------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy installed dependencies from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code and config
COPY . .

# Build the TanStack Start app (outputs to .output/)
RUN npm run build

# ---------------------------------------------------------------------------
# Stage 3: Production Runner
# ---------------------------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy only the Nitro build output
COPY --from=builder /app/.output ./.output

# Expose the application port
EXPOSE 3000

# Health check (optional, lightweight TCP check)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/').on('error', () => process.exit(1))" || exit 1

# Start the Nitro server
CMD ["node", ".output/server/index.mjs"]
