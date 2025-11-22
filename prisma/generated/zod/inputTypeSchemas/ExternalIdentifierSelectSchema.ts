import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ExternalIdentifierSelectSchema: z.ZodType<Prisma.ExternalIdentifierSelect> = z.object({
  id: z.boolean().optional(),
  resourceType: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  system: z.boolean().optional(),
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default ExternalIdentifierSelectSchema;
