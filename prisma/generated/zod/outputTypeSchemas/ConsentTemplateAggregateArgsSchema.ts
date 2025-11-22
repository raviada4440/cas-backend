import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateWhereInputSchema } from '../inputTypeSchemas/ConsentTemplateWhereInputSchema'
import { ConsentTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConsentTemplateOrderByWithRelationInputSchema'
import { ConsentTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ConsentTemplateWhereUniqueInputSchema'

export const ConsentTemplateAggregateArgsSchema: z.ZodType<Prisma.ConsentTemplateAggregateArgs> = z.object({
  where: ConsentTemplateWhereInputSchema.optional(), 
  orderBy: z.union([ ConsentTemplateOrderByWithRelationInputSchema.array(), ConsentTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: ConsentTemplateWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ConsentTemplateAggregateArgsSchema;
