import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogWhereUniqueInputSchema } from './TestCatalogAuditLogWhereUniqueInputSchema';
import { TestCatalogAuditLogCreateWithoutTestInputSchema } from './TestCatalogAuditLogCreateWithoutTestInputSchema';
import { TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema';

export const TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogAuditLogCreateOrConnectWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogAuditLogCreateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema) ]),
});

export default TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema;
