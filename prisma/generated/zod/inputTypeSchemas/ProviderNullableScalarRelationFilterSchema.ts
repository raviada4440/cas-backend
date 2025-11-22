import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderNullableScalarRelationFilterSchema: z.ZodType<Prisma.ProviderNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ProviderWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProviderWhereInputSchema).optional().nullable(),
});

export default ProviderNullableScalarRelationFilterSchema;
