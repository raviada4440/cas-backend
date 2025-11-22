import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema;
