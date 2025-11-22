import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInput> = z.strictObject({
  versionId: z.string(),
  loincCode: z.string(),
});

export default TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInputSchema;
