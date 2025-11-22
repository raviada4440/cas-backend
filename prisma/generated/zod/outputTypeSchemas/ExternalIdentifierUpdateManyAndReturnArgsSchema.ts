import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierUpdateManyMutationInputSchema } from '../inputTypeSchemas/ExternalIdentifierUpdateManyMutationInputSchema'
import { ExternalIdentifierUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ExternalIdentifierUncheckedUpdateManyInputSchema'
import { ExternalIdentifierWhereInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereInputSchema'

export const ExternalIdentifierUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ExternalIdentifierUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ExternalIdentifierUpdateManyMutationInputSchema, ExternalIdentifierUncheckedUpdateManyInputSchema ]),
  where: ExternalIdentifierWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ExternalIdentifierUpdateManyAndReturnArgsSchema;
