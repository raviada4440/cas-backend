import { Module } from '@nestjs/common'

import { OrderFormsModule } from '../order-forms/order-forms.module'
import { TestsModule } from '../tests/tests.module'

import {
  VariantBiomarkerController,
  VariantUtilityController,
  VariantsController,
} from './variants.controller'
import { VariantsService } from './variants.service'

@Module({
  imports: [TestsModule, OrderFormsModule],
  controllers: [VariantsController, VariantBiomarkerController, VariantUtilityController],
  providers: [VariantsService],
  exports: [VariantsService],
})
export class VariantsModule {}
