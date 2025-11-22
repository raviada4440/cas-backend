import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';

export const TestCatalogVersionConsentCreateNestedOneWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateNestedOneWithoutAuditLogsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionConsentCreateNestedOneWithoutAuditLogsInputSchema;
