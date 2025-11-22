import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUpsertWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUpsertWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema';

export const TestCatalogVersionUpdateOneWithoutConsentAuditLogsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneWithoutConsentAuditLogsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutConsentAuditLogsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneWithoutConsentAuditLogsNestedInputSchema;
