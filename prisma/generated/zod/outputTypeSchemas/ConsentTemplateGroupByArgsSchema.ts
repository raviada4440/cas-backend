import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateWhereInputSchema } from '../inputTypeSchemas/ConsentTemplateWhereInputSchema'
import { ConsentTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ConsentTemplateOrderByWithAggregationInputSchema'
import { ConsentTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/ConsentTemplateScalarFieldEnumSchema'
import { ConsentTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ConsentTemplateScalarWhereWithAggregatesInputSchema'

export const ConsentTemplateGroupByArgsSchema: z.ZodType<Prisma.ConsentTemplateGroupByArgs> = z.object({
  where: ConsentTemplateWhereInputSchema.optional(), 
  orderBy: z.union([ ConsentTemplateOrderByWithAggregationInputSchema.array(), ConsentTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: ConsentTemplateScalarFieldEnumSchema.array(), 
  having: ConsentTemplateScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ConsentTemplateGroupByArgsSchema;
