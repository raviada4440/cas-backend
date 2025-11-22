import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CptCodeCreateInputSchema: z.ZodType<Prisma.CptCodeCreateInput> = z.strictObject({
  code: z.string(),
  shortDescription: z.string().optional().nullable(),
  longDescription: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default CptCodeCreateInputSchema;
