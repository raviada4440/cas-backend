import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IcdUncheckedCreateWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.IcdUncheckedCreateWithoutLabOrderIcdsInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string().optional().nullable(),
  shortDescription: z.string().optional().nullable(),
  alias1: z.string().optional().nullable(),
  alias2: z.string().optional().nullable(),
  alias3: z.string().optional().nullable(),
  alias4: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default IcdUncheckedCreateWithoutLabOrderIcdsInputSchema;
