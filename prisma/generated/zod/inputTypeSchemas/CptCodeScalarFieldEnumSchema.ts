import { z } from 'zod';

export const CptCodeScalarFieldEnumSchema = z.enum(['code','shortDescription','longDescription','createdAt','updatedAt']);

export default CptCodeScalarFieldEnumSchema;
