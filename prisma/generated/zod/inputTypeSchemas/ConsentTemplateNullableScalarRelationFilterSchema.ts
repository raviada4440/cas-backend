import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';

export const ConsentTemplateNullableScalarRelationFilterSchema: z.ZodType<Prisma.ConsentTemplateNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ConsentTemplateWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ConsentTemplateWhereInputSchema).optional().nullable(),
});

export default ConsentTemplateNullableScalarRelationFilterSchema;
