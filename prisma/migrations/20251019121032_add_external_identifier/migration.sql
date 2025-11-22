-- Migration: add ExternalIdentifier table
-- Run this SQL against your Azure Postgres DB (ensure you have a backup first)

BEGIN;

-- Create ExternalIdentifier table
CREATE TABLE IF NOT EXISTS "ExternalIdentifier" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "resourceType" varchar(64) NOT NULL,
  "resourceId" uuid NULL,
  "system" varchar(512) NOT NULL,
  "value" varchar(512) NOT NULL,
  "createdAt" timestamptz DEFAULT now() NOT NULL,
  "updatedAt" timestamptz DEFAULT now() NOT NULL
);

-- Unique constraint to ensure deterministic linking
CREATE UNIQUE INDEX IF NOT EXISTS "ExternalIdentifier_system_value_resourceType_unique"
  ON "ExternalIdentifier" ("system", "value", "resourceType");

-- Index on resourceId for joins
CREATE INDEX IF NOT EXISTS "ExternalIdentifier_resourceId_index" ON "ExternalIdentifier" ("resourceId");

COMMIT;


