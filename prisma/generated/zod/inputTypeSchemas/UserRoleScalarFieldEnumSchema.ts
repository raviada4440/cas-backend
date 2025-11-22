import { z } from 'zod';

export const UserRoleScalarFieldEnumSchema = z.enum(['id','userId','roleId','assignedBy','assignedAt','expiresAt','createdAt','updatedAt']);

export default UserRoleScalarFieldEnumSchema;
