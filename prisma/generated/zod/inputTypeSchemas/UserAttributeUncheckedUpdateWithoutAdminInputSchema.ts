import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema } from './NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema } from './ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema';

export const UserAttributeUncheckedUpdateWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeUncheckedUpdateWithoutAdminInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userType: z.union([ z.lazy(() => UserAttributeUserTypeSchema), z.lazy(() => NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.lazy(() => ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema).optional(),
});

export default UserAttributeUncheckedUpdateWithoutAdminInputSchema;
