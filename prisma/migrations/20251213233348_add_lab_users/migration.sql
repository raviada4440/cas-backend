-- AlterEnum
ALTER TYPE "UserAttributeUserType" ADD VALUE 'Lab';

-- CreateTable
CREATE TABLE "LabUser" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "labId" UUID NOT NULL,
    "role" VARCHAR(64),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LabUser_userId_idx" ON "LabUser"("userId");

-- CreateIndex
CREATE INDEX "LabUser_labId_idx" ON "LabUser"("labId");

-- AddForeignKey
ALTER TABLE "LabUser" ADD CONSTRAINT "LabUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabUser" ADD CONSTRAINT "LabUser_labId_fkey" FOREIGN KEY ("labId") REFERENCES "Lab"("id") ON DELETE CASCADE ON UPDATE CASCADE;
