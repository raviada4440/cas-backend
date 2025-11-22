import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutConsentAuditLogsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutConsentAuditLogsInputSchema;
