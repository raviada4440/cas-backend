import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// Define the default password
const defaultPassword = "1casandra1";
const saltRounds = 10; // Standard practice for bcrypt
const hashedPassword = bcrypt.hashSync(defaultPassword, saltRounds);

console.log("Default password hashed.");

// --- Helper Functions ---
function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

function getRandomFloat(
  min: number,
  max: number,
  decimals: number = 2,
): number {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

// --- Healthcare Sample Data ---
const specialties = [
  "Internal Medicine",
  "Cardiology",
  "Oncology",
  "Neurology",
  "Pediatrics",
  "Emergency Medicine",
  "Radiology",
  "Pathology",
  "Surgery",
  "Family Medicine",
];

const testCategories = [
  "Blood Chemistry",
  "Hematology",
  "Microbiology",
  "Immunology",
  "Molecular Diagnostics",
  "Cytogenetics",
  "Flow Cytometry",
  "Histology",
  "Toxicology",
  "Endocrinology",
];

const specimenTypes = [
  "Blood",
  "Serum",
  "Plasma",
  "Urine",
  "Tissue",
  "Swab",
  "CSF",
  "Bone Marrow",
];

const biomarkerGenes = [
  "BRCA1",
  "BRCA2",
  "EGFR",
  "KRAS",
  "TP53",
  "ALK",
  "ROS1",
  "PDL1",
  "MSI",
  "TMB",
];

const icdCodes = [
  {
    code: "C78.00",
    description: "Secondary malignant neoplasm of unspecified lung",
  },
  {
    code: "I25.10",
    description:
      "Atherosclerotic heart disease of native coronary artery without angina pectoris",
  },
  {
    code: "E11.9",
    description: "Type 2 diabetes mellitus without complications",
  },
  { code: "Z51.11", description: "Antineoplastic chemotherapy" },
  {
    code: "F32.9",
    description: "Major depressive disorder, single episode, unspecified",
  },
];

const loincCodes = [
  { code: "33747-0", name: "Hemoglobin A1c/Hemoglobin.total in Blood" },
  { code: "33762-9", name: "Glucose [Mass/volume] in Blood" },
  { code: "2093-3", name: "Cholesterol [Mass/volume] in Serum or Plasma" },
  { code: "2085-9", name: "HDL Cholesterol [Mass/volume] in Serum or Plasma" },
  { code: "2089-1", name: "LDL Cholesterol [Mass/volume] in Serum or Plasma" },
  { code: "1751-7", name: "Albumin [Mass/volume] in Serum or Plasma" },
  { code: "1975-2", name: "Bilirubin total [Mass/volume] in Serum or Plasma" },
  { code: "2160-0", name: "Creatinine [Mass/volume] in Serum or Plasma" },
  {
    code: "33914-3",
    name: "Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma",
  },
  {
    code: "1742-6",
    name: "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
  },
];

const cptCodes = [
  { code: "80053", description: "Comprehensive metabolic panel" },
  { code: "80061", description: "Lipid panel" },
  { code: "85025", description: "Blood count; complete (CBC), automated" },
  {
    code: "85027",
    description:
      "Blood count; complete (CBC), automated (Hgb, Hct, RBC, WBC and platelet count)",
  },
  { code: "85032", description: "Blood count; manual differential WBC count" },
  {
    code: "85041",
    description: "Blood count; red blood cell (RBC), automated",
  },
  { code: "85048", description: "Blood count; leukocyte (WBC), automated" },
  { code: "85049", description: "Blood count; platelet, automated" },
  { code: "85097", description: "Hematocrit; automated" },
  { code: "85018", description: "Hemoglobin; automated" },
];

async function main() {
  console.log(`Start seeding healthcare data...`);

  // --- Skip Roles for now (Role model not in schema) ---
  console.log("Skipping Roles creation (Role model not in schema)...");

  // --- Create SMART Launcher Organization (for testing) ---
  console.log("Creating SMART Launcher Organization...");

  const smartLauncherOrg = await prisma.organization.create({
    data: {
      orgName: "SMART Launcher",
      orgType: "Testing Platform",
      orgSpecialty: "SMART-on-FHIR Testing",
      orgAddress: "SMART Health IT",
      orgCity: "Boston",
      orgState: "MA",
      orgZip: "02118",
      level: 1,
      parentId: null,
      parentOrgName: null,
    },
  });

  console.log(`✅ Created SMART Launcher Organization: ${smartLauncherOrg.id}`);

  // --- Create SMART Launcher Organization Endpoint ---
  console.log("Creating SMART Launcher Organization Endpoint...");

  const smartLauncherEndpoint = await prisma.organizationEndpoint.create({
    data: {
      organizationId: smartLauncherOrg.id,
      orgName: "SMART Launcher",
      ehrVendor: "smart-launcher", // Generic EHR vendor for testing
      fhirVersion: "R4",
      endpoint: "https://launch.smarthealthit.org/v/r4/fhir",
      issuer: "https://launch.smarthealthit.org/v/r4/fhir",
      clientId: process.env.EPIC_CLIENT_ID || "",
      clientSecret: process.env.EPIC_CLIENT_SECRET || "",
      isActive: true,
    },
  });

  console.log(
    `✅ Created SMART Launcher Endpoint: ${smartLauncherEndpoint.id}`,
  );

  // --- Skip other Healthcare Organizations (let authentication flow create them) ---
  console.log(
    "Skipping other Healthcare Organizations - will be created by authentication flow",
  );

  // --- Skip Organization Auth Configurations (let authentication flow create them) ---
  console.log(
    "Skipping Organization Auth Configurations - will be created by authentication flow",
  );

  // --- Create Admin User ---
  console.log("Creating Admin User...");

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@metrohealth.com" },
    update: {},
    create: {
      email: "admin@metrohealth.com",
      name: "System Administrator",
      password: hashedPassword,
      emailVerified: new Date(),
    },
  });

  // Create admin attribute separately (upsert to handle existing)
  const adminAttribute = await prisma.userAttribute.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      userId: adminUser.id,
      userType: "Admin",
      admin: {
        create: {
          name: "System Administrator",
          email: "admin@metrohealth.com",
        },
      },
    },
  });

  console.log(
    `Created/Updated Admin User: ${adminUser.email} (ID: ${adminUser.id})`,
  );

  // --- Skip Healthcare Providers (let authentication flow create them) ---
  console.log(
    "Skipping Healthcare Providers - will be created by authentication flow",
  );

  // --- Create Labs ---
  console.log("Creating Labs...");

  const lab = await prisma.lab.create({
    data: {
      labName: "Metro Clinical Laboratory",
      labCode: "MC",
      address: "789 Lab Street",
      city: "Metro City",
      state: "CA",
      zip: "90212",
    },
  });

  console.log(`Created Lab: ${lab.labName} (ID: ${lab.labId})`);

  // --- Create ICD Codes ---
  console.log("Creating ICD Codes...");

  const icds = [];
  for (const icdData of icdCodes) {
    const icd = await prisma.icd.create({
      data: {
        code: icdData.code,
        shortDescription: icdData.description,
      },
    });
    icds.push(icd);
    console.log(`  Created ICD: ${icd.code} - ${icd.shortDescription}`);
  }

  console.log("Finished creating ICD Codes.");

  // --- Create LOINC Codes ---
  console.log("Creating LOINC Codes...");

  const loincs = [];
  for (const loincData of loincCodes) {
    const loinc = await prisma.loinc.create({
      data: {
        loincNum: loincData.code,
        displayName: loincData.name,
        longCommonName: loincData.name,
        component: loincData.name.split("[")[0] || loincData.name,
        property: "Mass/volume",
        timeAspct: "Pt",
        system: "Blood",
        scaleTyp: "Qn",
        methodTyp: "Multiple",
      },
    });
    loincs.push(loinc);
    console.log(`  Created LOINC: ${loinc.loincNum} - ${loinc.displayName}`);
  }

  console.log("Finished creating LOINC Codes.");

  // --- Create CPT Codes ---
  console.log("Creating CPT Codes...");

  const cpts = [];
  for (const cptData of cptCodes) {
    const cpt = await prisma.cptCode.create({
      data: {
        code: cptData.code,
        shortDescription: cptData.description,
        longDescription: cptData.description,
      },
    });
    cpts.push(cpt);
    console.log(`  Created CPT: ${cpt.code} - ${cpt.shortDescription}`);
  }

  console.log("Finished creating CPT Codes.");

  // --- Create Biomarkers ---
  console.log("Creating Biomarkers...");

  const biomarkers = [];
  for (const gene of biomarkerGenes) {
    const biomarker = await prisma.biomarker.create({
      data: {
        hgncId: `HGNC:${Math.floor(Math.random() * 10000)}`,
        hgncStatus: "Approved",
        hgncApprovedSymbol: gene,
        hgncApprovedName: `${gene} gene`,
      },
    });
    biomarkers.push(biomarker);
    console.log(`  Created Biomarker: ${biomarker.hgncApprovedSymbol}`);
  }

  console.log("Finished creating Biomarkers.");

  // --- Create Test Catalog (Lean Records) ---
  console.log("Creating Test Catalog (Lean Records)...");

  const testCatalogs = [];
  for (let i = 1; i <= 10; i++) {
    const testCatalog = await prisma.testCatalog.create({
      data: {
        labId: lab.labId,
        casandraTestId: `TEST-${i.toString().padStart(3, "0")}`,
        labTestId: `MC-${i}`,
        testName: getRandomElement([
          "Complete Blood Count",
          "Basic Metabolic Panel",
          "Lipid Panel",
          "Thyroid Function Test",
          "Hemoglobin A1c",
          "Liver Function Test",
          "Kidney Function Test",
          "Cardiac Biomarkers",
          "Tumor Markers",
          "Genetic Testing",
        ]),
        testCategory: getRandomElement(testCategories),
        testSubCategory: getRandomElement([
          "Routine",
          "Specialty",
          "Molecular",
        ]),
        testDescription: `Comprehensive ${getRandomElement(testCategories).toLowerCase()} testing`,
        status: getRandomElement(["DRAFT", "PUBLISHED", "ARCHIVED"]),
        currentVersion: 1,
      },
    });

    testCatalogs.push(testCatalog);
    console.log(
      `  Created Test: ${testCatalog.testName} (ID: ${testCatalog.testId})`,
    );
  }

  console.log("Finished creating Test Catalog.");

  // --- Create Test Catalog Versions (Detailed Records) ---
  console.log("Creating Test Catalog Versions...");

  const testCatalogVersions = [];
  for (const testCatalog of testCatalogs) {
    // Create initial version (V1)
    const version = await prisma.testCatalogVersion.create({
      data: {
        testId: testCatalog.testId,
        versionNumber: 1,
        status: getRandomElement(["DRAFT", "PUBLISHED", "ARCHIVED"]),
        methodology: getRandomElement([
          "Automated",
          "Manual",
          "Molecular",
          "Immunoassay",
        ]),
        turnAroundTime: getRandomElement([
          "1-2 days",
          "2-3 days",
          "3-5 days",
          "1 week",
        ]),
        levelOfService: getRandomElement(["Routine", "STAT", "Urgent"]),
        effectiveDate: new Date(),
        changeReason: "Initial version",
        changeNotes: `Initial version of ${testCatalog.testName}`,
      },
    });

    testCatalogVersions.push(version);
    console.log(
      `  Created Version: ${version.versionNumber} for ${testCatalog.testName}`,
    );

    // Create version-scoped CPT codes (2-3 per test)
    const selectedCpts = cpts.slice(0, Math.floor(Math.random() * 3) + 2);
    for (const cpt of selectedCpts) {
      await prisma.testCatalogVersionCptCode.create({
        data: {
          testCatalogVersionId: version.id,
          cptCodeId: cpt.code,
          isPrimary: Math.random() > 0.5,
        },
      });
    }

    // Create version-scoped LOINC codes (2-3 per test)
    const selectedLoincs = loincs.slice(0, Math.floor(Math.random() * 3) + 2);
    for (const loinc of selectedLoincs) {
      await prisma.testCatalogVersionOrderLoinc.create({
        data: {
          versionId: version.id,
          loincCode: loinc.loincNum,
        },
      });
    }

    // Create version-scoped biomarkers (1-3 per test)
    const selectedBiomarkers = biomarkers.slice(
      0,
      Math.floor(Math.random() * 3) + 1,
    );
    for (const biomarker of selectedBiomarkers) {
      await prisma.testCatalogVersionBiomarker.create({
        data: {
          versionId: version.id,
          hgncId: biomarker.hgncId,
        },
      });
    }
  }

  console.log("Finished creating Test Catalog Versions.");

  // Update test catalogs with defaultVersionId
  console.log("Linking test catalogs to their default versions...");
  for (let i = 0; i < testCatalogs.length; i++) {
    const testCatalog = testCatalogs[i];
    const version = testCatalogVersions[i];

    await prisma.testCatalog.update({
      where: { testId: testCatalog.testId },
      data: {
        defaultVersionId: version.id,
        currentVersion: version.versionNumber,
      },
    });

    console.log(
      `  Linked ${testCatalog.testName} to version ${version.versionNumber}`,
    );
  }
  console.log("Finished linking test catalogs to default versions.");

  // --- Create Consent Templates ---
  console.log("Creating Consent Templates...");

  const consentTemplates = [];
  const consentTypes = [
    "GENERAL_CONSENT",
    "SPECIFIC_CONSENT",
    "RESEARCH_CONSENT",
    "MINOR_CONSENT",
    "HIPAA_PRIVACY_CONSENT",
  ];

  for (const consentType of consentTypes) {
    const template = await prisma.consentTemplate.create({
      data: {
        name: `${consentType.replace(/_/g, " ")} Template`,
        description: `Standard consent template for ${consentType.toLowerCase().replace(/_/g, " ")}`,
        consentType: consentType as any,
        title: `Consent for ${consentType.replace(/_/g, " ")}`,
        content: `This is the consent content for ${consentType.toLowerCase().replace(/_/g, " ")}. Please read carefully before proceeding.`,
        isRequired: Math.random() > 0.3, // 70% chance of being required
        createdBy: adminUser.id,
      },
    });
    consentTemplates.push(template);
    console.log(`  Created Consent Template: ${template.name}`);
  }

  console.log("Finished creating Consent Templates.");

  // --- Create Test Consents (Link tests to consent templates) ---
  console.log("Creating Test Consents...");

  for (const version of testCatalogVersions) {
    // Each test gets 1-2 consent templates
    const selectedTemplates = consentTemplates.slice(
      0,
      Math.floor(Math.random() * 2) + 1,
    );
    for (const template of selectedTemplates) {
      await prisma.testConsent.create({
        data: {
          testId: version.testId,
          consentTemplateId: template.id,
          isRequired: Math.random() > 0.3, // 70% chance of being required
          displayOrder: Math.floor(Math.random() * 5) + 1,
        },
      });
    }
  }

  console.log("Finished creating Test Consents.");

  // --- Create Test Catalog Configurations ---
  console.log("Creating Test Catalog Configurations...");

  for (const testCatalog of testCatalogs) {
    await prisma.testCatalogConfiguration.create({
      data: {
        testId: testCatalog.testId,
        configurationName: `Default Configuration for ${testCatalog.testName}`,
        organizationId: smartLauncherOrg.id,
        isActive: true,
        customPricing: getRandomFloat(50, 500),
        customTurnAroundTime: getRandomElement([
          "1-2 days",
          "2-3 days",
          "3-5 days",
          "1 week",
        ]),
        customInstructions: `Custom instructions for ${testCatalog.testName} at ${smartLauncherOrg.orgName}`,
      },
    });
  }

  console.log("Finished creating Test Catalog Configurations.");

  // --- Create Sample Patients ---
  console.log("Creating Sample Patients...");

  const patients = [];
  const patientNames = [
    { firstName: "John", lastName: "Doe", mrn: "MRN-001" },
    { firstName: "Jane", lastName: "Smith", mrn: "MRN-002" },
    { firstName: "Michael", lastName: "Johnson", mrn: "MRN-003" },
    { firstName: "Sarah", lastName: "Williams", mrn: "MRN-004" },
    { firstName: "David", lastName: "Brown", mrn: "MRN-005" },
  ];

  for (const patientData of patientNames) {
    const patient = await prisma.patient.create({
      data: {
        firstName: patientData.firstName,
        lastName: patientData.lastName,
        dateOfBirth: getRandomDate(
          new Date(1950, 0, 1),
          new Date(2000, 11, 31),
        ),
        gender: getRandomElement(["Male", "Female", "Other"]),
        email: `${patientData.firstName.toLowerCase()}.${patientData.lastName.toLowerCase()}@example.com`,
        mobile: `555-${Math.floor(Math.random() * 9000) + 1000}`,
      },
    });

    // Create PatientOrganization relationship with MRN
    await prisma.patientOrganization.create({
      data: {
        patientId: patient.id,
        organizationId: smartLauncherOrg.id,
        mrn: patientData.mrn,
        mobile: patient.mobile,
        email: patient.email,
      },
    });

    patients.push({ ...patient, patientMRN: patientData.mrn });
    console.log(
      `  Created Patient: ${patient.firstName} ${patient.lastName} (MRN: ${patientData.mrn})`,
    );
  }

  console.log("Finished creating Sample Patients.");

  // --- Create Sample Providers ---
  console.log("Creating Sample Providers...");

  const providers = [];
  const providerNames = [
    { firstName: "Dr. Emily", lastName: "Chen", npi: "1234567890" },
    { firstName: "Dr. Robert", lastName: "Martinez", npi: "1234567891" },
    { firstName: "Dr. Lisa", lastName: "Anderson", npi: "1234567892" },
    { firstName: "Dr. James", lastName: "Taylor", npi: "1234567893" },
  ];

  for (const providerData of providerNames) {
    const provider = await prisma.provider.create({
      data: {
        firstName: providerData.firstName,
        lastName: providerData.lastName,
        npi: providerData.npi,
        specialty: getRandomElement(specialties),
      },
    });
    providers.push(provider);
    console.log(
      `  Created Provider: ${provider.firstName} ${provider.lastName} (NPI: ${provider.npi})`,
    );
  }

  console.log("Finished creating Sample Providers.");

  // --- Create Lab Orders ---
  console.log("Creating Lab Orders...");

  const labOrders = [];
  const orderStatuses = [
    "DRAFT",
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
  ];

  // Create 5-10 lab orders
  for (let i = 1; i <= 8; i++) {
    const selectedPatient = getRandomElement(patients);
    const selectedProvider = getRandomElement(providers);
    const selectedTest = getRandomElement(testCatalogs);
    const selectedIcd = getRandomElement(icds);
    const selectedSpecimen = getRandomElement(specimenTypes);

    const labOrder = await prisma.labOrder.create({
      data: {
        patientId: selectedPatient.id,
        orderingProviderId: selectedProvider.id,
        patientMRN: selectedPatient.patientMRN,
        patientMobile: selectedPatient.mobile,
        patientEmail: selectedPatient.email,
        organizationId: smartLauncherOrg.id,
        orderDate: getRandomDate(new Date(2024, 0, 1), new Date()),
        orderNotes: `Lab order for ${selectedTest.testName} - Patient: ${selectedPatient.firstName} ${selectedPatient.lastName}`,
      },
    });

    // Create lab order test
    await prisma.labOrderTest.create({
      data: {
        labOrderId: labOrder.id,
        testId: selectedTest.testId,
      },
    });

    // Create lab order ICD code
    await prisma.labOrderIcd.create({
      data: {
        labOrderId: labOrder.id,
        icdId: selectedIcd.id,
      },
    });

    // Create lab order specimen
    await prisma.labOrderSpecimen.create({
      data: {
        labOrderId: labOrder.id,
        specimenType: selectedSpecimen,
        specimenCount: "1",
        collectedDate: getRandomDate(new Date(2024, 0, 1), new Date()),
        collectedTime: `${Math.floor(Math.random() * 12) + 8}:${Math.floor(
          Math.random() * 60,
        )
          .toString()
          .padStart(2, "0")}`,
        specimenId: `SPEC-${i.toString().padStart(3, "0")}`,
      },
    });

    // Create lab order status
    const status = getRandomElement(orderStatuses);
    await prisma.labOrderStatus.create({
      data: {
        labOrderId: labOrder.id,
        status: status,
        statusDate: getRandomDate(new Date(2024, 0, 1), new Date()),
      },
    });

    // Create lab order billing
    await prisma.labOrderBilling.create({
      data: {
        labOrderId: labOrder.id,
        billingType: getRandomElement(["Insurance", "Self-Pay", "Medicaid"]),
        copayAmount: status === "COMPLETED" ? getRandomFloat(25, 150) : null,
        insuranceProvider:
          status === "COMPLETED"
            ? getRandomElement(["Blue Cross", "Aetna", "Cigna", "UnitedHealth"])
            : null,
      },
    });

    labOrders.push(labOrder);
    console.log(
      `  Created Lab Order: #${labOrder.orderNumber} for ${selectedPatient.firstName} ${selectedPatient.lastName} - ${selectedTest.testName}`,
    );
  }

  console.log("Finished creating Lab Orders.");

  // --- Skip User Identities (let authentication flow create them) ---
  console.log(
    "Skipping User Identities - will be created by authentication flow",
  );

  const allUsers = [adminUser]; // Only admin user created

  console.log(`Healthcare seeding finished successfully! 🏥`);
  console.log(`Created:`);
  console.log(`  - ${allUsers.length} users (1 admin)`);
  console.log(`  - 1 lab`);
  console.log(`  - ${icds.length} ICD codes`);
  console.log(`  - ${loincs.length} LOINC codes`);
  console.log(`  - ${cpts.length} CPT codes`);
  console.log(`  - ${biomarkers.length} biomarkers`);
  console.log(`  - ${testCatalogs.length} test catalogs (lean)`);
  console.log(
    `  - ${testCatalogVersions.length} test catalog versions (detailed)`,
  );
  console.log(`  - ${consentTemplates.length} consent templates`);
  console.log(`  - ${patients.length} patients`);
  console.log(`  - ${providers.length} providers`);
  console.log(`  - ${labOrders.length} lab orders with complete data`);
  console.log(
    `\nNote: Organizations, Providers, OrganizationAuth, ProviderOrganization, and UserIdentity records will be created by the authentication flow when users log in with Epic/Cerner.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
