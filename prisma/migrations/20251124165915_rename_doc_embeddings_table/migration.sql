/*
  Warnings:

  - You are about to drop the `doc_embeddings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "doc_embeddings";

-- CreateTable
CREATE TABLE "TestCatalogEmbedding" (
    "id" TEXT NOT NULL,
    "embedding" vector NOT NULL,
    "metadata" JSONB,

    CONSTRAINT "TestCatalogEmbedding_pkey" PRIMARY KEY ("id")
);
