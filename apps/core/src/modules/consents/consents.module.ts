import { Module } from '@nestjs/common'

import { DatabaseModule } from '@core/processors/database/database.module'

import { ConsentsController } from './consents.controller'
import { ConsentsService } from './consents.service'
import { TemplatesController } from './templates/templates.controller'
import { TemplatesService } from './templates/templates.service'

@Module({
  imports: [DatabaseModule],
  controllers: [ConsentsController, TemplatesController],
  providers: [ConsentsService, TemplatesService],
  exports: [ConsentsService, TemplatesService],
})
export class ConsentsModule {}
