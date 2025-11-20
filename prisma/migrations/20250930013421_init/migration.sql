-- CreateEnum
CREATE TYPE "public"."TestCatalogVersionStatus" AS ENUM ('DRAFT', 'IN_REVIEW', 'APPROVED', 'PUBLISHED', 'ARCHIVED', 'RETIRED');

-- CreateEnum
CREATE TYPE "public"."TestCatalogStatus" AS ENUM ('DRAFT', 'REVIEW', 'APPROVED', 'PUBLISHED', 'ARCHIVED', 'RETIRED');

-- CreateEnum
CREATE TYPE "public"."TestCatalogChannel" AS ENUM ('INTERNAL', 'CUSTOMER_PORTAL', 'PUBLIC_CATALOG', 'API_ONLY');

-- CreateEnum
CREATE TYPE "public"."TestCatalogConfigurationStatus" AS ENUM ('DRAFT', 'ACTIVE', 'INACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "public"."ConsentType" AS ENUM ('GENERAL_CONSENT', 'SPECIFIC_CONSENT', 'RESEARCH_CONSENT', 'MINOR_CONSENT', 'EMERGENCY_CONSENT', 'CUSTOM_CONSENT', 'HIPAA_PRIVACY_CONSENT');

-- CreateEnum
CREATE TYPE "public"."ConsentTemplateStatus" AS ENUM ('DRAFT', 'ACTIVE', 'RETIRED');

-- CreateEnum
CREATE TYPE "public"."ApprovalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."AuditAction" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'PUBLISH', 'ARCHIVE', 'RETIRE', 'RESTORE', 'APPROVE', 'REJECT', 'VERSION_CREATE', 'REVIEWER_ASSIGNED', 'STATUS_CHANGE', 'VERSION_CHANGE', 'CONFIGURATION_CREATE', 'CONFIGURATION_UPDATE', 'CONFIGURATION_DELETE');

-- CreateEnum
CREATE TYPE "public"."SpecimenType" AS ENUM ('BLOOD_IN_EDTA_PURPLE_TOP', 'EXTRACTED_DNA', 'CULTURED_SKIN_FIBROBLAST', 'BUCCAL_SWAB', 'SALIVA', 'FFPE_TISSUE', 'FFPE_TISSUE_OR_PLASMA', 'PERIPHERAL_BLOOD_OR_BONE_MARROW', 'WHOLE_BLOOD', 'WHOLE_BLOOD_OR_BONE_MARROW', 'WHOLE_BLOOD_EDTA', 'SERUM', 'VARIES', 'URINE', 'SERUM_RED', 'TISSUE', 'AMNIOTIC_FLD', 'TECHONLY', 'WHOLE_BLOOD_ACD', 'PLASMA_NA_CIT', 'PLASMA_EDTA', 'PLASMA', 'CSF', 'PERITONEAL', 'BODY_FLUID', 'PLEURAL_FLUID', 'WHOLE_BLOOD_ACD_B', 'FECAL', 'SYNOVIAL_FLUID', 'SPECIAL', 'WASHED_RBC', 'MECONIUM', 'PANCREATIC_CYST_FLUID', 'AMYLOID', 'HAIR', 'NAIL', 'PLASMA_HEPARIN', 'SERUM_SST', 'LAVAGE', 'WB_SODIUM_HEPARIN', 'WHOLE_BLOOD_EDTA_METAL_FREE_ERB', 'PLASMA_NA_HEPARIN', 'FINE_NEEDLE_WASH', 'SWAB', 'PLASMA_EDTA_META', 'GI_PLASMA', 'BONE_MARROW', 'TISSUE_PARAFFIN', 'LIVER_TISSUE', 'RBCS', 'WHOLE_BLOOD_NAFL_KOX', 'PLASMA_NAFL_KOX', 'EM', 'WHOLE_BLOOD_NA_CIT', 'SEMEN', 'BRONCHIAL_WASHING', 'BREATH', 'CONTROL', 'WB_HEPARIN', 'VAGINAL', 'STONE', 'METAL_FREE_EDTA_PLASMA', 'WB_STRECK', 'FIBROBLASTS', 'SPUTUM', 'FIXED_CELL_PELLET_BONE_MARROW', 'DIALYSATE_FLUID', 'Z_TUBE_PLASMA', 'MMLDRY', 'WHOLE_BLOOD_SLIDE', 'KIDNEY_BIOPSY', 'SUDC_STUDY_SPECIMEN', 'PLASMA_LI_HEPARIN', 'PERIPHERAL_BLOOD', 'PERIPHERAL_WHOLE_BLOOD', 'PLASMA_FROZEN', 'WHOLE_BLOOD_OR_SALIVA');

-- CreateEnum
CREATE TYPE "public"."UserAttributeUserType" AS ENUM ('Admin', 'Provider');

-- CreateEnum
CREATE TYPE "public"."TestCatalogCollectionMethod" AS ENUM ('KIT', 'PSC');

-- CreateTable
CREATE TABLE "public"."Account" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refreshToken" TEXT,
    "accessToken" TEXT,
    "expiresAt" INTEGER,
    "tokenType" TEXT,
    "scope" TEXT,
    "state" VARCHAR(256),
    "idToken" TEXT,
    "sessionState" TEXT,
    "refreshTokenExpiresIn" INTEGER,
    "epicDstu2Patient" VARCHAR(45),
    "appointment" VARCHAR(45),
    "dob" VARCHAR(45),
    "encounter" VARCHAR(45),
    "location" VARCHAR(45),
    "loginDepartment" VARCHAR(45),
    "needPatientBanner" VARCHAR(45),
    "patient" VARCHAR(45),
    "smartStyleUrl" TEXT,
    "unconfirmedStatus" VARCHAR(45),
    "userEmail" VARCHAR(45),
    "username" VARCHAR(45),
    "tenant" VARCHAR(256),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Admin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" VARCHAR(255),
    "userAttributeId" UUID NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Attachment" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "attachmentType" VARCHAR(45),
    "attachmentUrl" VARCHAR(512),
    "fileName" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "fileExt" VARCHAR(10),
    "bucketName" TEXT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "url" VARCHAR(512),
    "previewUrl" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Biomarker" (
    "hgncId" VARCHAR(20) NOT NULL,
    "hgncStatus" VARCHAR(128),
    "hgncApprovedSymbol" VARCHAR(512),
    "hgncApprovedName" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Biomarker_pkey" PRIMARY KEY ("hgncId")
);

-- CreateTable
CREATE TABLE "public"."Icd" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" VARCHAR(45),
    "shortDescription" TEXT,
    "alias1" VARCHAR(512),
    "alias2" VARCHAR(512),
    "alias3" VARCHAR(512),
    "alias4" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Icd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CptCode" (
    "code" VARCHAR(10) NOT NULL,
    "shortDescription" TEXT,
    "longDescription" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "CptCode_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "public"."Loinc" (
    "loincNum" VARCHAR(128) NOT NULL,
    "component" TEXT,
    "property" TEXT,
    "timeAspct" TEXT,
    "system" TEXT,
    "scaleTyp" TEXT,
    "methodTyp" TEXT,
    "class" TEXT,
    "versionLastChanged" TEXT,
    "chngType" TEXT,
    "definitionDescription" TEXT,
    "status" TEXT,
    "consumerName" TEXT,
    "classtype" INTEGER,
    "formula" TEXT,
    "exmplAnswers" TEXT,
    "surveyQuestText" TEXT,
    "surveyQuestSrc" TEXT,
    "unitsrequired" TEXT,
    "relatednames2" TEXT,
    "shortname" TEXT,
    "orderObs" TEXT,
    "hl7FieldSubfieldId" TEXT,
    "externalCopyrightNotice" TEXT,
    "exampleUnits" TEXT,
    "longCommonName" TEXT,
    "exampleUcumUnits" TEXT,
    "statusReason" TEXT,
    "statusText" TEXT,
    "changeReasonPublic" TEXT,
    "commonTestRank" INTEGER,
    "commonOrderRank" INTEGER,
    "hl7AttachmentStructure" TEXT,
    "externalCopyrightLink" TEXT,
    "panelType" TEXT,
    "askAtOrderEntry" TEXT,
    "associatedObservations" TEXT,
    "versionFirstReleased" TEXT,
    "validHl7AttachmentRequest" TEXT,
    "displayName" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Loinc_pkey" PRIMARY KEY ("loincNum")
);

-- CreateTable
CREATE TABLE "public"."ReviewThread" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(0),
    "title" VARCHAR(512),

    CONSTRAINT "ReviewThread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReviewComment" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "threadId" UUID NOT NULL,
    "body" TEXT NOT NULL,
    "createdBy" UUID NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReviewComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labName" VARCHAR(512),
    "labCode" VARCHAR(2),
    "address" VARCHAR(512),
    "city" VARCHAR(512),
    "state" VARCHAR(512),
    "zip" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Lab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrder" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "orderNumber" SERIAL NOT NULL,
    "accessionNumber" SERIAL NOT NULL,
    "testConfigurationId" UUID,
    "orderingProviderId" UUID,
    "treatingProviderId" UUID,
    "patientId" UUID,
    "patientMRN" VARCHAR(45),
    "patientMobile" TEXT,
    "patientEmail" TEXT,
    "organizationId" UUID,
    "orderDate" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "orderNotes" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderAttachment" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID,
    "attachmentId" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderBilling" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID,
    "billToId" UUID,
    "healthPlanId" UUID,
    "patientStatus" VARCHAR(45),
    "sponsoredTestCouponCode" VARCHAR(45),
    "billingType" VARCHAR(45),
    "insuranceProvider" VARCHAR(512),
    "policyNumber" VARCHAR(512),
    "copayAmount" DECIMAL(10,2),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderBilling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderIcd" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID,
    "icdId" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderIcd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderSpecimen" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID,
    "specimenType" VARCHAR(45),
    "specimenCount" VARCHAR(45),
    "collectedDate" DATE,
    "collectedTime" VARCHAR(45),
    "specimenId" VARCHAR(45),
    "bodySite" VARCHAR(45),
    "tumorType" VARCHAR(45),
    "fixative" VARCHAR(45),
    "fixativeDuration" VARCHAR(45),
    "coldIschemicTime" VARCHAR(45),
    "patientAddress1" VARCHAR(45),
    "patientAddress2" VARCHAR(45),
    "patientCity" VARCHAR(45),
    "patientState" VARCHAR(45),
    "patientZip" VARCHAR(45),
    "pscLab" VARCHAR(45),
    "pscLocation" VARCHAR(45),
    "pscAppointmentAt" DATE,
    "pscAppointmentTime" VARCHAR(45),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderSpecimen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderSponsoredTestConsent" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID,
    "sponsoredCasandraTestId" VARCHAR(512),
    "providerName" VARCHAR(45),
    "providerNpi" VARCHAR(45),
    "consentAt" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderSponsoredTestConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderStatus" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID,
    "status" VARCHAR(45),
    "statusDate" TIMESTAMP(0),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderTest" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID,
    "testId" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LoincComponentHierarchy" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "parentId" UUID NOT NULL,
    "level" INTEGER NOT NULL,
    "code" VARCHAR(128) NOT NULL,
    "sequence" VARCHAR(128) NOT NULL,
    "codeText" VARCHAR(128) NOT NULL,
    "component" VARCHAR(128) NOT NULL,
    "property" VARCHAR(128) NOT NULL,
    "timing" VARCHAR(128) NOT NULL,
    "scale" VARCHAR(128) NOT NULL,
    "method" VARCHAR(128) NOT NULL,

    CONSTRAINT "LoincComponentHierarchy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LoincPanelHierarchy" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "parentId" UUID NOT NULL,
    "level" INTEGER NOT NULL,
    "code" VARCHAR(128) NOT NULL,
    "sequence" VARCHAR(128) NOT NULL,
    "codeText" VARCHAR(128) NOT NULL,
    "component" VARCHAR(128) NOT NULL,
    "property" VARCHAR(128) NOT NULL,
    "timing" VARCHAR(128) NOT NULL,
    "scale" VARCHAR(128) NOT NULL,
    "method" VARCHAR(128) NOT NULL,

    CONSTRAINT "LoincPanelHierarchy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LoincUniveralLabOrders" (
    "loincNum" VARCHAR(128) NOT NULL,
    "longCommonName" TEXT,
    "orderObs" TEXT,

    CONSTRAINT "LoincUniveralLabOrders_pkey" PRIMARY KEY ("loincNum")
);

