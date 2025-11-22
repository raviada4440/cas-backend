import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';
import { TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema';

export const TestCatalogVersionConsentUpdateToOneWithWhereWithoutAuditLogsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateToOneWithWhereWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutAuditLogsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutAuditLogsInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateToOneWithWhereWithoutAuditLogsInputSchema;
