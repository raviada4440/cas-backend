import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema } from './NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema } from './UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema';
import { ProviderUpdateOneWithoutUserAttributeNestedInputSchema } from './ProviderUpdateOneWithoutUserAttributeNestedInputSchema';

export const UserAttributeUpdateWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeUpdateWithoutAdminInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userType: z.union([ z.lazy(() => UserAttributeUserTypeSchema), z.lazy(() => NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema).optional(),
  provider: z.lazy(() => ProviderUpdateOneWithoutUserAttributeNestedInputSchema).optional(),
});

export default UserAttributeUpdateWithoutAdminInputSchema;
