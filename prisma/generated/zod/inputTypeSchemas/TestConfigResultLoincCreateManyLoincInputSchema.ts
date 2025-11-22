import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigResultLoincCreateManyLoincInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateManyLoincInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigResultLoincCreateManyLoincInputSchema;
