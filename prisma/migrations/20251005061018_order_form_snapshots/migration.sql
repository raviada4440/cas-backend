-- AlterTable
ALTER TABLE "public"."LabOrderForm" ADD COLUMN     "displayOrder" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "layoutSchema" JSONB;

-- CreateIndex
CREATE INDEX "LabOrderForm_displayOrder_idx" ON "public"."LabOrderForm"("displayOrder");
