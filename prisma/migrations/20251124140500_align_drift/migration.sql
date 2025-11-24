-- Baseline migration to capture previously applied drift.

-- Ensure the pgvector extension is registered for Prisma's history.
CREATE EXTENSION IF NOT EXISTS "vector";


