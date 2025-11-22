import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierCreateInputSchema } from '../inputTypeSchemas/ExternalIdentifierCreateInputSchema'
import { ExternalIdentifierUncheckedCreateInputSchema } from '../inputTypeSchemas/ExternalIdentifierUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExternalIdentifierSelectSchema: z.ZodType<Prisma.ExternalIdentifierSelect> = z.object({
  id: z.boolean().optional(),
  resourceType: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  system: z.boolean().optional(),
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ExternalIdentifierCreateArgsSchema: z.ZodType<Prisma.ExternalIdentifierCreateArgs> = z.object({
  select: ExternalIdentifierSelectSchema.optional(),
  data: z.union([ ExternalIdentifierCreateInputSchema, ExternalIdentifierUncheckedCreateInputSchema ]),
}).strict();

export default ExternalIdentifierCreateArgsSchema;
