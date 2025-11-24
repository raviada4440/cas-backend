-- Ensure the enum value exists without failing if already present.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_type t
         JOIN pg_enum e ON t.oid = e.enumtypid
    WHERE t.typname = 'UserAttributeUserType'
      AND e.enumlabel = 'Organization'
  ) THEN
    ALTER TYPE "UserAttributeUserType" ADD VALUE 'Organization';
  END IF;
END;
$$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'ExternalIdentifier'
      AND column_name = 'createdAt'
      AND (data_type <> 'timestamp without time zone' OR datetime_precision IS DISTINCT FROM 0)
  ) THEN
    EXECUTE 'ALTER TABLE "ExternalIdentifier" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(0)';
  END IF;

  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'ExternalIdentifier'
      AND column_name = 'updatedAt'
      AND column_default IS NOT NULL
  ) THEN
    EXECUTE 'ALTER TABLE "ExternalIdentifier" ALTER COLUMN "updatedAt" DROP DEFAULT';
  END IF;

  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'ExternalIdentifier'
      AND column_name = 'updatedAt'
      AND (data_type <> 'timestamp without time zone' OR datetime_precision IS DISTINCT FROM 0)
  ) THEN
    EXECUTE 'ALTER TABLE "ExternalIdentifier" ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(0)';
  END IF;
END;
$$;

-- Ensure the column addition is idempotent.
ALTER TABLE "OrganizationEndpoint"
  ADD COLUMN IF NOT EXISTS "wellKnown" VARCHAR(512);

ALTER INDEX IF EXISTS "ExternalIdentifier_resourceId_index" RENAME TO "ExternalIdentifier_resourceId_idx";

ALTER INDEX IF EXISTS "ExternalIdentifier_system_value_resourceType_unique" RENAME TO "ExternalIdentifier_system_value_resourceType_key";
