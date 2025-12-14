# Nest Http Template

A best practice for using Prisma + Postgres, Socket.IO (Guest or authentication required) and Zod data validation. And it covers unit testing and integration testing.

![](https://github.com/Innei/nest-http-prisma-zod/assets/41265413/beb9fac0-19c8-448f-ac28-9299765ed899)

## Which Tech Stack In Use

- Framework: NestJS (Based on Fastify)
- Language: TypeScript (Best practices, Not AnyScript)
- Database ODM: Prisma (Fully type-safe schema and query)
- Data Validation: Zod
- Testing: Vitest
- Package Manager: pnpm
- DevOps: Docker
- Other: Monorepo, Prettier, ESLint, Husky, Bump Version, etc.


## Run in docker compose

1. Copy and adjust `.env.template` to `.env`

```sh
cp .env.template .env
vim .env
```

2. 

```sh
docker build . -t innei/nest-http-prisma-zod
docker compose up
```

## How to start development

```bash
pnpm run init # first time
npm run dev
```

**Before you start dev, do not forget copy `.env.template` to `.env`**

## Authentication

- Browser-based clients authenticate via the `authjs.session-token` cookie. The API now recognizes that cookie on both CSR and SSR calls.
- Programmatic callers can use the same session cookie or send an `Authorization: Bearer <token>` header. Bearer tokens are issued by `POST /auth/login` or, for existing sessions, `POST /auth/access-token`.
- To revoke credentials, call `DELETE /auth/session`; it removes the stored session (if any) and revokes bearer tokens. Clients should still clear their cookies/tokens locally.
- Both credential types are accepted transparently by the global `Auth` guard.
- See `apps/core/src/modules/auth/auth.controller.ts` for the access-token endpoint and `apps/core/src/common/guards/auth.guard.ts` for the combined guard logic.

## Shared Contracts Package

`packages/shared-contracts` is the canonical source of all REST contracts shared across backend and Next.js apps.

- Package name: `@casandra-ai/shared-contracts`
- Registry: `https://npm.pkg.github.com`

### Publishing

```bash
export GITHUB_PAT=ghp_your_pat_with_write_packages
pnpm --filter @casandra-ai/shared-contracts build
pnpm --filter @casandra-ai/shared-contracts publish --access public
```

### Consuming

Add the scope to `.npmrc` (already present in repo root):

```
@casandra-ai:registry=https://npm.pkg.github.com
```

Then install in your app:

```bash
pnpm add @casandra-ai/shared-contracts
```

Update imports from local contract files to the package (e.g. `import { Address } from '@casandra-ai/shared-contracts/address'`).

## Error Handling

- Business errors return `{ ok, code, message }` where `message` is resolved by `nestjs-i18n`.
- Add or update locale strings under `apps/core/src/i18n/<lang>/errors.json` when introducing new error codes.

## Using this template for your own project

Just tap the `Fork` button.

### Write an service unit test

### Write an route integration test

## TODO

- [x] Custom Logger without consola
- [x] Prisma pagination implementation
- [x] Fully testing unit and e2e
- [ ] Data caching and API caching without cache-manager

## License

2023 © Innei, Released under the MIT License.

> [Personal Website](https://innei.in/) · GitHub [@Innei](https://github.com/innei/)
