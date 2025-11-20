/*
  Warnings:

  - You are about to drop the column `familyStructure` on the `TestCatalogConfiguration` table. All the data in the column will be lost.
  - Added the required column `dimension` to the `TestCatalogConfiguration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensionValue` to the `TestCatalogConfiguration` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."VariantDimension" AS ENUM ('FAMILY_STRUCTURE', 'SPECIMEN_RELATIONSHIP', 'REFLEX_MODE', 'PANEL_COMPOSITION', 'SPECIMEN_TYPE', 'METHOD_VARIANT', 'TURNAROUND_VARIANT', 'OPERATIONAL_MODE', 'REPORTING_VARIANT');

-- AlterTable
ALTER TABLE "public"."TestCatalogConfiguration" DROP COLUMN "familyStructure",
ADD COLUMN     "dimension" "public"."VariantDimension" NOT NULL,
ADD COLUMN     "dimensionValue" VARCHAR(64) NOT NULL;

-- CreateIndex
CREATE INDEX "TestCatalogConfiguration_testId_type_dimension_dimensionVal_idx" ON "public"."TestCatalogConfiguration"("testId", "type", "dimension", "dimensionValue", "effectiveDate", "expirationDate");
