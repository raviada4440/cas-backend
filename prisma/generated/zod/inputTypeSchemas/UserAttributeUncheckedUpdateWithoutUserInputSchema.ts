import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema } from './NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AdminUncheckedUpdateOneWithoutUserAttributeNestedInputSchema } from './AdminUncheckedUpdateOneWithoutUserAttributeNestedInputSchema';
import { ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema } from './ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema';

export const UserAttributeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserAttributeUncheckedUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userType: z.union([ z.lazy(() => UserAttributeUserTypeSchema), z.lazy(() => NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.lazy(() => AdminUncheckedUpdateOneWithoutUserAttributeNestedInputSchema).optional(),
  provider: z.lazy(() => ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema).optional(),
});

export default UserAttributeUncheckedUpdateWithoutUserInputSchema;
