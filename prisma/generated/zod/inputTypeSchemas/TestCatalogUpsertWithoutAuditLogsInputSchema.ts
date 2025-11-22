import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutAuditLogsInputSchema } from './TestCatalogUpdateWithoutAuditLogsInputSchema';
import { TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema } from './TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema';
import { TestCatalogCreateWithoutAuditLogsInputSchema } from './TestCatalogCreateWithoutAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutAuditLogsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutAuditLogsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutAuditLogsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutAuditLogsInputSchema;
