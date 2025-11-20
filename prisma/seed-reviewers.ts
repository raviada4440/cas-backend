import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

const DEFAULT_PASSWORD = "@Tassio2025";
const PASSWORD_SALT_ROUNDS = 10;

const reviewerRoleDefinition = {
  name: "catalog-reviewer",
  description:
    "Can request reviews, evaluate drafts, and approve test catalog versions.",
  permissions: [
    "catalog.version.read",
    "catalog.version.review",
    "catalog.version.sendback",
    "catalog.version.approve",
  ] as string[],
};

const reviewerSeeds = [
  {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@metrohealth.com",
    title: "Senior Pathologist",
  },
  {
    name: "Dr. Michael Chen",
    email: "michael.chen@metrohealth.com",
    title: "Clinical Director",
  },
  {
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@metrohealth.com",
    title: "Lab Manager",
  },
];

async function main() {
  console.log("\n🚀 Seeding catalog reviewer users...");

  const passwordHash = hashSync(DEFAULT_PASSWORD, PASSWORD_SALT_ROUNDS);

  const reviewerRole = await prisma.role.upsert({
    where: { name: reviewerRoleDefinition.name },
    update: {
      description: reviewerRoleDefinition.description,
      permissions: reviewerRoleDefinition.permissions,
    },
    create: {
      name: reviewerRoleDefinition.name,
      description: reviewerRoleDefinition.description,
      permissions: reviewerRoleDefinition.permissions,
    },
  });

  console.log(`✅ Role ensured: ${reviewerRole.name}`);

  for (const reviewer of reviewerSeeds) {
    const user = await prisma.user.upsert({
      where: { email: reviewer.email },
      update: { name: reviewer.name },
      create: {
        name: reviewer.name,
        email: reviewer.email,
        password: passwordHash,
        emailVerified: new Date(),
      },
    });

    await prisma.userAttribute.upsert({
      where: { userId: user.id },
      update: { userType: "Provider" },
      create: {
        userId: user.id,
        userType: "Provider",
      },
    });

    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: user.id, roleId: reviewerRole.id } },
      update: { assignedAt: new Date() },
      create: {
        userId: user.id,
        roleId: reviewerRole.id,
      },
    });

    console.log(`  • Seeded reviewer: ${reviewer.name} <${reviewer.email}>`);
  }

  console.log(
    "\n🎉 Reviewer seeding completed. Default password:",
    DEFAULT_PASSWORD,
  );
}

main()
  .catch((error) => {
    console.error("❌ Reviewer seeding failed", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
