-- AlterTable
ALTER TABLE "ChatContact" ALTER COLUMN "displayName" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ChatMessage" ALTER COLUMN "updatedAt" DROP DEFAULT;
