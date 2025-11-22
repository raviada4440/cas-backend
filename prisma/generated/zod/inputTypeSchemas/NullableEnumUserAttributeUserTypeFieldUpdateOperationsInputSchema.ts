import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';

export const NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumUserAttributeUserTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
});

export default NullableEnumUserAttributeUserTypeFieldUpdateOperationsInputSchema;
