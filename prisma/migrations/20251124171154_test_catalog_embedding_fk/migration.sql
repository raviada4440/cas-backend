/*
  Warnings:

  - The primary key for the `TestCatalogEmbedding` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `TestCatalogEmbedding` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[testId]` on the table `TestCatalogEmbedding` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `testId` to the `TestCatalogEmbedding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestCatalogEmbedding" DROP CONSTRAINT "TestCatalogEmbedding_pkey",
ADD COLUMN     "testId" UUID NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "TestCatalogEmbedding_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "TestCatalogEmbedding_testId_key" ON "TestCatalogEmbedding"("testId");

-- CreateIndex
CREATE INDEX "TestCatalogEmbedding_testId_idx" ON "TestCatalogEmbedding"("testId");

-- AddForeignKey
ALTER TABLE "TestCatalogEmbedding" ADD CONSTRAINT "TestCatalogEmbedding_testId_fkey" FOREIGN KEY ("testId") REFERENCES "TestCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
