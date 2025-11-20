-- CreateEnum
CREATE TYPE "public"."OrderFormTemplateStatus" AS ENUM ('DRAFT', 'ACTIVE', 'RETIRED');

-- CreateTable
CREATE TABLE "public"."OrderFormSection" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "organizationId" UUID,
    "createdBy" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OrderFormSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderFormTemplate" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "orderFormSectionId" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "status" "public"."OrderFormTemplateStatus" NOT NULL DEFAULT 'DRAFT',
    "version" INTEGER NOT NULL DEFAULT 1,
    "effectiveDate" TIMESTAMP(0),
    "retiredDate" TIMESTAMP(0),
    "formSchema" JSONB,
    "layoutSchema" JSONB,
    "organizationId" UUID,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OrderFormTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogVersionOrderForm" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "configurationId" UUID,
    "orderFormTemplateId" UUID NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "customTitle" VARCHAR(255),
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "createdBy" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersionOrderForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderForm" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID NOT NULL,
    "versionOrderFormId" UUID,
    "orderFormTemplateId" UUID,
    "sectionName" VARCHAR(255) NOT NULL,
    "templateName" VARCHAR(255),
    "formSchema" JSONB,
    "responses" JSONB,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(0),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OrderFormSection_organizationId_idx" ON "public"."OrderFormSection"("organizationId");

-- CreateIndex
CREATE INDEX "OrderFormSection_isActive_idx" ON "public"."OrderFormSection"("isActive");

-- CreateIndex
CREATE INDEX "OrderFormSection_sortOrder_idx" ON "public"."OrderFormSection"("sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "OrderFormSection_name_organizationId_key" ON "public"."OrderFormSection"("name", "organizationId");

-- CreateIndex
CREATE INDEX "OrderFormTemplate_orderFormSectionId_idx" ON "public"."OrderFormTemplate"("orderFormSectionId");

-- CreateIndex
CREATE INDEX "OrderFormTemplate_organizationId_idx" ON "public"."OrderFormTemplate"("organizationId");

-- CreateIndex
CREATE INDEX "OrderFormTemplate_status_idx" ON "public"."OrderFormTemplate"("status");

-- CreateIndex
CREATE UNIQUE INDEX "OrderFormTemplate_orderFormSectionId_name_organizationId_key" ON "public"."OrderFormTemplate"("orderFormSectionId", "name", "organizationId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionOrderForm_versionId_idx" ON "public"."TestCatalogVersionOrderForm"("versionId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionOrderForm_configurationId_idx" ON "public"."TestCatalogVersionOrderForm"("configurationId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionOrderForm_orderFormTemplateId_idx" ON "public"."TestCatalogVersionOrderForm"("orderFormTemplateId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionOrderForm_displayOrder_idx" ON "public"."TestCatalogVersionOrderForm"("displayOrder");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersionOrderForm_versionId_orderFormTemplateId_c_key" ON "public"."TestCatalogVersionOrderForm"("versionId", "orderFormTemplateId", "configurationId");

-- CreateIndex
CREATE INDEX "LabOrderForm_labOrderId_idx" ON "public"."LabOrderForm"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderForm_versionOrderFormId_idx" ON "public"."LabOrderForm"("versionOrderFormId");

-- CreateIndex
CREATE INDEX "LabOrderForm_orderFormTemplateId_idx" ON "public"."LabOrderForm"("orderFormTemplateId");

-- AddForeignKey
ALTER TABLE "public"."OrderFormSection" ADD CONSTRAINT "OrderFormSection_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderFormTemplate" ADD CONSTRAINT "OrderFormTemplate_orderFormSectionId_fkey" FOREIGN KEY ("orderFormSectionId") REFERENCES "public"."OrderFormSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderFormTemplate" ADD CONSTRAINT "OrderFormTemplate_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionOrderForm" ADD CONSTRAINT "TestCatalogVersionOrderForm_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionOrderForm" ADD CONSTRAINT "TestCatalogVersionOrderForm_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionOrderForm" ADD CONSTRAINT "TestCatalogVersionOrderForm_orderFormTemplateId_fkey" FOREIGN KEY ("orderFormTemplateId") REFERENCES "public"."OrderFormTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderForm" ADD CONSTRAINT "LabOrderForm_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderForm" ADD CONSTRAINT "LabOrderForm_versionOrderFormId_fkey" FOREIGN KEY ("versionOrderFormId") REFERENCES "public"."TestCatalogVersionOrderForm"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderForm" ADD CONSTRAINT "LabOrderForm_orderFormTemplateId_fkey" FOREIGN KEY ("orderFormTemplateId") REFERENCES "public"."OrderFormTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
