import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProviderUpdateManyMutationInputSchema'
import { ProviderUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProviderUncheckedUpdateManyInputSchema'
import { ProviderWhereInputSchema } from '../inputTypeSchemas/ProviderWhereInputSchema'

export const ProviderUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProviderUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ProviderUpdateManyMutationInputSchema, ProviderUncheckedUpdateManyInputSchema ]),
  where: ProviderWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderUpdateManyAndReturnArgsSchema;
