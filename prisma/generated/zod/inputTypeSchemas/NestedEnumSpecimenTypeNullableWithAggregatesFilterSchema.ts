import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumSpecimenTypeNullableFilterSchema } from './NestedEnumSpecimenTypeNullableFilterSchema';

export const NestedEnumSpecimenTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSpecimenTypeNullableWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => SpecimenTypeSchema).optional().nullable(),
  in: z.lazy(() => SpecimenTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => SpecimenTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SpecimenTypeSchema), z.lazy(() => NestedEnumSpecimenTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSpecimenTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSpecimenTypeNullableFilterSchema).optional(),
});

export default NestedEnumSpecimenTypeNullableWithAggregatesFilterSchema;
