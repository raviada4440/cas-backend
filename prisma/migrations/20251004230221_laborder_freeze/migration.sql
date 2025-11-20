/*
  Warnings:

  - Added the required column `testVersionId` to the `LabOrder` table without a default value. This is not possible if the table is not empty.
  - Made the column `testConfigurationId` on table `LabOrder` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."LabOrder" DROP CONSTRAINT "LabOrder_testConfigurationId_fkey";

-- AlterTable
ALTER TABLE "public"."LabOrder" ADD COLUMN     "testVersionId" UUID NOT NULL,
ALTER COLUMN "testConfigurationId" SET NOT NULL;

-- CreateIndex
CREATE INDEX "LabOrder_testVersionId_idx" ON "public"."LabOrder"("testVersionId");

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_testVersionId_fkey" FOREIGN KEY ("testVersionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_testConfigurationId_fkey" FOREIGN KEY ("testConfigurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
