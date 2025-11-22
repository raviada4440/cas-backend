import { Module } from '@nestjs/common'

import { VariantsController, VariantBiomarkerController } from './variants.controller'
import { VariantsService } from './variants.service'

@Module({
  controllers: [VariantsController, VariantBiomarkerController],
  providers: [VariantsService],
  exports: [VariantsService],
})
export class VariantsModule {}
