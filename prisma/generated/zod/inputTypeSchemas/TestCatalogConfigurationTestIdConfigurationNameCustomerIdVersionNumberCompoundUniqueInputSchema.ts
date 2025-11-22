import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInput> = z.strictObject({
  testId: z.string(),
  configurationName: z.string(),
  customerId: z.string(),
  versionNumber: z.number(),
});

export default TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInputSchema;
