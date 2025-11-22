import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionSpecimenVersionIdDisplayNameCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenVersionIdDisplayNameCompoundUniqueInput> = z.strictObject({
  versionId: z.string(),
  displayName: z.string(),
});

export default TestCatalogVersionSpecimenVersionIdDisplayNameCompoundUniqueInputSchema;
