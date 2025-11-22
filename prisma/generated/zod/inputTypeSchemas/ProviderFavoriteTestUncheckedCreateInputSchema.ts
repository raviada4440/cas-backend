import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProviderFavoriteTestUncheckedCreateInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  providerId: z.string().optional().nullable(),
  parentId: z.string().optional().nullable(),
  parentName: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  testId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default ProviderFavoriteTestUncheckedCreateInputSchema;
