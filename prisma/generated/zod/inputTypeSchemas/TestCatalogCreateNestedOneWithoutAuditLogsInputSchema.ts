import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutAuditLogsInputSchema } from './TestCatalogCreateWithoutAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutAuditLogsInputSchema';
import { TestCatalogCreateOrConnectWithoutAuditLogsInputSchema } from './TestCatalogCreateOrConnectWithoutAuditLogsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutAuditLogsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutAuditLogsInputSchema;
