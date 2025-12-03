import { Module } from '@nestjs/common'

import { DatabaseModule } from '@core/processors/database/database.module'

import { SearchModule } from '../search/search.module'

import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'

@Module({
  imports: [DatabaseModule, SearchModule],
  controllers: [ChatController],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
