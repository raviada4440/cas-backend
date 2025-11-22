import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutAuditLogsInputSchema } from './TestCatalogUpdateWithoutAuditLogsInputSchema';
import { TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema } from './TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutAuditLogsInputSchema;
