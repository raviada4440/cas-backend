import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumUserAttributeUserTypeNullableFilterSchema } from './NestedEnumUserAttributeUserTypeNullableFilterSchema';

export const NestedEnumUserAttributeUserTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserAttributeUserTypeNullableWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  in: z.lazy(() => UserAttributeUserTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => UserAttributeUserTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => UserAttributeUserTypeSchema), z.lazy(() => NestedEnumUserAttributeUserTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserAttributeUserTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserAttributeUserTypeNullableFilterSchema).optional(),
});

export default NestedEnumUserAttributeUserTypeNullableWithAggregatesFilterSchema;
