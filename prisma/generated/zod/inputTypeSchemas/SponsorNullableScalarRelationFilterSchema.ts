import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsorWhereInputSchema } from './SponsorWhereInputSchema';

export const SponsorNullableScalarRelationFilterSchema: z.ZodType<Prisma.SponsorNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => SponsorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SponsorWhereInputSchema).optional().nullable(),
});

export default SponsorNullableScalarRelationFilterSchema;
