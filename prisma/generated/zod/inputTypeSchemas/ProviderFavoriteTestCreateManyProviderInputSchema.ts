import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProviderFavoriteTestCreateManyProviderInputSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateManyProviderInput> = z.strictObject({
  id: z.string().optional(),
  parentId: z.string().optional().nullable(),
  parentName: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  testId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default ProviderFavoriteTestCreateManyProviderInputSchema;
