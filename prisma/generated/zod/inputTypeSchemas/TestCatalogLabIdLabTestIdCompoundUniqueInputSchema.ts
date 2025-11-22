import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogLabIdLabTestIdCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogLabIdLabTestIdCompoundUniqueInput> = z.strictObject({
  labId: z.string(),
  labTestId: z.string(),
});

export default TestCatalogLabIdLabTestIdCompoundUniqueInputSchema;
