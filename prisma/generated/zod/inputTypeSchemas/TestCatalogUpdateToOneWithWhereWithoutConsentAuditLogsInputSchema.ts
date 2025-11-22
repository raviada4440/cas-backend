import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutConsentAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutConsentAuditLogsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema;
