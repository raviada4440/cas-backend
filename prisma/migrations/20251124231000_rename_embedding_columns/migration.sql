-- AlterTable
ALTER TABLE "TestCatalogEmbedding" RENAME COLUMN "embedding" TO "embeddingAlibaba";

-- AddColumn
ALTER TABLE "TestCatalogEmbedding" ADD COLUMN "embeddingOpenai" vector(3072);

