import { Module } from '@nestjs/common'

import { CptController } from './cpt.controller'
import { CptService } from './cpt.service'

@Module({
  controllers: [CptController],
  providers: [CptService],
  exports: [CptService],
})
export class CptModule {}
