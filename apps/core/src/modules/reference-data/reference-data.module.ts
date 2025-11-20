import { Module } from '@nestjs/common'

import { AddressModule } from './address/address.module'
import { BiomarkersModule } from './biomarkers/biomarkers.module'
import { CptModule } from './cpt/cpt.module'
import { EmailModule } from './email/email.module'
import { IcdModule } from './icd/icd.module'
import { LabsModule } from './labs/labs.module'
import { LoincModule } from './loinc/loinc.module'
import { PhoneModule } from './phone/phone.module'

@Module({
  imports: [
    LabsModule,
    BiomarkersModule,
    IcdModule,
    CptModule,
    LoincModule,
    AddressModule,
    EmailModule,
    PhoneModule,
  ],
  exports: [
    LabsModule,
    BiomarkersModule,
    IcdModule,
    CptModule,
    LoincModule,
    AddressModule,
    EmailModule,
    PhoneModule,
  ],
})
export class ReferenceDataModule {}

