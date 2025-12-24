# syntax=docker/dockerfile:1.7
#
# Debian-based, multi-stage build for a PNPM monorepo:
# - Root package.json + pnpm-workspace.yaml (+ pnpmfile.cjs)
# - prisma/ package (with prisma.config.ts)
# - apps/core NestJS app
# - packages/shared-contracts (workspace dep)
# - external/ (for file: overrides like zeptomatch)
#
# Key goals:
# 1) Build needs DEV deps (nest build --webpack requires webpack).
# 2) prisma generate needs prisma config deps (dotenv/dotenv-expand, etc).
# 3) Runtime must include true PROD deps resolvable by Node (fixes zx-cjs missing).
#
# Works for:
# - local docker build/run with --env-file .env
# - Coolify (Dockerfile build)
# - Koyeb (Dockerfile mode)

############################
# Base
############################
FROM node:20-bookworm-slim AS base
WORKDIR /repo
RUN corepack enable
ENV CI=true

############################
# Stage 1: deps (install all deps for build)
############################
FROM base AS deps

RUN apt-get update && apt-get install -y --no-install-recommends \
  git ca-certificates python3 make g++ openssl \
  && rm -rf /var/lib/apt/lists/*

ARG GITHUB_PAT
ENV GITHUB_PAT=${GITHUB_PAT}

ARG USE_LOCAL_ZEPTOMATCH=0
ENV USE_LOCAL_ZEPTOMATCH=${USE_LOCAL_ZEPTOMATCH}

ARG DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"
ENV DATABASE_URL=${DATABASE_URL}
ARG REDIS_URL=""
ENV REDIS_URL=${REDIS_URL}

ENV HUSKY=0

# ---- Copy only manifests first (better cache) ----
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY .npmrc ./.npmrc
COPY pnpmfile.cjs ./pnpmfile.cjs

COPY prisma/package.json prisma/package.json
COPY apps/core/package.json apps/core/package.json
COPY packages/shared-contracts/package.json packages/shared-contracts/package.json

# Local file overrides live here (zeptomatch etc)
COPY external external

# Need prisma schema for type generation
COPY prisma prisma

# Avoid prepare/husky scripts during Docker installs
ENV npm_config_ignore_scripts=true
RUN pnpm install --no-frozen-lockfile
ENV npm_config_ignore_scripts=false

# Generate Prisma client for build-time types
RUN pnpm -C prisma exec prisma generate

############################
# Stage 2: build (compile + prisma generate)
############################
FROM deps AS build

COPY prisma prisma
COPY apps apps
COPY packages packages

RUN pnpm -C apps/core run build

############################
# Stage 3: prod-deps (install prod-only deps, and VERIFY zx-cjs)
############################
FROM base AS prod-deps
WORKDIR /repo

ARG GITHUB_PAT
ENV GITHUB_PAT=${GITHUB_PAT}

ARG USE_LOCAL_ZEPTOMATCH=0
ENV USE_LOCAL_ZEPTOMATCH=${USE_LOCAL_ZEPTOMATCH}

ARG DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"
ENV DATABASE_URL=${DATABASE_URL}
ARG REDIS_URL=""
ENV REDIS_URL=${REDIS_URL}

ENV NODE_ENV=production
ENV HUSKY=0
ARG REDIS_URL=""
ENV REDIS_URL=${REDIS_URL}

# Copy manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY .npmrc ./.npmrc
COPY pnpmfile.cjs ./pnpmfile.cjs

COPY prisma/package.json prisma/package.json
COPY apps/core/package.json apps/core/package.json
COPY packages/shared-contracts/package.json packages/shared-contracts/package.json

COPY external external
COPY prisma prisma

# PROD-only install for the whole workspace
RUN pnpm install --prod --no-frozen-lockfile
# Generate Prisma client into prod node_modules
RUN pnpm -C prisma exec prisma generate

# ---- HARD ASSERTIONS (fail the build if deps are missing) ----
# 1) Must resolve from workspace context
RUN pnpm -C apps/core exec node -p "require.resolve('zx-cjs')"
# 2) Must be require-able (not just resolvable)
RUN pnpm -C apps/core exec node -e "require('zx-cjs'); console.log('zx-cjs OK')"

############################
# Stage 4: runtime
############################
FROM node:20-bookworm-slim AS runner
WORKDIR /repo

ENV NODE_ENV=production
ENV HUSKY=0

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates tini curl openssl \
  && rm -rf /var/lib/apt/lists/*

# Copy prod deps (root + workspace-level) so Node resolution always works
COPY --from=prod-deps /repo/node_modules ./node_modules
COPY --from=prod-deps /repo/apps/core/node_modules ./apps/core/node_modules

COPY --from=prod-deps /repo/package.json ./package.json
COPY --from=prod-deps /repo/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=prod-deps /repo/pnpm-lock.yaml ./pnpm-lock.yaml

# Copy compiled output
COPY --from=build /repo/apps/core/dist ./apps/core/dist
COPY --from=build /repo/apps/core/package.json ./apps/core/package.json

# Prisma runtime files
COPY --from=build /repo/prisma ./prisma

# Only keep if truly needed at runtime
COPY --from=build /repo/external ./external

EXPOSE 3333
ENTRYPOINT ["/usr/bin/tini","--"]
CMD ["node", "apps/core/dist/main.js"]
