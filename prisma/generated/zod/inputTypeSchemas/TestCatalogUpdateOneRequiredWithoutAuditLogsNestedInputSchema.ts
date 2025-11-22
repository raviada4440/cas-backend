import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutAuditLogsInputSchema } from './TestCatalogCreateWithoutAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutAuditLogsInputSchema';
import { TestCatalogCreateOrConnectWithoutAuditLogsInputSchema } from './TestCatalogCreateOrConnectWithoutAuditLogsInputSchema';
import { TestCatalogUpsertWithoutAuditLogsInputSchema } from './TestCatalogUpsertWithoutAuditLogsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutAuditLogsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutAuditLogsInputSchema';
import { TestCatalogUpdateWithoutAuditLogsInputSchema } from './TestCatalogUpdateWithoutAuditLogsInputSchema';
import { TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema } from './TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema';

export const TestCatalogUpdateOneRequiredWithoutAuditLogsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutAuditLogsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutAuditLogsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUpdateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutAuditLogsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneRequiredWithoutAuditLogsNestedInputSchema;
