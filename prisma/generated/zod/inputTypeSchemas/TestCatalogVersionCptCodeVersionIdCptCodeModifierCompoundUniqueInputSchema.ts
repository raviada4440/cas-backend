import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionCptCodeVersionIdCptCodeModifierCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeVersionIdCptCodeModifierCompoundUniqueInput> = z.strictObject({
  versionId: z.string(),
  cptCode: z.string(),
  modifier: z.string(),
});

export default TestCatalogVersionCptCodeVersionIdCptCodeModifierCompoundUniqueInputSchema;
