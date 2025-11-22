import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationWhereInputSchema } from './ProviderEducationWhereInputSchema';

export const ProviderEducationListRelationFilterSchema: z.ZodType<Prisma.ProviderEducationListRelationFilter> = z.strictObject({
  every: z.lazy(() => ProviderEducationWhereInputSchema).optional(),
  some: z.lazy(() => ProviderEducationWhereInputSchema).optional(),
  none: z.lazy(() => ProviderEducationWhereInputSchema).optional(),
});

export default ProviderEducationListRelationFilterSchema;
