import { z } from 'zod'

export const SearchModeEnum = z.enum(['keyword', 'semantic', 'hybrid'])

export const SearchFilterSchema = z
  .object({
    testIds: z.array(z.string().uuid()).nonempty().optional(),
    labIds: z.array(z.string().uuid()).nonempty().optional(),
    statuses: z.array(z.string()).nonempty().optional(),
    categories: z.array(z.string()).nonempty().optional(),
  })
  .strict()
  .optional()

export const KeywordSearchInput = z
  .object({
    query: z.string().min(1),
    filters: SearchFilterSchema,
    page: z.number().int().positive().max(1000).optional(),
    perPage: z.number().int().positive().max(100).optional(),
    includeMetadata: z.boolean().optional(),
    preset: z.string().min(1).optional(),
  })
  .strict()

export const SemanticSearchInput = z
  .object({
    query: z.string().min(1),
    filters: SearchFilterSchema,
    limit: z.number().int().positive().max(100).optional(),
    embedding: z.array(z.number()).optional(),
  })
  .strict()

export const HybridSearchWeights = z
  .object({
    keyword: z.number().min(0).max(1).default(0.6),
    semantic: z.number().min(0).max(1).default(0.4),
  })
  .strict()

export const HybridSearchInput = SemanticSearchInput.extend({
  keywordParams: KeywordSearchInput.omit({ query: true }).partial().optional(),
  weights: HybridSearchWeights.optional(),
}).strict()

export const SearchResultItemSchema = z
  .object({
    testId: z.string().uuid(),
    score: z.number(),
    keywordScore: z.number().nullable().optional(),
    semanticScore: z.number().nullable().optional(),
    source: SearchModeEnum,
    highlights: z.array(z.string()).optional(),
    summary: z.string().nullable().optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
  })
  .strict()

export const SearchResponseSchema = z
  .object({
    mode: SearchModeEnum,
    query: z.string(),
    count: z.number().int().nonnegative(),
    tookMs: z.number().int().nonnegative(),
    items: z.array(SearchResultItemSchema),
    debug: z
      .object({
        keywordCount: z.number().int().nonnegative().optional(),
        semanticCount: z.number().int().nonnegative().optional(),
      })
      .partial()
      .optional(),
  })
  .strict()

export type SearchMode = z.infer<typeof SearchModeEnum>
export type SearchFilters = z.infer<typeof SearchFilterSchema>
export type KeywordSearchRequest = z.infer<typeof KeywordSearchInput>
export type SemanticSearchRequest = z.infer<typeof SemanticSearchInput>
export type HybridSearchRequest = z.infer<typeof HybridSearchInput>
export type HybridSearchWeightConfig = z.infer<typeof HybridSearchWeights>
export type SearchResultItem = z.infer<typeof SearchResultItemSchema>
export type SearchResponse = z.infer<typeof SearchResponseSchema>

