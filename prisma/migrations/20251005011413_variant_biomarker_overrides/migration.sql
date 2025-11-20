/*
  Warnings:

  - You are about to alter the column `minVolumeOverride` on the `TestConfigSpecimenManifest` table. The data in that column could be lost. The data in that column will be cast from `VarChar(512)` to `VarChar(256)`.

*/
-- CreateEnum
CREATE TYPE "public"."BiomarkerOverrideAction" AS ENUM ('INCLUDE', 'EXCLUDE', 'OVERRIDE');

-- AlterTable
ALTER TABLE "public"."TestConfigSpecimenManifest" ALTER COLUMN "minVolumeOverride" SET DATA TYPE VARCHAR(256),
ALTER COLUMN "displayOrder" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."TestConfigBiomarker" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "configurationId" UUID NOT NULL,
    "hgncId" VARCHAR(20) NOT NULL,
    "action" "public"."BiomarkerOverrideAction" NOT NULL,
    "transcriptReference" TEXT,
    "reportTier" VARCHAR(32),
    "isReportable" BOOLEAN,
    "displayOrder" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestConfigBiomarker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TestConfigBiomarker_configurationId_idx" ON "public"."TestConfigBiomarker"("configurationId");

-- CreateIndex
CREATE INDEX "TestConfigBiomarker_hgncId_idx" ON "public"."TestConfigBiomarker"("hgncId");

-- CreateIndex
CREATE UNIQUE INDEX "TestConfigBiomarker_configurationId_hgncId_key" ON "public"."TestConfigBiomarker"("configurationId", "hgncId");

-- AddForeignKey
ALTER TABLE "public"."TestConfigBiomarker" ADD CONSTRAINT "TestConfigBiomarker_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConfigBiomarker" ADD CONSTRAINT "TestConfigBiomarker_hgncId_fkey" FOREIGN KEY ("hgncId") REFERENCES "public"."Biomarker"("hgncId") ON DELETE NO ACTION ON UPDATE CASCADE;
