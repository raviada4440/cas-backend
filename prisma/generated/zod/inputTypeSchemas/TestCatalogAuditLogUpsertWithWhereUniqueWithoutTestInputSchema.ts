import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogWhereUniqueInputSchema } from './TestCatalogAuditLogWhereUniqueInputSchema';
import { TestCatalogAuditLogUpdateWithoutTestInputSchema } from './TestCatalogAuditLogUpdateWithoutTestInputSchema';
import { TestCatalogAuditLogUncheckedUpdateWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedUpdateWithoutTestInputSchema';
import { TestCatalogAuditLogCreateWithoutTestInputSchema } from './TestCatalogAuditLogCreateWithoutTestInputSchema';
import { TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema';

export const TestCatalogAuditLogUpsertWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogAuditLogUpsertWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogAuditLogUpdateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUncheckedUpdateWithoutTestInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogAuditLogCreateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema) ]),
});

export default TestCatalogAuditLogUpsertWithWhereUniqueWithoutTestInputSchema;