-- CreateTable
CREATE TABLE "public"."Organization" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "href" TEXT,
    "parentId" UUID,
    "level" INTEGER,
    "parentOrgName" VARCHAR(512),
    "orgName" VARCHAR(512),
    "orgType" VARCHAR(512),
    "orgSpecialty" VARCHAR(512),
    "orgAddress" VARCHAR(512),
    "orgCity" VARCHAR(512),
    "orgState" VARCHAR(512),
    "orgZip" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrganizationEndpoint" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "organizationId" UUID,
    "orgName" VARCHAR(512),
    "ehrVendor" VARCHAR(45),
    "fhirVersion" VARCHAR(45),
    "endpoint" VARCHAR(512),
    "issuer" VARCHAR(512),
    "clientId" VARCHAR(255),
    "clientSecret" VARCHAR(512),
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OrganizationEndpoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrganizationFavoriteTest" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "organizationId" UUID,
    "parentId" UUID DEFAULT gen_random_uuid(),
    "parentName" VARCHAR(512),
    "level" INTEGER DEFAULT 0,
    "testId" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OrganizationFavoriteTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Patient" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "firstName" VARCHAR(45),
    "lastName" VARCHAR(512),
    "dateOfBirth" DATE,
    "gender" VARCHAR(512),
    "email" VARCHAR(512),
    "mobile" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PatientOrganization" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "patientId" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "mrn" VARCHAR(45),
    "mobile" VARCHAR(45),
    "email" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "PatientOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Provider" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "href" TEXT,
    "npi" VARCHAR(45),
    "name" VARCHAR(512),
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "email" VARCHAR(255),
    "credentials" VARCHAR(512),
    "specialty" VARCHAR(512),
    "aboutme" TEXT,
    "gender" VARCHAR(512),
    "providerType" VARCHAR(512),
    "affiliation" VARCHAR(512),
    "proceduresAndResearch" TEXT,
    "specialInterests" TEXT,
    "userAttributeId" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProviderEducation" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "providerId" UUID NOT NULL,
    "providerNpi" VARCHAR(45),
    "name" VARCHAR(512),
    "educationType" VARCHAR(512),
    "schoolName" VARCHAR(512),
    "areaOfEducation" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "ProviderEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProviderFavoriteTest" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "providerId" UUID,
    "parentId" UUID DEFAULT gen_random_uuid(),
    "parentName" UUID,
    "level" INTEGER DEFAULT 0,
    "testId" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "ProviderFavoriteTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProviderOrganization" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "providerId" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "providerNpi" VARCHAR(45),
    "name" VARCHAR(512),
    "parentOrgName" VARCHAR(512),
    "orgName" VARCHAR(512),
    "orgAddress" VARCHAR(512),
    "orgCity" VARCHAR(512),
    "orgState" VARCHAR(512),
    "orgZip" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "ProviderOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Session" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sessionToken" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sponsor" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sponsorName" VARCHAR(512),
    "sponsorCode" VARCHAR(2),
    "sponsorWebsite" VARCHAR(512),
    "sponsorType" VARCHAR(45),
    "address" VARCHAR(512),
    "city" VARCHAR(512),
    "state" VARCHAR(512),
    "zip" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Sponsor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SponsoredProgram" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sponsorId" UUID,
    "therapeuticArea" VARCHAR(128),
    "programName" VARCHAR(512),
    "programUrl" VARCHAR(512),
    "programLabUrl" VARCHAR(512),
    "sponsoredTestingUrl" VARCHAR(512),
    "programEligibility" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "SponsoredProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SponsoredTest" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "testId" UUID NOT NULL,
    "labTestId" VARCHAR(512),
    "sponsoredProgramId" UUID,
    "labId" UUID,
    "casandraTestId" VARCHAR(512) NOT NULL,
    "category" VARCHAR(512) NOT NULL,
    "subCategory" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "SponsoredTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labId" UUID,
    "casandraTestId" VARCHAR(512) NOT NULL,
    "labTestId" VARCHAR(512),
    "testName" VARCHAR(512),
    "specialNotes" TEXT,
    "testCategory" VARCHAR(512),
    "testSubCategory" VARCHAR(512),
    "status" "public"."TestCatalogStatus" NOT NULL DEFAULT 'DRAFT',
    "defaultVersionId" UUID,
    "currentVersion" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogVersion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "testId" UUID NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "status" "public"."TestCatalogVersionStatus" NOT NULL DEFAULT 'DRAFT',
    "effectiveDate" TIMESTAMP(0),
    "retiredDate" TIMESTAMP(0),
    "changeReason" TEXT,
    "changeNotes" TEXT,
    "href" TEXT,
    "testName" VARCHAR(512),
    "alternativeName" VARCHAR(512),
    "alternativeName1" VARCHAR(512),
    "alternativeName2" VARCHAR(512),
    "alternativeName3" VARCHAR(512),
    "alternativeName4" VARCHAR(512),
    "alternativeName5" VARCHAR(512),
    "testIncludes" TEXT,
    "methodology" TEXT,
    "testDescription" TEXT,
    "diseases" TEXT,
    "probes" TEXT,
    "clinicalSignificance" TEXT,
    "diseaseIndications" TEXT,
    "testUsage" TEXT,
    "testLimitations" TEXT,
    "isNewYorkApproved" BOOLEAN NOT NULL DEFAULT false,
    "levelOfService" VARCHAR(512),
    "turnAroundTime" VARCHAR(512),
    "referenceRanges" TEXT,
    "setupSchedule" TEXT,
    "testCategory" VARCHAR(512),
    "testSubCategory" VARCHAR(512),
    "specialNotes" TEXT,
    "patientResources" TEXT,
    "providerResources" TEXT,
    "patientResourcesUrl" TEXT,
    "providerResourcesUrl" TEXT,
    "additionalNotes" TEXT,
    "isFDAApproved" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogVersionSpecimen" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "displayName" VARCHAR(256),
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "specimenType" "public"."SpecimenType",
    "specimenRequirements" TEXT,
    "volume" VARCHAR(512),
    "minimumVolume" VARCHAR(512),
    "container" TEXT,
    "specialInstructions" TEXT,
    "alternateContainers" TEXT,
    "preferredVolume" VARCHAR(64),
    "collectionMethod" "public"."TestCatalogCollectionMethod",
    "collection" TEXT,
    "stabilityRequirements" TEXT,
    "storageTransportation" TEXT,
    "patientPreparation" TEXT,
    "causesForRejection" TEXT,
    "processingNotes" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersionSpecimen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogVersionBiomarker" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "hgncId" VARCHAR(20) NOT NULL,
    "transcriptReference" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersionBiomarker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogVersionCptCode" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "cptCode" VARCHAR(10) NOT NULL,
    "modifier" VARCHAR(8),
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersionCptCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogVersionOrderLoinc" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "loincCode" VARCHAR(32) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersionOrderLoinc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogVersionResultLoinc" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID NOT NULL,
    "resultCode" VARCHAR(32),
    "resultCodeName" TEXT,
    "uom" VARCHAR(32),
    "loincCode" VARCHAR(32) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogVersionResultLoinc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogConfiguration" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "testId" UUID NOT NULL,
    "versionId" UUID,
    "configurationName" VARCHAR(255) NOT NULL,
    "versionNumber" INTEGER NOT NULL DEFAULT 1,
    "customerId" UUID,
    "organizationId" UUID,
    "status" "public"."TestCatalogConfigurationStatus" NOT NULL DEFAULT 'DRAFT',
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "customTestName" VARCHAR(512),
    "customDescription" TEXT,
    "customTurnAroundTime" VARCHAR(512),
    "customPricing" DECIMAL(10,2),
    "customInstructions" TEXT,
    "customSpecimenRequirements" TEXT,
    "customCollectionMethod" TEXT,
    "effectiveDate" TIMESTAMP(0),
    "expirationDate" TIMESTAMP(0),
    "lastActivatedAt" TIMESTAMP(0),
    "lastDeactivatedAt" TIMESTAMP(0),
    "requiresConsent" BOOLEAN NOT NULL DEFAULT false,
    "consentTemplateIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "customConsentText" TEXT,
    "requiresApproval" BOOLEAN NOT NULL DEFAULT false,
    "approvalWorkflowId" UUID,
    "approvedBy" UUID,
    "approvedAt" TIMESTAMP(0),
    "createdBy" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ConsentTemplate" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "consentType" "public"."ConsentType" NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "legalText" TEXT,
    "status" "public"."ConsentTemplateStatus" NOT NULL DEFAULT 'DRAFT',
    "version" INTEGER NOT NULL DEFAULT 1,
    "effectiveDate" TIMESTAMP(0),
    "retiredDate" TIMESTAMP(0),
    "organizationId" UUID,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "ConsentTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestConsent" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "testId" UUID,
    "testConfigurationId" UUID,
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

    CONSTRAINT "TestConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LabOrderConsent" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "labOrderId" UUID NOT NULL,
    "testConsentId" UUID,
    "consentTemplateId" UUID NOT NULL,
    "consentTitle" VARCHAR(255) NOT NULL,
    "consentContent" TEXT NOT NULL,
    "isAccepted" BOOLEAN NOT NULL,
    "acceptedAt" TIMESTAMP(0),
    "declinedAt" TIMESTAMP(0),
    "patientSignature" TEXT,
    "witnessSignature" TEXT,
    "ipAddress" VARCHAR(45),
    "userAgent" TEXT,
    "consentVersion" INTEGER NOT NULL DEFAULT 1,
    "collectedBy" UUID,
    "collectedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "LabOrderConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogApproval" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "versionId" UUID,
    "testConfigurationId" UUID,
    "workflowStep" INTEGER NOT NULL DEFAULT 1,
    "stepName" VARCHAR(255) NOT NULL,
    "requiredRole" VARCHAR(100),
    "status" "public"."ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "comments" TEXT,
    "approvedBy" UUID,
    "approvedAt" TIMESTAMP(0),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogApproval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "permissions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserRole" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "roleId" UUID NOT NULL,
    "assignedBy" UUID,
    "assignedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(0),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCatalogAuditLog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "testId" UUID NOT NULL,
    "versionNumber" INTEGER,
    "configurationId" UUID,
    "action" "public"."AuditAction" NOT NULL,
    "fieldName" VARCHAR(255),
    "oldValue" TEXT,
    "newValue" TEXT,
    "changeReason" TEXT,
    "ipAddress" VARCHAR(45),
    "userAgent" TEXT,
    "performedBy" UUID,
    "performedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestCatalogAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestGene" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "testId" UUID NOT NULL,
    "labTestId" VARCHAR(512),
    "gene" VARCHAR(20) NOT NULL,
    "transcriptReference" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "TestGene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" TEXT,
    "password" VARCHAR(255),
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserAttribute" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "userType" "public"."UserAttributeUserType",
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "UserAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."UserIdentity" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "provider" VARCHAR(50) NOT NULL,
    "issuer" VARCHAR(500) NOT NULL,
    "subject" VARCHAR(255) NOT NULL,
    "fhirUser" VARCHAR(255),
    "orgId" UUID,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "UserIdentity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."KeyPairRef" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kid" VARCHAR(100) NOT NULL,
    "alg" VARCHAR(20) NOT NULL,
    "provider" VARCHAR(50) NOT NULL,
    "locator" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "KeyPairRef_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "public"."Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_provider_key" ON "public"."Account"("userId", "provider");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userAttributeId_key" ON "public"."Admin"("userAttributeId");

