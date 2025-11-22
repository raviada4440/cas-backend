import { Module } from '@nestjs/common'

import { LabOrdersModule } from './lab-orders/lab-orders.module'
import { OrganizationsModule } from './organizations/organizations.module'
import { PatientsModule } from './patients/patients.module'
import { ProvidersModule } from './providers/providers.module'

@Module({
  imports: [LabOrdersModule, PatientsModule, ProvidersModule, OrganizationsModule],
  exports: [LabOrdersModule, PatientsModule, ProvidersModule, OrganizationsModule],
})
export class OrdersModule {}
