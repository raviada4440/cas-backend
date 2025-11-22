import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereInputSchema } from './SponsoredTestWhereInputSchema';

export const SponsoredTestNullableScalarRelationFilterSchema: z.ZodType<Prisma.SponsoredTestNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => SponsoredTestWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SponsoredTestWhereInputSchema).optional().nullable(),
});

export default SponsoredTestNullableScalarRelationFilterSchema;
