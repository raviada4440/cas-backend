import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogWhereUniqueInputSchema } from './TestCatalogAuditLogWhereUniqueInputSchema';
import { TestCatalogAuditLogUpdateWithoutTestInputSchema } from './TestCatalogAuditLogUpdateWithoutTestInputSchema';
import { TestCatalogAuditLogUncheckedUpdateWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedUpdateWithoutTestInputSchema';

export const TestCatalogAuditLogUpdateWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogAuditLogUpdateWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogAuditLogUpdateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUncheckedUpdateWithoutTestInputSchema) ]),
});

export default TestCatalogAuditLogUpdateWithWhereUniqueWithoutTestInputSchema;
