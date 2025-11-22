import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTypeSchema } from './ConsentTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumConsentTypeFilterSchema } from './NestedEnumConsentTypeFilterSchema';

export const NestedEnumConsentTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumConsentTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ConsentTypeSchema).optional(),
  in: z.lazy(() => ConsentTypeSchema).array().optional(),
  notIn: z.lazy(() => ConsentTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ConsentTypeSchema), z.lazy(() => NestedEnumConsentTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumConsentTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumConsentTypeFilterSchema).optional(),
});

export default NestedEnumConsentTypeWithAggregatesFilterSchema;
