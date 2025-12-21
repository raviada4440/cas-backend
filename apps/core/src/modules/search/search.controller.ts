import { Body, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import {
  HybridSearchDto,
  KeywordSearchDto,
  SearchResponseDto,
  SemanticSearchDto,
} from './search.dto'
import { SearchService } from './search.service'

@Auth()
@ApiTags('Search')
@ApiController('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('keyword')
  @ApiOperation({ summary: 'Search catalog tests using Typesense keyword search only' })
  @ApiOkResponseEnvelope(SearchResponseDto)
  keywordSearch(@Body() body: KeywordSearchDto) {
    return this.searchService.keywordSearch(body)
  }

  @Post('semantic')
  @ApiOperation({ summary: 'Search catalog tests using pgvector semantic similarity' })
  @ApiOkResponseEnvelope(SearchResponseDto)
  semanticSearch(@Body() body: SemanticSearchDto) {
    return this.searchService.semanticSearch(body)
  }

  @Post('hybrid')
  @ApiOperation({ summary: 'Hybrid keyword + semantic search across the catalog' })
  @ApiOkResponseEnvelope(SearchResponseDto)
  hybridSearch(@Body() body: HybridSearchDto) {
    return this.searchService.hybridSearch(body)
  }
}
