import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema';

export const TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutConsentAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema;
