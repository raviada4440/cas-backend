import { Module } from '@nestjs/common'

import { OrganizationEndpointsController } from './organization-endpoints.controller'
import { OrganizationEndpointsService } from './organization-endpoints.service'
import { OrganizationsController } from './organizations.controller'
import { OrganizationsService } from './organizations.service'

@Module({
  controllers: [OrganizationsController, OrganizationEndpointsController],
  providers: [OrganizationsService, OrganizationEndpointsService],
  exports: [OrganizationsService, OrganizationEndpointsService],
})
export class OrganizationsModule {}
