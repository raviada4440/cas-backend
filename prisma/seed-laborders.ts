import { PrismaClient, $Enums } from "@db/client";
import { randomUUID } from "node:crypto";

const makeUnique = () => randomUUID().replace(/-/g, "").slice(0, 10);
const randomEmail = (prefix: string) => `${prefix}.${makeUnique()}@example.com`;
const randomNumeric = (length: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
const randomAlphaNumeric = (length: number) =>
  Array.from({ length }, () =>
    Math.random().toString(36).charAt(2 + Math.floor(Math.random() * 34)),
  )
    .join("")
    .toUpperCase();

const prisma = new PrismaClient();

async function main() {
  console.log("\n🚀 Seeding test patients and lab orders...");

  // constants from your request
  const orderingProviderId = "1addc946-0c82-11ef-95c8-e22e40b8d815";
  const organizationId = "7cc3b4f2-0d92-11ef-a7b2-66cfdde4dfb1";

  // CLEANUP: delete existing lab-order related data for this organization (bottom-up)
  // ensure target organization and ordering provider exist so FK constraints don't fail
  // await prisma.organization.upsert({
  //   where: { id: organizationId },
  //   update: {},
  //   create: {
  //     id: organizationId,
  //     orgName: "Seed Organization",
  //     orgType: "Seed",
  //   },
  // });
  // await prisma.provider.upsert({
  //   where: { id: orderingProviderId },
  //   update: {},
  //   create: {
  //     id: orderingProviderId,
  //     name: "Seed Ordering Provider",
  //     email: "provider@casandra.ai",
  //   },
  // });

  console.log(
    `Cleaning existing lab order data for organization ${organizationId}...`,
  );
  await prisma.labOrderStatus.deleteMany({
    where: { labOrder: { organizationId } },
  });
  await prisma.labOrderTest.deleteMany({
    where: { labOrder: { organizationId } },
  });
  await prisma.labOrderSpecimen.deleteMany({
    where: { labOrder: { organizationId } },
  });
  await prisma.labOrderIcd.deleteMany({
    where: { labOrder: { organizationId } },
  });
  await prisma.labOrderBilling.deleteMany({
    where: { labOrder: { organizationId } },
  });
  await prisma.labOrder.deleteMany({ where: { organizationId } });

  // 1) Create 10 Patients
  const patients = [] as { id: string }[];
  for (let i = 0; i < 10; i++) {
    const p = await prisma.patient.create({
      data: {
        firstName: randomAlphaNumeric(5),
        lastName: randomAlphaNumeric(5),
        email: randomEmail("patient"),
        mobile: randomNumeric(10),
      },
    });
    patients.push(p);
    console.log(`  • Created patient ${p.id}`);
  }

  // 2) Prepare lookup lists
  // pick random TestCatalogVersion entries (and fetch configurations for mapping when available)
  const versions = await prisma.testCatalogVersion.findMany({
    take: 1000,
    select: { id: true, testId: true },
  });
  if (!versions || versions.length === 0) {
    console.error(
      "No TestCatalogVersion records found. Aborting lab order seeding.",
    );
    return;
  }

  // We'll lookup or create a minimal TestCatalogConfiguration per selected version as needed

  const icds = await prisma.icd.findMany({ take: 1000, select: { id: true } });
  if (!icds || icds.length === 0) {
    console.error("No Icd records found. Aborting lab order seeding.");
    return;
  }

  const statuses: $Enums.LabOrderStatusEnum[] = [
    $Enums.LabOrderStatusEnum.DRAFT,
    $Enums.LabOrderStatusEnum.SUBMITTED,
    $Enums.LabOrderStatusEnum.SPECIMEN_SHIPPED,
    $Enums.LabOrderStatusEnum.PRIOR_AUTH_PENDING,
    $Enums.LabOrderStatusEnum.PENDING_REVIEW, // eligibility pending -> pending review
    $Enums.LabOrderStatusEnum.RESULTED,
    $Enums.LabOrderStatusEnum.RESULTS_DELIVERED, // report received -> results delivered
    $Enums.LabOrderStatusEnum.CANCELLED,
  ];

  // 3) Create 10 LabOrders
  for (let i = 0; i < 10; i++) {
    const patient = patients[Math.floor(Math.random() * patients.length)];
    const version = versions[Math.floor(Math.random() * versions.length)];
    // try to find an existing configuration for this version; if none, create a minimal one
    let config = await prisma.testCatalogConfiguration.findFirst({
      where: { versionId: version.id },
    });
    if (!config) {
      config = await prisma.testCatalogConfiguration.create({
        data: {
          testId: version.testId,
          versionId: version.id,
          configurationName: `seed-config-${version.id}`,
          dimension: "FAMILY_STRUCTURE",
          dimensionValue: "NONE",
        },
      });
    }
    const icd = icds[Math.floor(Math.random() * icds.length)];

    // random 5 digit order number
    const orderNumber = Math.floor(10000 + Math.random() * 90000);

    const patientMRN = randomAlphaNumeric(8);
    const patientMobile = randomNumeric(10);
    const patientEmail = randomEmail("patient");

    const labOrder = await prisma.labOrder.create({
      data: {
        orderNumber,
        // leave accessionNumber to autoincrement
        orderingProviderId,
        patientId: patient.id,
        patientMRN,
        patientMobile,
        patientEmail,
        organizationId,
        orderDate: new Date(),
        orderNotes: "Seeded test order",
      },
    });

    // LabOrderIcd
    await prisma.labOrderIcd.create({
      data: {
        labOrderId: labOrder.id,
        icdId: icd.id,
      },
    });

    // LabOrderSpecimen - create a minimal specimen
    await prisma.labOrderSpecimen.create({
      data: {
        labOrderId: labOrder.id,
        specimenType: "WHOLE_BLOOD",
        specimenCount: "1",
        collectedDate: new Date(),
      },
    });

    // LabOrderBilling - add random insurance provider and policy number
    const insurers = ["Aetna", "UniteHealthCare", "BCBS Texas"];
    const insuranceProvider =
      insurers[Math.floor(Math.random() * insurers.length)];
    const policyNumber = randomAlphaNumeric(10);
    await prisma.labOrderBilling.create({
      data: {
        labOrderId: labOrder.id,
        insuranceProvider,
        policyNumber,
      },
    });

    // LabOrderTest - capture version/config association
    await prisma.labOrderTest.create({
      data: {
        labOrderId: labOrder.id,
        testVersionId: version.id,
        testConfigurationId: config.id,
      },
    })

    // LabOrderStatus
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    await prisma.labOrderStatus.create({
      data: {
        labOrderId: labOrder.id,
        status,
        statusDate: new Date(),
      },
    });

    console.log(
      `  • Created lab order ${labOrder.id} (orderNumber=${orderNumber})`,
    );
  }

  console.log("\n🎉 Lab order seeding completed.");
}

main()
  .catch((error) => {
    console.error("❌ Lab order seeding failed", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
