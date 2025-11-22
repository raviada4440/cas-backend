import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VariantDimensionSchema } from './VariantDimensionSchema';

export const NestedEnumVariantDimensionFilterSchema: z.ZodType<Prisma.NestedEnumVariantDimensionFilter> = z.strictObject({
  equals: z.lazy(() => VariantDimensionSchema).optional(),
  in: z.lazy(() => VariantDimensionSchema).array().optional(),
  notIn: z.lazy(() => VariantDimensionSchema).array().optional(),
  not: z.union([ z.lazy(() => VariantDimensionSchema), z.lazy(() => NestedEnumVariantDimensionFilterSchema) ]).optional(),
});

export default NestedEnumVariantDimensionFilterSchema;
