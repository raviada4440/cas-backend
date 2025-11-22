import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema } from './TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutConsentAuditLogsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConsentAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutConsentAuditLogsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutConsentAuditLogsInputSchema;
