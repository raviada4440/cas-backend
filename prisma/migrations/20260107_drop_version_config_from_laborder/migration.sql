-- Drop legacy version/config columns from LabOrder and testId from LabOrderTest

ALTER TABLE "LabOrder"
  DROP COLUMN IF EXISTS "testVersionId",
  DROP COLUMN IF EXISTS "testConfigurationId";

ALTER TABLE "LabOrderTest"
  DROP COLUMN IF EXISTS "testId";

