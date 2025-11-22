import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionOrderFormVersionIdOrderFormTemplateIdConfigurationIdCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormVersionIdOrderFormTemplateIdConfigurationIdCompoundUniqueInput> = z.strictObject({
  versionId: z.string(),
  orderFormTemplateId: z.string(),
  configurationId: z.string(),
});

export default TestCatalogVersionOrderFormVersionIdOrderFormTemplateIdConfigurationIdCompoundUniqueInputSchema;
