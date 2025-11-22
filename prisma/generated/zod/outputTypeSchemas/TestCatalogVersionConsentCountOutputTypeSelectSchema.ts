import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TestCatalogVersionConsentCountOutputTypeSelectSchema: z.ZodType<Prisma.TestCatalogVersionConsentCountOutputTypeSelect> = z.object({
  labOrderConsents: z.boolean().optional(),
  auditLogs: z.boolean().optional(),
}).strict();

export default TestCatalogVersionConsentCountOutputTypeSelectSchema;
