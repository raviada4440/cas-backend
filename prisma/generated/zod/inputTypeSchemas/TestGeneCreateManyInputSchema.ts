import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestGeneCreateManyInputSchema: z.ZodType<Prisma.TestGeneCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  testId: z.string(),
  labTestId: z.string().optional().nullable(),
  gene: z.string(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestGeneCreateManyInputSchema;
