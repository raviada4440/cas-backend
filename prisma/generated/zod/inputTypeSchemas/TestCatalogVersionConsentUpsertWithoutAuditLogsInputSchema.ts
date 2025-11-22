import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';

export const TestCatalogVersionConsentUpsertWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpsertWithoutAuditLogsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional(),
});

export default TestCatalogVersionConsentUpsertWithoutAuditLogsInputSchema;
