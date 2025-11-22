import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';

export const ConsentTemplateScalarRelationFilterSchema: z.ZodType<Prisma.ConsentTemplateScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
  isNot: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
});

export default ConsentTemplateScalarRelationFilterSchema;
