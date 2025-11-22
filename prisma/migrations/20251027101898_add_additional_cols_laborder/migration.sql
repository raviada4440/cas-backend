-- AlterTable
ALTER TABLE "public"."LabOrder" ADD COLUMN     "clinicalAttachments" JSONB,
ADD COLUMN     "clinicalDetails" TEXT,
ADD COLUMN     "clinicalNotes" TEXT,
ADD COLUMN     "clinicalPresentation" TEXT,
ADD COLUMN     "clinicalTesting" TEXT,
ADD COLUMN     "riskFlagNotes" TEXT,
ADD COLUMN     "riskFlags" JSONB;

-- AlterTable
ALTER TABLE "public"."LabOrderBilling" ADD COLUMN     "benefitsId" VARCHAR(512),
ADD COLUMN     "deductibleAmount" DECIMAL(10,2),
ADD COLUMN     "groupNumber" VARCHAR(512),
ADD COLUMN     "insuredDob" DATE,
ADD COLUMN     "insuredName" VARCHAR(512),
ADD COLUMN     "insuredPhone" VARCHAR(64),
ADD COLUMN     "insurerState" VARCHAR(64),
ADD COLUMN     "planName" VARCHAR(512),
ADD COLUMN     "referralAuthNumber" VARCHAR(512),
ADD COLUMN     "relationToPatient" VARCHAR(256);