-- CreateIndex
CREATE UNIQUE INDEX "Attachment_fileName_key" ON "public"."Attachment"("fileName");

-- CreateIndex
CREATE UNIQUE INDEX "Biomarker_hgncApprovedSymbol_key" ON "public"."Biomarker"("hgncApprovedSymbol");

-- CreateIndex
CREATE INDEX "ReviewThread_versionId_idx" ON "public"."ReviewThread"("versionId");

-- CreateIndex
CREATE INDEX "ReviewComment_threadId_idx" ON "public"."ReviewComment"("threadId");

-- CreateIndex
CREATE INDEX "LabOrder_testConfigurationId_idx" ON "public"."LabOrder"("testConfigurationId");

-- CreateIndex
CREATE INDEX "LabOrder_orderingProviderId_idx" ON "public"."LabOrder"("orderingProviderId");

-- CreateIndex
CREATE INDEX "LabOrder_organizationId_idx" ON "public"."LabOrder"("organizationId");

-- CreateIndex
CREATE INDEX "LabOrder_patientId_idx" ON "public"."LabOrder"("patientId");

-- CreateIndex
CREATE INDEX "LabOrder_treatingProviderId_idx" ON "public"."LabOrder"("treatingProviderId");

-- CreateIndex
CREATE UNIQUE INDEX "LabOrder_orderNumber_key" ON "public"."LabOrder"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LabOrder_accessionNumber_key" ON "public"."LabOrder"("accessionNumber");

