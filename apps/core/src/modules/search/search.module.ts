import { Module } from '@nestjs/common'

import { SearchController } from './search.controller'
import { SearchService } from './search.service'
import { EmbeddingService } from './embedding.service'
import { TypesenseService } from './typesense.service'

@Module({
  controllers: [SearchController],
  providers: [SearchService, EmbeddingService, TypesenseService],
  exports: [SearchService],
})
export class SearchModule {}
