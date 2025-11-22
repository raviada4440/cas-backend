import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TestCatalogConfigurationCountOutputTypeSelectSchema: z.ZodType<Prisma.TestCatalogConfigurationCountOutputTypeSelect> = z.object({
  consents: z.boolean().optional(),
  approvals: z.boolean().optional(),
  labOrders: z.boolean().optional(),
  cptOverrides: z.boolean().optional(),
  orderLoincOverrides: z.boolean().optional(),
  resultLoincOverrides: z.boolean().optional(),
  specimenManifestEntries: z.boolean().optional(),
  biomarkerOverrides: z.boolean().optional(),
  orderForms: z.boolean().optional(),
}).strict();

export default TestCatalogConfigurationCountOutputTypeSelectSchema;
