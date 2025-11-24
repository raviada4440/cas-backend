-- CreateTable
CREATE TABLE "doc_embeddings" (
    "id" TEXT NOT NULL,
    "embedding" vector NOT NULL,
    "metadata" JSONB,

    CONSTRAINT "doc_embeddings_pkey" PRIMARY KEY ("id")
);
