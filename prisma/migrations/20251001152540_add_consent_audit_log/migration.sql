-- CreateTable
CREATE TABLE "public"."ConsentAuditLog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "consentTemplateId" UUID,
    "testId" UUID,
    "testConsentId" UUID,
    "action" "public"."AuditAction" NOT NULL,
    "fieldName" VARCHAR(255),
    "oldValue" TEXT,
    "newValue" TEXT,
    "changeReason" TEXT,
    "performedBy" UUID,
    "performedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "ConsentAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ConsentAuditLog_consentTemplateId_idx" ON "public"."ConsentAuditLog"("consentTemplateId");

-- CreateIndex
CREATE INDEX "ConsentAuditLog_testId_idx" ON "public"."ConsentAuditLog"("testId");

-- CreateIndex
CREATE INDEX "ConsentAuditLog_testConsentId_idx" ON "public"."ConsentAuditLog"("testConsentId");

-- CreateIndex
CREATE INDEX "ConsentAuditLog_action_idx" ON "public"."ConsentAuditLog"("action");

-- CreateIndex
CREATE INDEX "ConsentAuditLog_performedBy_idx" ON "public"."ConsentAuditLog"("performedBy");

-- CreateIndex
CREATE INDEX "ConsentAuditLog_performedAt_idx" ON "public"."ConsentAuditLog"("performedAt");

-- AddForeignKey
ALTER TABLE "public"."ConsentAuditLog" ADD CONSTRAINT "ConsentAuditLog_consentTemplateId_fkey" FOREIGN KEY ("consentTemplateId") REFERENCES "public"."ConsentTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ConsentAuditLog" ADD CONSTRAINT "ConsentAuditLog_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ConsentAuditLog" ADD CONSTRAINT "ConsentAuditLog_testConsentId_fkey" FOREIGN KEY ("testConsentId") REFERENCES "public"."TestConsent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
