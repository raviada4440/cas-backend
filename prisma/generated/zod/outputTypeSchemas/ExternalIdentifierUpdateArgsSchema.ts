import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierUpdateInputSchema } from '../inputTypeSchemas/ExternalIdentifierUpdateInputSchema'
import { ExternalIdentifierUncheckedUpdateInputSchema } from '../inputTypeSchemas/ExternalIdentifierUncheckedUpdateInputSchema'
import { ExternalIdentifierWhereUniqueInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereUniqueInputSchema'
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

export const ExternalIdentifierUpdateArgsSchema: z.ZodType<Prisma.ExternalIdentifierUpdateArgs> = z.object({
  select: ExternalIdentifierSelectSchema.optional(),
  data: z.union([ ExternalIdentifierUpdateInputSchema, ExternalIdentifierUncheckedUpdateInputSchema ]),
  where: ExternalIdentifierWhereUniqueInputSchema, 
}).strict();

export default ExternalIdentifierUpdateArgsSchema;
