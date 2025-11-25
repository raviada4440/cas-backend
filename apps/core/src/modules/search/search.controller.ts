import { Body, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  HybridSearchDto,
  KeywordSearchDto,
  SearchResponseDto,
  SemanticSearchDto,
} from './search.dto'
import { SearchService } from './search.service'

@ApiTags('Search')
@ApiController('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('keyword')
  @ApiOperation({ summary: 'Search catalog tests using Typesense keyword search only' })
  @ApiOkResponse({ type: SearchResponseDto })
  keywordSearch(@Body() body: KeywordSearchDto) {
    return this.searchService.keywordSearch(body)
  }

  @Post('semantic')
  @ApiOperation({ summary: 'Search catalog tests using pgvector semantic similarity' })
  @ApiOkResponse({ type: SearchResponseDto })
  semanticSearch(@Body() body: SemanticSearchDto) {
    return this.searchService.semanticSearch(body)
  }

  @Post('hybrid')
  @ApiOperation({ summary: 'Hybrid keyword + semantic search across the catalog' })
  @ApiOkResponse({ type: SearchResponseDto })
  hybridSearch(@Body() body: HybridSearchDto) {
    return this.searchService.hybridSearch(body)
  }
}
