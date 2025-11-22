import { z } from 'zod';

export const KeyPairRefScalarFieldEnumSchema = z.enum(['id','kid','alg','provider','locator','createdAt','updatedAt']);

export default KeyPairRefScalarFieldEnumSchema;
