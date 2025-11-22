import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const LoincScalarRelationFilterSchema: z.ZodType<Prisma.LoincScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => LoincWhereInputSchema).optional(),
  isNot: z.lazy(() => LoincWhereInputSchema).optional(),
});

export default LoincScalarRelationFilterSchema;
