import { Module } from '@nestjs/common'

import { DatabaseModule } from '@core/processors/database/database.module'

import { FhirController } from './fhir.controller'
import { FhirService } from './fhir.service'
import { FhirCredentialsService } from './fhir-credentials.service'

@Module({
  imports: [DatabaseModule],
  controllers: [FhirController],
  providers: [FhirService, FhirCredentialsService],
  exports: [FhirService],
})
export class FhirModule {}
