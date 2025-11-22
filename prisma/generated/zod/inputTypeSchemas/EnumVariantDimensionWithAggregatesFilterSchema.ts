import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VariantDimensionSchema } from './VariantDimensionSchema';
import { NestedEnumVariantDimensionWithAggregatesFilterSchema } from './NestedEnumVariantDimensionWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumVariantDimensionFilterSchema } from './NestedEnumVariantDimensionFilterSchema';

export const EnumVariantDimensionWithAggregatesFilterSchema: z.ZodType<Prisma.EnumVariantDimensionWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => VariantDimensionSchema).optional(),
  in: z.lazy(() => VariantDimensionSchema).array().optional(),
  notIn: z.lazy(() => VariantDimensionSchema).array().optional(),
  not: z.union([ z.lazy(() => VariantDimensionSchema), z.lazy(() => NestedEnumVariantDimensionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVariantDimensionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVariantDimensionFilterSchema).optional(),
});

export default EnumVariantDimensionWithAggregatesFilterSchema;
