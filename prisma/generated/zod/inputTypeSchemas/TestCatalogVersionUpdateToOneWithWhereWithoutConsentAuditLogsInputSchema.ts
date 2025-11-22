import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutConsentAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutConsentAuditLogsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConsentAuditLogsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutConsentAuditLogsInputSchema;
