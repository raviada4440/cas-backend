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

