import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

const DEFAULT_PASSWORD = "1casandra1";
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

  // Ensure super-admin and provider roles exist
  const superAdminRoleDefinition = {
    name: "super-admin",
    description: "Full system administrator with all permissions",
    permissions: ["*"] as string[],
  };

  const providerRoleDefinition = {
    name: "provider",
    description: "Provider-level user with access scoped to their organization",
    permissions: [
      "laborders.read",
      "laborders.create",
      "laborders.update",
      "laborders.delete",
    ] as string[],
  };

  const superAdminRole = await prisma.role.upsert({
    where: { name: superAdminRoleDefinition.name },
    update: {
      description: superAdminRoleDefinition.description,
      permissions: superAdminRoleDefinition.permissions,
    },
    create: {
      name: superAdminRoleDefinition.name,
      description: superAdminRoleDefinition.description,
      permissions: superAdminRoleDefinition.permissions,
    },
  });

  const providerRole = await prisma.role.upsert({
    where: { name: providerRoleDefinition.name },
    update: {
      description: providerRoleDefinition.description,
      permissions: providerRoleDefinition.permissions,
    },
    create: {
      name: providerRoleDefinition.name,
      description: providerRoleDefinition.description,
      permissions: providerRoleDefinition.permissions,
    },
  });

  console.log(`✅ Role ensured: ${superAdminRole.name}`);
  console.log(`✅ Role ensured: ${providerRole.name}`);

  // Seed super admin user
  const adminEmail = "admin@casandra.ai";
  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { name: "Super Admin" },
    create: {
      name: "Super Admin",
      email: adminEmail,
      password: passwordHash,
      emailVerified: new Date(),
    },
  });

  await prisma.userAttribute.upsert({
    where: { userId: adminUser.id },
    update: { userType: "Admin" },
    create: { userId: adminUser.id, userType: "Admin" },
  });

  await prisma.userRole.upsert({
    where: {
      userId_roleId: { userId: adminUser.id, roleId: superAdminRole.id },
    },
    update: { assignedAt: new Date() },
    create: { userId: adminUser.id, roleId: superAdminRole.id },
  });

  console.log(`  • Seeded admin: ${adminUser.name} <${adminUser.email}>`);

  // Seed provider user and assign to ProviderOrganization
  const providerEmail = "provider@casandra.ai";
  const providerUser = await prisma.user.upsert({
    where: { email: providerEmail },
    update: { name: "Provider User" },
    create: {
      name: "Provider User",
      email: providerEmail,
      password: passwordHash,
      emailVerified: new Date(),
    },
  });

  // Attach provider-specific attribute (userType = Provider)
  const providerUserAttribute = await prisma.userAttribute.upsert({
    where: { userId: providerUser.id },
    update: {
      userType: "Provider",
    },
    create: {
      userId: providerUser.id,
      userType: "Provider",
    },
  });

  // Ensure Provider record exists and is linked to the userAttribute
  const providerId = "1addc946-0c82-11ef-95c8-e22e40b8d815";
  await prisma.provider.upsert({
    where: { id: providerId },
    update: {
      userAttributeId: providerUserAttribute.id,
      name: providerUser.name,
      email: providerUser.email,
    },
    create: {
      id: providerId,
      userAttributeId: providerUserAttribute.id,
      name: providerUser.name,
      email: providerUser.email,
    },
  });

  // Link provider to organization via ProviderOrganization
  const organizationId = "7cc3b4f2-0d92-11ef-a7b2-66cfdde4dfb1";
  const existingProviderOrg = await prisma.providerOrganization.findFirst({
    where: { providerId: providerId, organizationId: organizationId },
  });
  if (!existingProviderOrg) {
    await prisma.providerOrganization.create({
      data: {
        providerId: providerId,
        organizationId: organizationId,
      },
    });
  }

  await prisma.userRole.upsert({
    where: {
      userId_roleId: { userId: providerUser.id, roleId: providerRole.id },
    },
    update: { assignedAt: new Date() },
    create: { userId: providerUser.id, roleId: providerRole.id },
  });

  console.log(
    `  • Seeded provider: ${providerUser.name} <${providerUser.email}>`,
  );

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
