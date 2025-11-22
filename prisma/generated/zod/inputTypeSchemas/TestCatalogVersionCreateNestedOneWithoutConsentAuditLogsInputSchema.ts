import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutConsentAuditLogsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutConsentAuditLogsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutConsentAuditLogsInputSchema;
