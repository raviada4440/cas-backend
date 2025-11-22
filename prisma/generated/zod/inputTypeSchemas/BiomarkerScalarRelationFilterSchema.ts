import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';

export const BiomarkerScalarRelationFilterSchema: z.ZodType<Prisma.BiomarkerScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => BiomarkerWhereInputSchema).optional(),
  isNot: z.lazy(() => BiomarkerWhereInputSchema).optional(),
});

export default BiomarkerScalarRelationFilterSchema;
