-- Ensure pgvector is available (noop if already installed)
CREATE EXTENSION IF NOT EXISTS vector;

-- HNSW index on OpenAI embeddings for fast ANN search
CREATE INDEX "TestCatalogEmbedding_embeddingOpenai_hnsw"
ON "TestCatalogEmbedding"
USING hnsw ("embeddingOpenai" vector_l2_ops)
WITH (m = 16, ef_construction = 200);

-- HNSW index on Alibaba embeddings (remove or adjust if unused)
CREATE INDEX "TestCatalogEmbedding_embeddingAlibaba_hnsw"
ON "TestCatalogEmbedding"
USING hnsw ("embeddingAlibaba" vector_l2_ops)
WITH (m = 16, ef_construction = 200);

CREATE INDEX IF NOT EXISTS idx_testcatalogembedding_testid
  ON "TestCatalogEmbedding" ("testId");

CREATE INDEX IF NOT EXISTS "TestCatalog_status_idx"
  ON public."TestCatalog" ("status");

CREATE INDEX IF NOT EXISTS "TestCatalog_testCategory_idx"
  ON public."TestCatalog" ("testCategory");

ALTER TABLE "TestCatalogEmbedding"
  ADD COLUMN "embeddingOpenai_half" halfvec(3072);

UPDATE "TestCatalogEmbedding"
  SET "embeddingOpenai_half" = "embeddingOpenai";  

DROP INDEX IF EXISTS "TestCatalogEmbedding_embeddingOpenai_half_ivfflat";


CREATE INDEX "TestCatalogEmbedding_embeddingOpenai_half_ivfflat"
ON "TestCatalogEmbedding"
USING ivfflat ("embeddingOpenai_half" halfvec_l2_ops)
WITH (lists = 100);  -- tune this
