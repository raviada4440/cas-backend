import { z } from 'zod';

export const AdminScalarFieldEnumSchema = z.enum(['id','name','email','userAttributeId','createdAt','updatedAt']);

export default AdminScalarFieldEnumSchema;
