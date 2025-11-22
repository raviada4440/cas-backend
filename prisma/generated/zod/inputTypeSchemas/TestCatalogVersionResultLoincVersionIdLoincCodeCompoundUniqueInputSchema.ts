import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInput> = z.strictObject({
  versionId: z.string(),
  loincCode: z.string(),
});

export default TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInputSchema;
