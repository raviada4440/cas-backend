-- AlterTable
ALTER TABLE "public"."LabOrder" ADD COLUMN     "labId" UUID;

-- AlterTable
ALTER TABLE "public"."Patient" ADD COLUMN     "addressLine1" VARCHAR(512),
ADD COLUMN     "addressLine2" VARCHAR(512),
ADD COLUMN     "city" VARCHAR(255),
ADD COLUMN     "country" VARCHAR(128),
ADD COLUMN     "postalCode" VARCHAR(45),
ADD COLUMN     "state" VARCHAR(255);

-- CreateIndex
CREATE INDEX "LabOrder_labId_idx" ON "public"."LabOrder"("labId");

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_labId_fkey" FOREIGN KEY ("labId") REFERENCES "public"."Lab"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

