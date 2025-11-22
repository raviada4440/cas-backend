import { z } from 'zod';

export const RoleScalarFieldEnumSchema = z.enum(['id','name','description','permissions','createdAt','updatedAt']);

export default RoleScalarFieldEnumSchema;
