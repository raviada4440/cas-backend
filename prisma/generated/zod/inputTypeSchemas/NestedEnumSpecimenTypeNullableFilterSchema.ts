import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';

export const NestedEnumSpecimenTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumSpecimenTypeNullableFilter> = z.strictObject({
  equals: z.lazy(() => SpecimenTypeSchema).optional().nullable(),
  in: z.lazy(() => SpecimenTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => SpecimenTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SpecimenTypeSchema), z.lazy(() => NestedEnumSpecimenTypeNullableFilterSchema) ]).optional().nullable(),
});

export default NestedEnumSpecimenTypeNullableFilterSchema;
