import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestGeneTestIdGeneCompoundUniqueInputSchema: z.ZodType<Prisma.TestGeneTestIdGeneCompoundUniqueInput> = z.strictObject({
  testId: z.string(),
  gene: z.string(),
});

export default TestGeneTestIdGeneCompoundUniqueInputSchema;
