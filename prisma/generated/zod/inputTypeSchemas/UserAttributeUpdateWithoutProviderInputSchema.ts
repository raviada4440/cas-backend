import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema } from './NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema } from './UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema';
import { AdminUpdateOneWithoutUserAttributeNestedInputSchema } from './AdminUpdateOneWithoutUserAttributeNestedInputSchema';

export const UserAttributeUpdateWithoutProviderInputSchema: z.ZodType<Prisma.UserAttributeUpdateWithoutProviderInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userType: z.union([ z.lazy(() => UserAttributeUserTypeSchema), z.lazy(() => NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema).optional(),
  admin: z.lazy(() => AdminUpdateOneWithoutUserAttributeNestedInputSchema).optional(),
});

export default UserAttributeUpdateWithoutProviderInputSchema;