-- CreateIndex
CREATE INDEX "LabOrderAttachment_attachmentId_idx" ON "public"."LabOrderAttachment"("attachmentId");

-- CreateIndex
CREATE INDEX "LabOrderAttachment_labOrderId_idx" ON "public"."LabOrderAttachment"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderBilling_labOrderId_idx" ON "public"."LabOrderBilling"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderIcd_icdId_idx" ON "public"."LabOrderIcd"("icdId");

-- CreateIndex
CREATE INDEX "LabOrderIcd_labOrderId_idx" ON "public"."LabOrderIcd"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderSpecimen_labOrderId_idx" ON "public"."LabOrderSpecimen"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderSponsoredTestConsent_sponsoredCasandraTestId_idx" ON "public"."LabOrderSponsoredTestConsent"("sponsoredCasandraTestId");

-- CreateIndex
CREATE INDEX "LabOrderSponsoredTestConsent_labOrderId_idx" ON "public"."LabOrderSponsoredTestConsent"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderStatus_labOrderId_idx" ON "public"."LabOrderStatus"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderTest_labOrderId_idx" ON "public"."LabOrderTest"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderTest_testId_idx" ON "public"."LabOrderTest"("testId");

-- CreateIndex
CREATE INDEX "Organization_parentId_idx" ON "public"."Organization"("parentId");

-- CreateIndex
CREATE INDEX "OrganizationFavoriteTest_parentId_idx" ON "public"."OrganizationFavoriteTest"("parentId");

-- CreateIndex
CREATE INDEX "OrganizationFavoriteTest_organizationId_idx" ON "public"."OrganizationFavoriteTest"("organizationId");

-- CreateIndex
CREATE INDEX "OrganizationFavoriteTest_testId_idx" ON "public"."OrganizationFavoriteTest"("testId");

-- CreateIndex
CREATE INDEX "PatientOrganization_organizationId_idx" ON "public"."PatientOrganization"("organizationId");

-- CreateIndex
CREATE INDEX "PatientOrganization_patientId_idx" ON "public"."PatientOrganization"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Provider_userAttributeId_key" ON "public"."Provider"("userAttributeId");

-- CreateIndex
CREATE INDEX "Provider_userAttributeId_idx" ON "public"."Provider"("userAttributeId");

-- CreateIndex
CREATE INDEX "ProviderEducation_providerId_idx" ON "public"."ProviderEducation"("providerId");

-- CreateIndex
CREATE INDEX "ProviderFavoriteTest_parentId_idx" ON "public"."ProviderFavoriteTest"("parentId");

