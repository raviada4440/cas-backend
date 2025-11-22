import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ExternalIdentifierUncheckedCreateInputSchema: z.ZodType<Prisma.ExternalIdentifierUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  resourceType: z.string(),
  resourceId: z.string().optional().nullable(),
  system: z.string(),
  value: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default ExternalIdentifierUncheckedCreateInputSchema;
