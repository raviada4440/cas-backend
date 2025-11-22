import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutConsentAuditLogsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutConsentAuditLogsInputSchema;
