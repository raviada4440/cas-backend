import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierWhereInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereInputSchema'

export const ExternalIdentifierDeleteManyArgsSchema: z.ZodType<Prisma.ExternalIdentifierDeleteManyArgs> = z.object({
  where: ExternalIdentifierWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ExternalIdentifierDeleteManyArgsSchema;
