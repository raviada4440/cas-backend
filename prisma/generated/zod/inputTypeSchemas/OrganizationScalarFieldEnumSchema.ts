import { z } from 'zod';

export const OrganizationScalarFieldEnumSchema = z.enum(['id','href','parentId','level','parentOrgName','orgName','orgType','orgSpecialty','orgAddress','orgCity','orgState','orgZip','createdAt','updatedAt']);

export default OrganizationScalarFieldEnumSchema;
