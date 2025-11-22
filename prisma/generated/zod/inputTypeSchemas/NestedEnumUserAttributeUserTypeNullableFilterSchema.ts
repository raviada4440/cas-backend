import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';

export const NestedEnumUserAttributeUserTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumUserAttributeUserTypeNullableFilter> = z.strictObject({
  equals: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  in: z.lazy(() => UserAttributeUserTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => UserAttributeUserTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => UserAttributeUserTypeSchema), z.lazy(() => NestedEnumUserAttributeUserTypeNullableFilterSchema) ]).optional().nullable(),
});

export default NestedEnumUserAttributeUserTypeNullableFilterSchema;
