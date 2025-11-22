import { z } from 'zod';

export const OrganizationFavoriteTestScalarFieldEnumSchema = z.enum(['id','organizationId','parentId','parentName','level','testId','createdAt','updatedAt']);

export default OrganizationFavoriteTestScalarFieldEnumSchema;
