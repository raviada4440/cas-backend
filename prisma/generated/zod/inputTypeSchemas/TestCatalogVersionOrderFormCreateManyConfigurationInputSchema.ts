import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionOrderFormCreateManyConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateManyConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  orderFormTemplateId: z.string(),
  displayOrder: z.number().optional(),
  customTitle: z.string().optional().nullable(),
  isRequired: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionOrderFormCreateManyConfigurationInputSchema;
