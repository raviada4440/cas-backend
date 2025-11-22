import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramWhereInputSchema } from './SponsoredProgramWhereInputSchema';

export const SponsoredProgramListRelationFilterSchema: z.ZodType<Prisma.SponsoredProgramListRelationFilter> = z.strictObject({
  every: z.lazy(() => SponsoredProgramWhereInputSchema).optional(),
  some: z.lazy(() => SponsoredProgramWhereInputSchema).optional(),
  none: z.lazy(() => SponsoredProgramWhereInputSchema).optional(),
});

export default SponsoredProgramListRelationFilterSchema;
