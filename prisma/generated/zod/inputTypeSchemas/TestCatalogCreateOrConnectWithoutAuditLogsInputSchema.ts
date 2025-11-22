import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutAuditLogsInputSchema } from './TestCatalogCreateWithoutAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutAuditLogsInputSchema';

export const TestCatalogCreateOrConnectWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutAuditLogsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutAuditLogsInputSchema;
