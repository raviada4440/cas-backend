import { Module } from '@nestjs/common'

import { PublicSearchController } from './public-search.controller'
import { SearchController } from './search.controller'
import { SearchService } from './search.service'
import { EmbeddingService } from './embedding.service'
import { TypesenseService } from './typesense.service'
import { TypesenseSyncController } from './typesense-sync.controller'
import { TypesenseSyncService } from './typesense-sync.service'

@Module({
  controllers: [SearchController, PublicSearchController, TypesenseSyncController],
  providers: [SearchService, EmbeddingService, TypesenseService, TypesenseSyncService],
  exports: [SearchService, TypesenseSyncService],
})
export class SearchModule {}
