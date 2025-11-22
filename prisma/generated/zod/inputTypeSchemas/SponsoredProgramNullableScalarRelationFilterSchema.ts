import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramWhereInputSchema } from './SponsoredProgramWhereInputSchema';

export const SponsoredProgramNullableScalarRelationFilterSchema: z.ZodType<Prisma.SponsoredProgramNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => SponsoredProgramWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SponsoredProgramWhereInputSchema).optional().nullable(),
});

export default SponsoredProgramNullableScalarRelationFilterSchema;
