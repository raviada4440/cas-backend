FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
WORKDIR /app
# Build dependencies
RUN apk add --no-cache git make g++ python3 py3-pip

# CI-friendly installs
ENV CI=true

# Optional GitHub token for private registry access
ARG GITHUB_PAT
ENV GITHUB_PAT=${GITHUB_PAT}

# Dummy database URL for Prisma client generation (override in CI/CD if desired)
ARG DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
ENV DATABASE_URL=${DATABASE_URL}

# Install deps (workspace-aware)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps ./apps
COPY packages ./packages
COPY prisma ./prisma
COPY external ./external
RUN NODE_ENV=production pnpm install --frozen-lockfile --prod=false --ignore-scripts

# Generate Prisma client
RUN pnpm run prisma:generate

# Build only core app
RUN pnpm -C apps/core run build

# Prune to production dependencies for the runtime image
RUN pnpm prune --prod

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy production node_modules and built assets
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/core/dist ./apps/core/dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/apps/core/package.json ./apps/core/package.json
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY external ./external

EXPOSE 3333
CMD ["pnpm", "-C", "apps/core", "run", "start:prod"]
