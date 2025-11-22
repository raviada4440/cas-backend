import { z } from 'zod';

export const ProviderOrganizationScalarFieldEnumSchema = z.enum(['id','providerId','organizationId','providerNpi','name','parentOrgName','orgName','orgAddress','orgCity','orgState','orgZip','createdAt','updatedAt']);

export default ProviderOrganizationScalarFieldEnumSchema;
