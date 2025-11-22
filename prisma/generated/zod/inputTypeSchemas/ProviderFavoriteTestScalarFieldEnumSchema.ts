import { z } from 'zod';

export const ProviderFavoriteTestScalarFieldEnumSchema = z.enum(['id','providerId','parentId','parentName','level','testId','createdAt','updatedAt']);

export default ProviderFavoriteTestScalarFieldEnumSchema;
