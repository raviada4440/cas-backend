import { Module } from '@nestjs/common'

import { LoincController } from './loinc.controller'
import { LoincService } from './loinc.service'

@Module({
  controllers: [LoincController],
  providers: [LoincService],
  exports: [LoincService],
})
export class LoincModule {}
