-- Ensure labCode is unique (nulls are allowed)
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS "Lab_labCode_key" ON "Lab"("labCode");

