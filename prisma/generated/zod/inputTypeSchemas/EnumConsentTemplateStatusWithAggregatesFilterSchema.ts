import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateStatusSchema } from './ConsentTemplateStatusSchema';
import { NestedEnumConsentTemplateStatusWithAggregatesFilterSchema } from './NestedEnumConsentTemplateStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumConsentTemplateStatusFilterSchema } from './NestedEnumConsentTemplateStatusFilterSchema';

export const EnumConsentTemplateStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumConsentTemplateStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ConsentTemplateStatusSchema).optional(),
  in: z.lazy(() => ConsentTemplateStatusSchema).array().optional(),
  notIn: z.lazy(() => ConsentTemplateStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ConsentTemplateStatusSchema), z.lazy(() => NestedEnumConsentTemplateStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumConsentTemplateStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumConsentTemplateStatusFilterSchema).optional(),
});

export default EnumConsentTemplateStatusWithAggregatesFilterSchema;
