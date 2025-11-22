import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionTestIdVersionNumberCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionTestIdVersionNumberCompoundUniqueInput> = z.strictObject({
  testId: z.string(),
  versionNumber: z.number(),
});

export default TestCatalogVersionTestIdVersionNumberCompoundUniqueInputSchema;
