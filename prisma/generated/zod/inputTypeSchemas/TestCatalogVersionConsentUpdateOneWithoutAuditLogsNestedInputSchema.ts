import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUpsertWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUpsertWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateToOneWithWhereWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUpdateToOneWithWhereWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema';

export const TestCatalogVersionConsentUpdateOneWithoutAuditLogsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateOneWithoutAuditLogsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionConsentUpsertWithoutAuditLogsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionConsentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionConsentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateToOneWithWhereWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema) ]).optional(),
});

export default TestCatalogVersionConsentUpdateOneWithoutAuditLogsNestedInputSchema;
