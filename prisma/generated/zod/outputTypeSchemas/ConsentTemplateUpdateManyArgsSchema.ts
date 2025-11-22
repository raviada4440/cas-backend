import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/ConsentTemplateUpdateManyMutationInputSchema'
import { ConsentTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ConsentTemplateUncheckedUpdateManyInputSchema'
import { ConsentTemplateWhereInputSchema } from '../inputTypeSchemas/ConsentTemplateWhereInputSchema'

export const ConsentTemplateUpdateManyArgsSchema: z.ZodType<Prisma.ConsentTemplateUpdateManyArgs> = z.object({
  data: z.union([ ConsentTemplateUpdateManyMutationInputSchema, ConsentTemplateUncheckedUpdateManyInputSchema ]),
  where: ConsentTemplateWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ConsentTemplateUpdateManyArgsSchema;
