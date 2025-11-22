import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereInputSchema } from './TestCatalogVersionOrderFormWhereInputSchema';

export const TestCatalogVersionOrderFormNullableScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).optional().nullable(),
});

export default TestCatalogVersionOrderFormNullableScalarRelationFilterSchema;
