import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { NestedEnumUserAttributeUserTypeNullableFilterSchema } from './NestedEnumUserAttributeUserTypeNullableFilterSchema';

export const EnumUserAttributeUserTypeNullableFilterSchema: z.ZodType<Prisma.EnumUserAttributeUserTypeNullableFilter> = z.strictObject({
  equals: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  in: z.lazy(() => UserAttributeUserTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => UserAttributeUserTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => UserAttributeUserTypeSchema), z.lazy(() => NestedEnumUserAttributeUserTypeNullableFilterSchema) ]).optional().nullable(),
});

export default EnumUserAttributeUserTypeNullableFilterSchema;
