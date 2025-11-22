import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderEducationUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProviderEducationUpdateManyMutationInputSchema'
import { ProviderEducationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProviderEducationUncheckedUpdateManyInputSchema'
import { ProviderEducationWhereInputSchema } from '../inputTypeSchemas/ProviderEducationWhereInputSchema'

export const ProviderEducationUpdateManyArgsSchema: z.ZodType<Prisma.ProviderEducationUpdateManyArgs> = z.object({
  data: z.union([ ProviderEducationUpdateManyMutationInputSchema, ProviderEducationUncheckedUpdateManyInputSchema ]),
  where: ProviderEducationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderEducationUpdateManyArgsSchema;
