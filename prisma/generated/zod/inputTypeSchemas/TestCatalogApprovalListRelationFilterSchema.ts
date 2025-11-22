import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereInputSchema } from './TestCatalogApprovalWhereInputSchema';

export const TestCatalogApprovalListRelationFilterSchema: z.ZodType<Prisma.TestCatalogApprovalListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogApprovalWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogApprovalWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogApprovalWhereInputSchema).optional(),
});

export default TestCatalogApprovalListRelationFilterSchema;
