import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdUpdateManyMutationInputSchema } from '../inputTypeSchemas/IcdUpdateManyMutationInputSchema'
import { IcdUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IcdUncheckedUpdateManyInputSchema'
import { IcdWhereInputSchema } from '../inputTypeSchemas/IcdWhereInputSchema'

export const IcdUpdateManyArgsSchema: z.ZodType<Prisma.IcdUpdateManyArgs> = z.object({
  data: z.union([ IcdUpdateManyMutationInputSchema, IcdUncheckedUpdateManyInputSchema ]),
  where: IcdWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default IcdUpdateManyArgsSchema;
