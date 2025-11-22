import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema';

export const TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema) ]),
});

export default TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema;
