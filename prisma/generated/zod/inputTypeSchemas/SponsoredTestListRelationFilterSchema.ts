import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereInputSchema } from './SponsoredTestWhereInputSchema';

export const SponsoredTestListRelationFilterSchema: z.ZodType<Prisma.SponsoredTestListRelationFilter> = z.strictObject({
  every: z.lazy(() => SponsoredTestWhereInputSchema).optional(),
  some: z.lazy(() => SponsoredTestWhereInputSchema).optional(),
  none: z.lazy(() => SponsoredTestWhereInputSchema).optional(),
});

export default SponsoredTestListRelationFilterSchema;
