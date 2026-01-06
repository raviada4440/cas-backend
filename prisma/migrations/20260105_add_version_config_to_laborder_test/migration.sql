-- Add nullable columns to LabOrderTest for version/config
ALTER TABLE "LabOrderTest"
  ADD COLUMN "testVersionId" UUID,
  ADD COLUMN "testConfigurationId" UUID;

-- Backfill from existing LabOrder records where linked
UPDATE "LabOrderTest" lot
SET
  "testVersionId" = lo."testVersionId",
  "testConfigurationId" = lo."testConfigurationId"
FROM "LabOrder" lo
WHERE lot."labOrderId" = lo.id
  AND (lo."testVersionId" IS NOT NULL OR lo."testConfigurationId" IS NOT NULL);

-- Indexes for the new columns
CREATE INDEX "LabOrderTest_testVersionId_idx" ON "LabOrderTest" ("testVersionId");
CREATE INDEX "LabOrderTest_testConfigurationId_idx" ON "LabOrderTest" ("testConfigurationId");

-- Foreign keys to ensure integrity
ALTER TABLE "LabOrderTest"
  ADD CONSTRAINT "LabOrderTest_testVersionId_fkey"
    FOREIGN KEY ("testVersionId") REFERENCES "TestCatalogVersion"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE "LabOrderTest"
  ADD CONSTRAINT "LabOrderTest_testConfigurationId_fkey"
    FOREIGN KEY ("testConfigurationId") REFERENCES "TestCatalogConfiguration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

