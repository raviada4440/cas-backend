import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTypeSchema } from './ConsentTypeSchema';

export const NestedEnumConsentTypeFilterSchema: z.ZodType<Prisma.NestedEnumConsentTypeFilter> = z.strictObject({
  equals: z.lazy(() => ConsentTypeSchema).optional(),
  in: z.lazy(() => ConsentTypeSchema).array().optional(),
  notIn: z.lazy(() => ConsentTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ConsentTypeSchema), z.lazy(() => NestedEnumConsentTypeFilterSchema) ]).optional(),
});

export default NestedEnumConsentTypeFilterSchema;
