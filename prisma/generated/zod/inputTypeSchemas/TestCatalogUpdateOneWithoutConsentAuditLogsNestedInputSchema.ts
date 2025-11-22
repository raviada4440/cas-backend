import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema } from './TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema';
import { TestCatalogUpsertWithoutConsentAuditLogsInputSchema } from './TestCatalogUpsertWithoutConsentAuditLogsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema';
import { TestCatalogUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema';

export const TestCatalogUpdateOneWithoutConsentAuditLogsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneWithoutConsentAuditLogsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutConsentAuditLogsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUpdateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneWithoutConsentAuditLogsNestedInputSchema;
