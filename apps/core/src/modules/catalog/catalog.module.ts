import { Module } from '@nestjs/common'

import { TestsModule } from './tests/tests.module'

@Module({
  imports: [TestsModule],
  exports: [TestsModule],
})
export class CatalogModule {}

