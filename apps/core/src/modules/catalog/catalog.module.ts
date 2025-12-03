import { Module } from '@nestjs/common'

import { OrderFormsModule } from './order-forms/order-forms.module'
import { TestsModule } from './tests/tests.module'
import { VariantsModule } from './variants/variants.module'
import { ReviewModule } from './review/review.module'

@Module({
  imports: [TestsModule, VariantsModule, OrderFormsModule, ReviewModule],
  exports: [TestsModule, VariantsModule, OrderFormsModule, ReviewModule],
})
export class CatalogModule {}
