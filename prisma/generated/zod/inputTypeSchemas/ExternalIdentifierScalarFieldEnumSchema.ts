import { z } from 'zod';

export const ExternalIdentifierScalarFieldEnumSchema = z.enum(['id','resourceType','resourceId','system','value','createdAt','updatedAt']);

export default ExternalIdentifierScalarFieldEnumSchema;
