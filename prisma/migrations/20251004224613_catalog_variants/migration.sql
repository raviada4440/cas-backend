-- CreateEnum
CREATE TYPE "public"."TestCatalogConfigurationType" AS ENUM ('OPERATIONAL', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "public"."FamilyStructure" AS ENUM ('NONE', 'PROBAND', 'DUO', 'TRIO');

-- CreateEnum
CREATE TYPE "public"."ParticipantRole" AS ENUM ('PROBAND', 'MOTHER', 'FATHER');

-- AlterTable
ALTER TABLE "public"."TestCatalogConfiguration" ADD COLUMN     "familyStructure" "public"."FamilyStructure",
ADD COLUMN     "operationalCode" VARCHAR(64),
ADD COLUMN     "type" "public"."TestCatalogConfigurationType" NOT NULL DEFAULT 'CUSTOMER';

-- CreateTable
CREATE TABLE "public"."TestConfigCptCode" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "configurationId" UUID NOT NULL,
    "cptCode" VARCHAR(10) NOT NULL,
    "modifier" VARCHAR(8),
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestConfigCptCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestConfigOrderLoinc" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "configurationId" UUID NOT NULL,
    "loincCode" VARCHAR(32) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestConfigOrderLoinc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestConfigResultLoinc" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "configurationId" UUID NOT NULL,
    "resultCode" VARCHAR(32),
    "resultCodeName" TEXT,
    "uom" VARCHAR(32),
    "loincCode" VARCHAR(32) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestConfigResultLoinc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestConfigSpecimenManifest" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "configurationId" UUID NOT NULL,
    "versionSpecimenId" UUID NOT NULL,
    "participantRole" "public"."ParticipantRole" NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "minVolumeOverride" VARCHAR(512),
    "containerOverride" TEXT,
    "specialInstructions" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestConfigSpecimenManifest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TestConfigCptCode_configurationId_idx" ON "public"."TestConfigCptCode"("configurationId");

-- CreateIndex
CREATE INDEX "TestConfigCptCode_cptCode_idx" ON "public"."TestConfigCptCode"("cptCode");

-- CreateIndex
CREATE UNIQUE INDEX "TestConfigCptCode_configurationId_cptCode_modifier_key" ON "public"."TestConfigCptCode"("configurationId", "cptCode", "modifier");

-- CreateIndex
CREATE INDEX "TestConfigOrderLoinc_configurationId_idx" ON "public"."TestConfigOrderLoinc"("configurationId");

-- CreateIndex
CREATE INDEX "TestConfigOrderLoinc_loincCode_idx" ON "public"."TestConfigOrderLoinc"("loincCode");

-- CreateIndex
CREATE UNIQUE INDEX "TestConfigOrderLoinc_configurationId_loincCode_key" ON "public"."TestConfigOrderLoinc"("configurationId", "loincCode");

-- CreateIndex
CREATE INDEX "TestConfigResultLoinc_configurationId_idx" ON "public"."TestConfigResultLoinc"("configurationId");

-- CreateIndex
CREATE INDEX "TestConfigResultLoinc_loincCode_idx" ON "public"."TestConfigResultLoinc"("loincCode");

-- CreateIndex
CREATE UNIQUE INDEX "TestConfigResultLoinc_configurationId_loincCode_key" ON "public"."TestConfigResultLoinc"("configurationId", "loincCode");

-- CreateIndex
CREATE INDEX "TestConfigSpecimenManifest_configurationId_idx" ON "public"."TestConfigSpecimenManifest"("configurationId");

-- CreateIndex
CREATE INDEX "TestConfigSpecimenManifest_versionSpecimenId_idx" ON "public"."TestConfigSpecimenManifest"("versionSpecimenId");

-- CreateIndex
CREATE UNIQUE INDEX "TestConfigSpecimenManifest_configurationId_versionSpecimenI_key" ON "public"."TestConfigSpecimenManifest"("configurationId", "versionSpecimenId", "participantRole");

-- AddForeignKey
ALTER TABLE "public"."TestConfigCptCode" ADD CONSTRAINT "TestConfigCptCode_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConfigOrderLoinc" ADD CONSTRAINT "TestConfigOrderLoinc_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConfigOrderLoinc" ADD CONSTRAINT "TestConfigOrderLoinc_loincCode_fkey" FOREIGN KEY ("loincCode") REFERENCES "public"."Loinc"("loincNum") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConfigResultLoinc" ADD CONSTRAINT "TestConfigResultLoinc_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConfigResultLoinc" ADD CONSTRAINT "TestConfigResultLoinc_loincCode_fkey" FOREIGN KEY ("loincCode") REFERENCES "public"."Loinc"("loincNum") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConfigSpecimenManifest" ADD CONSTRAINT "TestConfigSpecimenManifest_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConfigSpecimenManifest" ADD CONSTRAINT "TestConfigSpecimenManifest_versionSpecimenId_fkey" FOREIGN KEY ("versionSpecimenId") REFERENCES "public"."TestCatalogVersionSpecimen"("id") ON DELETE CASCADE ON UPDATE CASCADE;
