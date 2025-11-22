import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderScalarRelationFilterSchema: z.ZodType<Prisma.ProviderScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ProviderWhereInputSchema).optional(),
  isNot: z.lazy(() => ProviderWhereInputSchema).optional(),
});

export default ProviderScalarRelationFilterSchema;
