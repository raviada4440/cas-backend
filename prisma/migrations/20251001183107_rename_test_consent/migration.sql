/*
  Warnings:

  - You are about to drop the column `testConsentId` on the `ConsentAuditLog` table. All the data in the column will be lost.
  - You are about to drop the column `testConsentId` on the `LabOrderConsent` table. All the data in the column will be lost.
  - You are about to drop the `TestConsent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ConsentAuditLog" DROP CONSTRAINT "ConsentAuditLog_testConsentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LabOrderConsent" DROP CONSTRAINT "LabOrderConsent_testConsentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TestConsent" DROP CONSTRAINT "TestConsent_consentTemplateId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TestConsent" DROP CONSTRAINT "TestConsent_testConfigurationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TestConsent" DROP CONSTRAINT "TestConsent_testId_fkey";

-- DropIndex
DROP INDEX "public"."ConsentAuditLog_testConsentId_idx";

-- AlterTable
ALTER TABLE "public"."ConsentAuditLog" DROP COLUMN "testConsentId",
ADD COLUMN     "versionConsentId" UUID,
ADD COLUMN     "versionId" UUID;

-- AlterTable
ALTER TABLE "public"."LabOrderConsent" DROP COLUMN "testConsentId",
ADD COLUMN     "versionConsentId" UUID;

-- DropTable
DROP TABLE "public"."TestConsent";

-- CreateTable
CREATE TABLE "public"."TestCatalogVersionConsent" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "configurationId" UUID,
    "consentTemplateId" UUID NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "customTitle" VARCHAR(255),
    "customContent" TEXT,
    "conditionalLogic" TEXT,
    "dependsOnConsent" UUID,
    "createdBy" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersionConsent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TestCatalogVersionConsent_versionId_idx" ON "public"."TestCatalogVersionConsent"("versionId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionConsent_configurationId_idx" ON "public"."TestCatalogVersionConsent"("configurationId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionConsent_consentTemplateId_idx" ON "public"."TestCatalogVersionConsent"("consentTemplateId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionConsent_isRequired_idx" ON "public"."TestCatalogVersionConsent"("isRequired");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersionConsent_versionId_consentTemplateId_key" ON "public"."TestCatalogVersionConsent"("versionId", "consentTemplateId");

-- CreateIndex
CREATE INDEX "ConsentAuditLog_versionId_idx" ON "public"."ConsentAuditLog"("versionId");

-- CreateIndex
CREATE INDEX "ConsentAuditLog_versionConsentId_idx" ON "public"."ConsentAuditLog"("versionConsentId");

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionConsent" ADD CONSTRAINT "TestCatalogVersionConsent_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionConsent" ADD CONSTRAINT "TestCatalogVersionConsent_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionConsent" ADD CONSTRAINT "TestCatalogVersionConsent_consentTemplateId_fkey" FOREIGN KEY ("consentTemplateId") REFERENCES "public"."ConsentTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderConsent" ADD CONSTRAINT "LabOrderConsent_versionConsentId_fkey" FOREIGN KEY ("versionConsentId") REFERENCES "public"."TestCatalogVersionConsent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ConsentAuditLog" ADD CONSTRAINT "ConsentAuditLog_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ConsentAuditLog" ADD CONSTRAINT "ConsentAuditLog_versionConsentId_fkey" FOREIGN KEY ("versionConsentId") REFERENCES "public"."TestCatalogVersionConsent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
