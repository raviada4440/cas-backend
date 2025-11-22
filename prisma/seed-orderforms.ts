import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("\n🚀 Seeding order form templates...");

  // Ensure a section exists for lab order steps (global)
  const sectionName = "Lab Order Steps";
  let section = await prisma.orderFormSection.findFirst({
    where: { name: sectionName, organizationId: null },
  });

  // If section exists, delete its templates so we can reseed cleanly
  if (section) {
    const deleted = await prisma.orderFormTemplate.deleteMany({
      where: { orderFormSectionId: section.id, organizationId: null },
    });
    console.log(
      `  • Removed ${deleted.count} existing templates from section ${section.id}`,
    );
  } else {
    section = await prisma.orderFormSection.create({
      data: {
        name: sectionName,
        description: "Auto-seeded lab order step templates",
        organizationId: null,
      },
    });
    console.log(`  • Created OrderFormSection ${section.id}`);
  }

  // Declarative JSON templates for steps (minimal controls only)
  const templates: Array<{ name: string; title: string; formSchema: any }> = [
    {
      name: "patient-details",
      title: "Patient Details",
      formSchema: {
        version: 1,
        name: "patient-details",
        description: "Patient demographic fields",
        elements: [
          {
            kind: "container",
            id: "patient-details-section",
            type: "section",
            title: "Patient Details",
            children: [
              {
                kind: "field",
                id: "firstName",
                key: "firstName",
                type: "text",
                label: "First name",
              },
              {
                kind: "field",
                id: "lastName",
                key: "lastName",
                type: "text",
                label: "Last name",
              },
              {
                kind: "field",
                id: "dob",
                key: "dateOfBirth",
                type: "date",
                label: "Date of birth",
              },
              {
                kind: "field",
                id: "mrn",
                key: "mrn",
                type: "text",
                label: "MRN",
              },
            ],
          },
        ],
      },
    },
    {
      name: "provider-details",
      title: "Provider Details",
      formSchema: {
        version: 1,
        name: "provider-details",
        description: "Ordering provider information",
        elements: [
          {
            kind: "container",
            id: "provider-details-section",
            type: "section",
            title: "Provider Details",
            children: [
              {
                kind: "field",
                id: "orderingProvider",
                key: "orderingProviderId",
                type: "select",
                label: "Ordering provider",
                settings: { optionsSource: "providers" },
              },
              {
                kind: "field",
                id: "facility",
                key: "facility",
                type: "text",
                label: "Facility",
              },
            ],
          },
        ],
      },
    },
    {
      name: "test-details",
      title: "Test Request",
      formSchema: {
        version: 1,
        name: "test-details",
        description: "Requested tests and options",
        elements: [
          {
            kind: "container",
            id: "test-details-section",
            type: "section",
            title: "Test Request",
            children: [
              {
                kind: "container",
                id: "requested-tests-group",
                type: "group",
                title: "Requested tests",
                children: [
                  {
                    kind: "field",
                    id: "testId",
                    key: "testId",
                    type: "select",
                    label: "Test",
                    settings: { optionsSource: "tests" },
                  },
                ],
              },
              {
                kind: "field",
                id: "priority",
                key: "priority",
                type: "radio-group",
                label: "Priority",
                options: [
                  { id: "routine", label: "Routine", value: "routine" },
                  { id: "stat", label: "Stat", value: "stat" },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: "specimen-collection",
      title: "Specimen Collection",
      formSchema: {
        version: 1,
        name: "specimen-collection",
        description: "Specimen collection details",
        elements: [
          {
            kind: "container",
            id: "specimen-collection-section",
            type: "section",
            title: "Specimen Collection",
            children: [
              {
                kind: "field",
                id: "specimenType",
                key: "specimenType",
                type: "select",
                label: "Specimen Type",
                settings: { optionsSource: "specimenTypes" },
              },
              {
                kind: "field",
                id: "collectionDate",
                key: "collectedDate",
                type: "date",
                label: "Collection Date",
              },
            ],
          },
        ],
      },
    },
    {
      name: "billing-details",
      title: "Billing & Authorization",
      formSchema: {
        version: 1,
        name: "billing-details",
        description: "Billing and insurance",
        elements: [
          {
            kind: "container",
            id: "billing-details-section",
            type: "section",
            title: "Billing & Authorization",
            children: [
              {
                kind: "field",
                id: "insuranceProvider",
                key: "insuranceProvider",
                type: "select",
                label: "Insurance",
                options: [
                  { id: "aetna", label: "Aetna", value: "Aetna" },
                  {
                    id: "uhc",
                    label: "UniteHealthCare",
                    value: "UniteHealthCare",
                  },
                  { id: "bcbs", label: "BCBS Texas", value: "BCBS Texas" },
                ],
              },
              {
                kind: "field",
                id: "policyNumber",
                key: "policyNumber",
                type: "text",
                label: "Policy number",
              },
            ],
          },
        ],
      },
    },
  ];

  for (const tmpl of templates) {
    const existing = await prisma.orderFormTemplate.findFirst({
      where: {
        orderFormSectionId: section.id,
        name: tmpl.name,
        organizationId: null,
      },
    });
    if (existing) {
      await prisma.orderFormTemplate.update({
        where: { id: existing.id },
        data: {
          description: tmpl.title,
          formSchema: tmpl.formSchema,
          status: "ACTIVE",
          updatedAt: new Date(),
        },
      });
      console.log(`  • Updated template ${tmpl.name} (set ACTIVE)`);
    } else {
      await prisma.orderFormTemplate.create({
        data: {
          orderFormSectionId: section.id,
          name: tmpl.name,
          description: tmpl.title,
          formSchema: tmpl.formSchema,
          version: 1,
          status: "ACTIVE",
          organizationId: null,
          isGlobal: true,
        },
      });
      console.log(`  • Created template ${tmpl.name} (ACTIVE)`);
    }
  }

  console.log("\n🎉 Order form templates seeded.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
