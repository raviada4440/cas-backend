import { Module } from '@nestjs/common'

import { ConsentTemplatesController } from './consent-templates.controller'
import { ConsentTemplatesService } from './consent-templates.service'

@Module({
  controllers: [ConsentTemplatesController],
  providers: [ConsentTemplatesService],
  exports: [ConsentTemplatesService],
})
export class ConsentTemplatesModule {}
