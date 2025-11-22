import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VariantDimensionSchema } from './VariantDimensionSchema';
import { NestedEnumVariantDimensionFilterSchema } from './NestedEnumVariantDimensionFilterSchema';

export const EnumVariantDimensionFilterSchema: z.ZodType<Prisma.EnumVariantDimensionFilter> = z.strictObject({
  equals: z.lazy(() => VariantDimensionSchema).optional(),
  in: z.lazy(() => VariantDimensionSchema).array().optional(),
  notIn: z.lazy(() => VariantDimensionSchema).array().optional(),
  not: z.union([ z.lazy(() => VariantDimensionSchema), z.lazy(() => NestedEnumVariantDimensionFilterSchema) ]).optional(),
});

export default EnumVariantDimensionFilterSchema;
