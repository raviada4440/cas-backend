import { z } from 'zod';

export const UserAttributeScalarFieldEnumSchema = z.enum(['id','userId','userType','createdAt','updatedAt']);

export default UserAttributeScalarFieldEnumSchema;
