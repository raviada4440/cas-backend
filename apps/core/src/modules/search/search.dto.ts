import { createZodDto } from 'nestjs-zod/dto'

import {
  HybridSearchInput,
  KeywordSearchInput,
  SearchResponseSchema,
  SemanticSearchInput,
} from '@shared/contracts/search'

export class KeywordSearchDto extends createZodDto(KeywordSearchInput) {}

export class SemanticSearchDto extends createZodDto(SemanticSearchInput) {}

export class HybridSearchDto extends createZodDto(HybridSearchInput) {}

export class SearchResponseDto extends createZodDto(SearchResponseSchema) {}
