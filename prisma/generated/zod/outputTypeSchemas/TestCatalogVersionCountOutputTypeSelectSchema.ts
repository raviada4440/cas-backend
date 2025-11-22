import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TestCatalogVersionCountOutputTypeSelectSchema: z.ZodType<Prisma.TestCatalogVersionCountOutputTypeSelect> = z.object({
  specimens: z.boolean().optional(),
  biomarkers: z.boolean().optional(),
  cptCodes: z.boolean().optional(),
  orderLoincs: z.boolean().optional(),
  resultLoincs: z.boolean().optional(),
  orderForms: z.boolean().optional(),
  consents: z.boolean().optional(),
  consentAuditLogs: z.boolean().optional(),
  labOrders: z.boolean().optional(),
  approvals: z.boolean().optional(),
  defaultForTests: z.boolean().optional(),
  configurations: z.boolean().optional(),
  reviewThreads: z.boolean().optional(),
}).strict();

export default TestCatalogVersionCountOutputTypeSelectSchema;
