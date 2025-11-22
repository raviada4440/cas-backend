import { z } from 'zod';

export const UserIdentityScalarFieldEnumSchema = z.enum(['id','userId','provider','issuer','subject','fhirUser','orgId','createdAt','updatedAt']);

export default UserIdentityScalarFieldEnumSchema;
