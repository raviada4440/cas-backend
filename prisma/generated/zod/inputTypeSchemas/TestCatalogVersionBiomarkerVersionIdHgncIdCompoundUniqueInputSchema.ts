import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInput> = z.strictObject({
  versionId: z.string(),
  hgncId: z.string(),
});

export default TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInputSchema;
