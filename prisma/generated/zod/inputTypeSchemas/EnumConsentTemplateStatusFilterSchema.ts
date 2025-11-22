import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateStatusSchema } from './ConsentTemplateStatusSchema';
import { NestedEnumConsentTemplateStatusFilterSchema } from './NestedEnumConsentTemplateStatusFilterSchema';

export const EnumConsentTemplateStatusFilterSchema: z.ZodType<Prisma.EnumConsentTemplateStatusFilter> = z.strictObject({
  equals: z.lazy(() => ConsentTemplateStatusSchema).optional(),
  in: z.lazy(() => ConsentTemplateStatusSchema).array().optional(),
  notIn: z.lazy(() => ConsentTemplateStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ConsentTemplateStatusSchema), z.lazy(() => NestedEnumConsentTemplateStatusFilterSchema) ]).optional(),
});

export default EnumConsentTemplateStatusFilterSchema;
