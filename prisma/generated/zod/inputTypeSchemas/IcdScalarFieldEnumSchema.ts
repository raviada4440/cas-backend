import { z } from 'zod';

export const IcdScalarFieldEnumSchema = z.enum(['id','code','shortDescription','alias1','alias2','alias3','alias4','createdAt','updatedAt']);

export default IcdScalarFieldEnumSchema;
