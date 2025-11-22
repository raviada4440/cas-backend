import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TestCatalogCountOutputTypeSelectSchema: z.ZodType<Prisma.TestCatalogCountOutputTypeSelect> = z.object({
  versions: z.boolean().optional(),
  configurations: z.boolean().optional(),
  labOrderTests: z.boolean().optional(),
  organizationFavoriteTests: z.boolean().optional(),
  providerFavoriteTests: z.boolean().optional(),
  sponsoredTests: z.boolean().optional(),
  auditLogs: z.boolean().optional(),
  consentAuditLogs: z.boolean().optional(),
  testGenes: z.boolean().optional(),
}).strict();

export default TestCatalogCountOutputTypeSelectSchema;
