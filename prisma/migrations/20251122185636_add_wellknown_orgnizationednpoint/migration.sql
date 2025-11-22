-- AlterEnum
ALTER TYPE "UserAttributeUserType" ADD VALUE 'Organization';

-- AlterTable
ALTER TABLE "ExternalIdentifier" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(0),
ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(0);

-- AlterTable
ALTER TABLE "OrganizationEndpoint" ADD COLUMN     "wellKnown" VARCHAR(512);

-- RenameIndex
ALTER INDEX "ExternalIdentifier_resourceId_index" RENAME TO "ExternalIdentifier_resourceId_idx";

-- RenameIndex
ALTER INDEX "ExternalIdentifier_system_value_resourceType_unique" RENAME TO "ExternalIdentifier_system_value_resourceType_key";
