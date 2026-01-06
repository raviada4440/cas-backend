-- Backfill LabOrderTest: first update existing rows lacking version/config/testId, then insert missing rows.
-- Derive testId from the version or configuration when possible.

-- 1) Update existing LabOrderTest rows where labOrderId matches and fields are NULL.
UPDATE "LabOrderTest" lot
SET
  "testVersionId" = COALESCE(lot."testVersionId", lo."testVersionId", cfg."versionId"),
  "testConfigurationId" = COALESCE(lot."testConfigurationId", lo."testConfigurationId"),
  "testId" = COALESCE(lot."testId", v."testId", cfg."testId")
FROM "LabOrder" lo
LEFT JOIN "TestCatalogVersion" v ON v.id = lo."testVersionId"
LEFT JOIN "TestCatalogConfiguration" cfg ON cfg.id = lo."testConfigurationId"
WHERE lot."labOrderId" = lo.id
  AND (lot."testVersionId" IS NULL OR lot."testConfigurationId" IS NULL OR lot."testId" IS NULL)
  AND (lo."testVersionId" IS NOT NULL OR lo."testConfigurationId" IS NOT NULL OR cfg."versionId" IS NOT NULL);

-- 2) Insert LabOrderTest rows for LabOrders that still have none.
WITH base AS (
  SELECT
    lo.id AS lab_order_id,
    COALESCE(lo."testVersionId", cfg."versionId") AS version_id,
    lo."testConfigurationId" AS config_id,
    COALESCE(v."testId", cfg."testId") AS test_id
  FROM "LabOrder" lo
  LEFT JOIN "LabOrderTest" lot ON lot."labOrderId" = lo.id
  LEFT JOIN "TestCatalogVersion" v ON v.id = lo."testVersionId"
  LEFT JOIN "TestCatalogConfiguration" cfg ON cfg.id = lo."testConfigurationId"
  WHERE lot.id IS NULL
    AND (lo."testVersionId" IS NOT NULL OR lo."testConfigurationId" IS NOT NULL OR cfg."versionId" IS NOT NULL)
)
INSERT INTO "LabOrderTest" (
  id,
  "labOrderId",
  "testId",
  "testVersionId",
  "testConfigurationId",
  "createdAt",
  "updatedAt"
)
SELECT
  gen_random_uuid(),
  base.lab_order_id,
  base.test_id,
  base.version_id,
  base.config_id,
  NOW(),
  NOW()
FROM base;