-- CreateIndex
CREATE INDEX "ProviderFavoriteTest_providerId_idx" ON "public"."ProviderFavoriteTest"("providerId");

-- CreateIndex
CREATE INDEX "ProviderFavoriteTest_testId_idx" ON "public"."ProviderFavoriteTest"("testId");

-- CreateIndex
CREATE INDEX "ProviderOrganization_organizationId_idx" ON "public"."ProviderOrganization"("organizationId");

-- CreateIndex
CREATE INDEX "ProviderOrganization_providerId_idx" ON "public"."ProviderOrganization"("providerId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "public"."Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "public"."Session"("userId");

-- CreateIndex
CREATE INDEX "SponsoredProgram_sponsorId_idx" ON "public"."SponsoredProgram"("sponsorId");

-- CreateIndex
CREATE UNIQUE INDEX "SponsoredTest_casandraTestId_key" ON "public"."SponsoredTest"("casandraTestId");

-- CreateIndex
CREATE INDEX "SponsoredTest_labId_idx" ON "public"."SponsoredTest"("labId");

-- CreateIndex
CREATE INDEX "SponsoredTest_sponsoredProgramId_idx" ON "public"."SponsoredTest"("sponsoredProgramId");

-- CreateIndex
CREATE INDEX "SponsoredTest_casandraTestId_idx" ON "public"."SponsoredTest"("casandraTestId");

-- CreateIndex
CREATE INDEX "SponsoredTest_testId_idx" ON "public"."SponsoredTest"("testId");

-- CreateIndex
CREATE INDEX "TestCatalog_labId_idx" ON "public"."TestCatalog"("labId");

-- CreateIndex
CREATE INDEX "TestCatalog_defaultVersionId_idx" ON "public"."TestCatalog"("defaultVersionId");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalog_labId_labTestId_key" ON "public"."TestCatalog"("labId", "labTestId");

-- CreateIndex
CREATE INDEX "TestCatalogVersion_testId_idx" ON "public"."TestCatalogVersion"("testId");

-- CreateIndex
CREATE INDEX "TestCatalogVersion_testId_status_idx" ON "public"."TestCatalogVersion"("testId", "status");

-- CreateIndex
CREATE INDEX "TestCatalogVersion_testId_effectiveDate_idx" ON "public"."TestCatalogVersion"("testId", "effectiveDate");

-- CreateIndex
CREATE INDEX "TestCatalogVersion_testId_retiredDate_idx" ON "public"."TestCatalogVersion"("testId", "retiredDate");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersion_testId_versionNumber_key" ON "public"."TestCatalogVersion"("testId", "versionNumber");

-- CreateIndex
CREATE INDEX "TestCatalogVersionSpecimen_versionId_idx" ON "public"."TestCatalogVersionSpecimen"("versionId");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersionSpecimen_versionId_displayName_key" ON "public"."TestCatalogVersionSpecimen"("versionId", "displayName");

-- CreateIndex
CREATE INDEX "TestCatalogVersionBiomarker_versionId_idx" ON "public"."TestCatalogVersionBiomarker"("versionId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionBiomarker_hgncId_idx" ON "public"."TestCatalogVersionBiomarker"("hgncId");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersionBiomarker_versionId_hgncId_key" ON "public"."TestCatalogVersionBiomarker"("versionId", "hgncId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionCptCode_versionId_idx" ON "public"."TestCatalogVersionCptCode"("versionId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionCptCode_cptCode_idx" ON "public"."TestCatalogVersionCptCode"("cptCode");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersionCptCode_versionId_cptCode_modifier_key" ON "public"."TestCatalogVersionCptCode"("versionId", "cptCode", "modifier");

-- CreateIndex
CREATE INDEX "TestCatalogVersionOrderLoinc_versionId_idx" ON "public"."TestCatalogVersionOrderLoinc"("versionId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionOrderLoinc_loincCode_idx" ON "public"."TestCatalogVersionOrderLoinc"("loincCode");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersionOrderLoinc_versionId_loincCode_key" ON "public"."TestCatalogVersionOrderLoinc"("versionId", "loincCode");

-- CreateIndex
CREATE INDEX "TestCatalogVersionResultLoinc_versionId_idx" ON "public"."TestCatalogVersionResultLoinc"("versionId");

-- CreateIndex
CREATE INDEX "TestCatalogVersionResultLoinc_loincCode_idx" ON "public"."TestCatalogVersionResultLoinc"("loincCode");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogVersionResultLoinc_versionId_loincCode_key" ON "public"."TestCatalogVersionResultLoinc"("versionId", "loincCode");

-- CreateIndex
CREATE INDEX "TestCatalogConfiguration_testId_idx" ON "public"."TestCatalogConfiguration"("testId");

-- CreateIndex
CREATE INDEX "TestCatalogConfiguration_customerId_idx" ON "public"."TestCatalogConfiguration"("customerId");

-- CreateIndex
CREATE INDEX "TestCatalogConfiguration_organizationId_idx" ON "public"."TestCatalogConfiguration"("organizationId");

-- CreateIndex
CREATE INDEX "TestCatalogConfiguration_status_idx" ON "public"."TestCatalogConfiguration"("status");

-- CreateIndex
CREATE INDEX "TestCatalogConfiguration_isActive_idx" ON "public"."TestCatalogConfiguration"("isActive");

-- CreateIndex
CREATE INDEX "TestCatalogConfiguration_versionId_isActive_idx" ON "public"."TestCatalogConfiguration"("versionId", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogConfiguration_testId_configurationName_customerI_key" ON "public"."TestCatalogConfiguration"("testId", "configurationName", "customerId", "versionNumber");

-- CreateIndex
CREATE INDEX "ConsentTemplate_consentType_idx" ON "public"."ConsentTemplate"("consentType");

-- CreateIndex
CREATE INDEX "ConsentTemplate_status_idx" ON "public"."ConsentTemplate"("status");

-- CreateIndex
CREATE INDEX "ConsentTemplate_organizationId_idx" ON "public"."ConsentTemplate"("organizationId");

-- CreateIndex
CREATE INDEX "ConsentTemplate_isGlobal_idx" ON "public"."ConsentTemplate"("isGlobal");

-- CreateIndex
CREATE UNIQUE INDEX "ConsentTemplate_name_organizationId_key" ON "public"."ConsentTemplate"("name", "organizationId");

-- CreateIndex
CREATE INDEX "TestConsent_testId_idx" ON "public"."TestConsent"("testId");

-- CreateIndex
CREATE INDEX "TestConsent_testConfigurationId_idx" ON "public"."TestConsent"("testConfigurationId");

-- CreateIndex
CREATE INDEX "TestConsent_consentTemplateId_idx" ON "public"."TestConsent"("consentTemplateId");

-- CreateIndex
CREATE INDEX "TestConsent_isRequired_idx" ON "public"."TestConsent"("isRequired");

-- CreateIndex
CREATE INDEX "LabOrderConsent_labOrderId_idx" ON "public"."LabOrderConsent"("labOrderId");

-- CreateIndex
CREATE INDEX "LabOrderConsent_consentTemplateId_idx" ON "public"."LabOrderConsent"("consentTemplateId");

-- CreateIndex
CREATE INDEX "LabOrderConsent_isAccepted_idx" ON "public"."LabOrderConsent"("isAccepted");

-- CreateIndex
CREATE INDEX "LabOrderConsent_collectedAt_idx" ON "public"."LabOrderConsent"("collectedAt");

-- CreateIndex
CREATE INDEX "TestCatalogApproval_versionId_idx" ON "public"."TestCatalogApproval"("versionId");

-- CreateIndex
CREATE INDEX "TestCatalogApproval_testConfigurationId_idx" ON "public"."TestCatalogApproval"("testConfigurationId");

-- CreateIndex
CREATE INDEX "TestCatalogApproval_status_idx" ON "public"."TestCatalogApproval"("status");

-- CreateIndex
CREATE INDEX "TestCatalogApproval_workflowStep_idx" ON "public"."TestCatalogApproval"("workflowStep");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "public"."Role"("name");

-- CreateIndex
CREATE INDEX "Role_name_idx" ON "public"."Role"("name");

-- CreateIndex
CREATE INDEX "UserRole_userId_idx" ON "public"."UserRole"("userId");

-- CreateIndex
CREATE INDEX "UserRole_roleId_idx" ON "public"."UserRole"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_userId_roleId_key" ON "public"."UserRole"("userId", "roleId");

-- CreateIndex
CREATE INDEX "TestCatalogAuditLog_testId_idx" ON "public"."TestCatalogAuditLog"("testId");

-- CreateIndex
CREATE INDEX "TestCatalogAuditLog_action_idx" ON "public"."TestCatalogAuditLog"("action");

-- CreateIndex
CREATE INDEX "TestCatalogAuditLog_performedBy_idx" ON "public"."TestCatalogAuditLog"("performedBy");

-- CreateIndex
CREATE INDEX "TestCatalogAuditLog_performedAt_idx" ON "public"."TestCatalogAuditLog"("performedAt");

-- CreateIndex
CREATE INDEX "TestCatalogAuditLog_versionNumber_idx" ON "public"."TestCatalogAuditLog"("versionNumber");

-- CreateIndex
CREATE INDEX "TestCatalogAuditLog_configurationId_idx" ON "public"."TestCatalogAuditLog"("configurationId");

-- CreateIndex
CREATE INDEX "TestGene_gene_idx" ON "public"."TestGene"("gene");

-- CreateIndex
CREATE INDEX "TestGene_testId_idx" ON "public"."TestGene"("testId");

-- CreateIndex
CREATE UNIQUE INDEX "TestGene_testId_gene_key" ON "public"."TestGene"("testId", "gene");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserAttribute_userId_key" ON "public"."UserAttribute"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "public"."VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "public"."VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "UserIdentity_userId_idx" ON "public"."UserIdentity"("userId");

-- CreateIndex
CREATE INDEX "UserIdentity_orgId_idx" ON "public"."UserIdentity"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "UserIdentity_provider_issuer_subject_key" ON "public"."UserIdentity"("provider", "issuer", "subject");

-- CreateIndex
CREATE UNIQUE INDEX "KeyPairRef_kid_key" ON "public"."KeyPairRef"("kid");

-- AddForeignKey
ALTER TABLE "public"."Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Admin" ADD CONSTRAINT "Admin_userAttributeId_fkey" FOREIGN KEY ("userAttributeId") REFERENCES "public"."UserAttribute"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReviewThread" ADD CONSTRAINT "ReviewThread_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReviewComment" ADD CONSTRAINT "ReviewComment_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "public"."ReviewThread"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_orderingProviderId_fkey" FOREIGN KEY ("orderingProviderId") REFERENCES "public"."Provider"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_treatingProviderId_fkey" FOREIGN KEY ("treatingProviderId") REFERENCES "public"."Provider"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."Patient"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrder" ADD CONSTRAINT "LabOrder_testConfigurationId_fkey" FOREIGN KEY ("testConfigurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderAttachment" ADD CONSTRAINT "LabOrderAttachment_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderAttachment" ADD CONSTRAINT "LabOrderAttachment_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "public"."Attachment"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderBilling" ADD CONSTRAINT "LabOrderBilling_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderIcd" ADD CONSTRAINT "LabOrderIcd_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderIcd" ADD CONSTRAINT "LabOrderIcd_icdId_fkey" FOREIGN KEY ("icdId") REFERENCES "public"."Icd"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderSpecimen" ADD CONSTRAINT "LabOrderSpecimen_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderSponsoredTestConsent" ADD CONSTRAINT "LabOrderSponsoredTestConsent_sponsoredCasandraTestId_fkey" FOREIGN KEY ("sponsoredCasandraTestId") REFERENCES "public"."SponsoredTest"("casandraTestId") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderSponsoredTestConsent" ADD CONSTRAINT "LabOrderSponsoredTestConsent_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderStatus" ADD CONSTRAINT "LabOrderStatus_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderTest" ADD CONSTRAINT "LabOrderTest_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderTest" ADD CONSTRAINT "LabOrderTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrganizationEndpoint" ADD CONSTRAINT "OrganizationEndpoint_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrganizationFavoriteTest" ADD CONSTRAINT "OrganizationFavoriteTest_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrganizationFavoriteTest" ADD CONSTRAINT "OrganizationFavoriteTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PatientOrganization" ADD CONSTRAINT "PatientOrganization_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PatientOrganization" ADD CONSTRAINT "PatientOrganization_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."Patient"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Provider" ADD CONSTRAINT "Provider_userAttributeId_fkey" FOREIGN KEY ("userAttributeId") REFERENCES "public"."UserAttribute"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProviderEducation" ADD CONSTRAINT "ProviderEducation_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Provider"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProviderFavoriteTest" ADD CONSTRAINT "ProviderFavoriteTest_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Provider"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProviderFavoriteTest" ADD CONSTRAINT "ProviderFavoriteTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProviderOrganization" ADD CONSTRAINT "ProviderOrganization_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProviderOrganization" ADD CONSTRAINT "ProviderOrganization_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Provider"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SponsoredProgram" ADD CONSTRAINT "SponsoredProgram_sponsorId_fkey" FOREIGN KEY ("sponsorId") REFERENCES "public"."Sponsor"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SponsoredTest" ADD CONSTRAINT "SponsoredTest_labId_fkey" FOREIGN KEY ("labId") REFERENCES "public"."Lab"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SponsoredTest" ADD CONSTRAINT "SponsoredTest_sponsoredProgramId_fkey" FOREIGN KEY ("sponsoredProgramId") REFERENCES "public"."SponsoredProgram"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SponsoredTest" ADD CONSTRAINT "SponsoredTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalog" ADD CONSTRAINT "TestCatalog_defaultVersionId_fkey" FOREIGN KEY ("defaultVersionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalog" ADD CONSTRAINT "TestCatalog_labId_fkey" FOREIGN KEY ("labId") REFERENCES "public"."Lab"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersion" ADD CONSTRAINT "TestCatalogVersion_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionSpecimen" ADD CONSTRAINT "TestCatalogVersionSpecimen_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionBiomarker" ADD CONSTRAINT "TestCatalogVersionBiomarker_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionBiomarker" ADD CONSTRAINT "TestCatalogVersionBiomarker_hgncId_fkey" FOREIGN KEY ("hgncId") REFERENCES "public"."Biomarker"("hgncId") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionCptCode" ADD CONSTRAINT "TestCatalogVersionCptCode_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionOrderLoinc" ADD CONSTRAINT "TestCatalogVersionOrderLoinc_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionOrderLoinc" ADD CONSTRAINT "TestCatalogVersionOrderLoinc_loincCode_fkey" FOREIGN KEY ("loincCode") REFERENCES "public"."Loinc"("loincNum") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionResultLoinc" ADD CONSTRAINT "TestCatalogVersionResultLoinc_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogVersionResultLoinc" ADD CONSTRAINT "TestCatalogVersionResultLoinc_loincCode_fkey" FOREIGN KEY ("loincCode") REFERENCES "public"."Loinc"("loincNum") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogConfiguration" ADD CONSTRAINT "TestCatalogConfiguration_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogConfiguration" ADD CONSTRAINT "TestCatalogConfiguration_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConsent" ADD CONSTRAINT "TestConsent_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConsent" ADD CONSTRAINT "TestConsent_testConfigurationId_fkey" FOREIGN KEY ("testConfigurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestConsent" ADD CONSTRAINT "TestConsent_consentTemplateId_fkey" FOREIGN KEY ("consentTemplateId") REFERENCES "public"."ConsentTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderConsent" ADD CONSTRAINT "LabOrderConsent_labOrderId_fkey" FOREIGN KEY ("labOrderId") REFERENCES "public"."LabOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderConsent" ADD CONSTRAINT "LabOrderConsent_testConsentId_fkey" FOREIGN KEY ("testConsentId") REFERENCES "public"."TestConsent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LabOrderConsent" ADD CONSTRAINT "LabOrderConsent_consentTemplateId_fkey" FOREIGN KEY ("consentTemplateId") REFERENCES "public"."ConsentTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogApproval" ADD CONSTRAINT "TestCatalogApproval_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "public"."TestCatalogVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogApproval" ADD CONSTRAINT "TestCatalogApproval_testConfigurationId_fkey" FOREIGN KEY ("testConfigurationId") REFERENCES "public"."TestCatalogConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCatalogAuditLog" ADD CONSTRAINT "TestCatalogAuditLog_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestGene" ADD CONSTRAINT "TestGene_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."TestCatalog"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserAttribute" ADD CONSTRAINT "UserAttribute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserIdentity" ADD CONSTRAINT "UserIdentity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserIdentity" ADD CONSTRAINT "UserIdentity_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
