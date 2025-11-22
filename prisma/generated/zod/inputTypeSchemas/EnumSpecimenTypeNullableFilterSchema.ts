import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { NestedEnumSpecimenTypeNullableFilterSchema } from './NestedEnumSpecimenTypeNullableFilterSchema';

export const EnumSpecimenTypeNullableFilterSchema: z.ZodType<Prisma.EnumSpecimenTypeNullableFilter> = z.strictObject({
  equals: z.lazy(() => SpecimenTypeSchema).optional().nullable(),
  in: z.lazy(() => SpecimenTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => SpecimenTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SpecimenTypeSchema), z.lazy(() => NestedEnumSpecimenTypeNullableFilterSchema) ]).optional().nullable(),
});

export default EnumSpecimenTypeNullableFilterSchema;
