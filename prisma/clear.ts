import { PrismaClient } from "@db/client";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function clear() {
  console.log("Attempting to clear the healthcare database...");

  try {
    // Deleting records in an order that respects foreign key constraints,
    // especially RESTRICT actions.
    // Start with models that heavily depend on others or are join tables.

    console.log("Deleting Auth/Session/Token related data...");
    await prisma.account.deleteMany({}); // Depends on User (Cascade OK)
    await prisma.session.deleteMany({}); // Depends on User (Cascade OK)
    await prisma.verificationToken.deleteMany({});

    console.log("Deleting Healthcare Lab Order related data...");
    await prisma.labOrderSponsoredTestConsent.deleteMany({}); // Depends on LabOrder, SponsoredTest
    await prisma.labOrderStatus.deleteMany({}); // Depends on LabOrder
    await prisma.labOrderTest.deleteMany({}); // Depends on LabOrder, TestCatalog
    await prisma.labOrderSpecimen.deleteMany({}); // Depends on LabOrder
    await prisma.labOrderIcd.deleteMany({}); // Depends on LabOrder, Icd
    await prisma.labOrderBilling.deleteMany({}); // Depends on LabOrder
    await prisma.labOrderAttachment.deleteMany({}); // Depends on LabOrder, File
    await prisma.labOrder.deleteMany({}); // Depends on Provider, Patient, Organization

    console.log("Deleting Test Catalog related data...");
    // Delete version-scoped artifacts first
    await prisma.testCatalogVersionConsent.deleteMany({}); // Depends on TestCatalogVersion, ConsentTemplate
    await prisma.testCatalogVersionResultLoinc.deleteMany({}); // Depends on TestCatalogVersion, Loinc
    await prisma.testCatalogVersionOrderLoinc.deleteMany({}); // Depends on TestCatalogVersion, Loinc
    await prisma.testCatalogVersionCptCode.deleteMany({}); // Depends on TestCatalogVersion, CptCode
    await prisma.testCatalogVersionBiomarker.deleteMany({}); // Depends on TestCatalogVersion, Biomarker
    await prisma.testCatalogVersionSpecimen.deleteMany({}); // Depends on TestCatalogVersion
    await prisma.testCatalogVersion.deleteMany({}); // Depends on TestCatalog

    // Delete configurations and consents
    await prisma.testCatalogConfiguration.deleteMany({}); // Depends on TestCatalog, Organization
    await prisma.testCatalogApproval.deleteMany({}); // Depends on TestCatalogVersion, TestCatalogConfiguration
    await prisma.testCatalogAuditLog.deleteMany({}); // Depends on TestCatalog

    // Delete consent templates
    await prisma.consentTemplate.deleteMany({});

    // Delete sponsored tests
    await prisma.sponsoredTest.deleteMany({}); // Depends on TestCatalog, SponsoredProgram, Lab
    await prisma.testGene.deleteMany({}); // Depends on TestCatalog
    await prisma.testCatalog.deleteMany({}); // Depends on Lab

    console.log("Deleting Healthcare reference data...");
    await prisma.sponsoredProgram.deleteMany({}); // Depends on Sponsor
    await prisma.sponsor.deleteMany({});
    await prisma.biomarker.deleteMany({});
    await prisma.cptCode.deleteMany({}); // CPT codes
    await prisma.loinc.deleteMany({});
    await prisma.icd.deleteMany({});

    console.log("Deleting LOINC reference data...");
    await prisma.loincComponentHierarchy.deleteMany({});
    await prisma.loincPanelHierarchy.deleteMany({});
    await prisma.loincUniveralLabOrders.deleteMany({});

    console.log("Deleting Lab data...");
    await prisma.lab.deleteMany({});

    console.log("Deleting Healthcare provider data...");
    await prisma.providerFavoriteTest.deleteMany({}); // Depends on Provider, TestCatalog
    await prisma.providerEducation.deleteMany({}); // Depends on Provider
    await prisma.providerOrganization.deleteMany({}); // Depends on Provider, Organization
    await prisma.provider.deleteMany({}); // Depends on UserAttribute

    console.log("Deleting Patient data...");
    await prisma.patientOrganization.deleteMany({}); // Depends on Patient, Organization
    await prisma.patient.deleteMany({});

    console.log("Deleting Organization related data...");
    await prisma.organizationFavoriteTest.deleteMany({}); // Depends on Organization, TestCatalog
    await prisma.organizationEndpoint.deleteMany({}); // Organization endpoints
    await prisma.organization.deleteMany({});

    console.log("Deleting User related data...");
    await prisma.userIdentity.deleteMany({}); // Depends on User, Organization
    await prisma.admin.deleteMany({}); // Depends on UserAttribute
    await prisma.userAttribute.deleteMany({}); // Depends on User

    console.log("Deleting File data...");
    await prisma.attachment.deleteMany({}); // Depends on File, User, Organization

    // Skipping non-existent models in current schema (keyPairRef, post)

    console.log("Deleting Users...");
    await prisma.user.deleteMany({});

    console.log("Database has been cleared successfully. 🧹");
  } catch (error) {
    console.error("Error clearing database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

clear();
