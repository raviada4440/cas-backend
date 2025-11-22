import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdWhereInputSchema } from '../inputTypeSchemas/IcdWhereInputSchema'
import { IcdOrderByWithRelationInputSchema } from '../inputTypeSchemas/IcdOrderByWithRelationInputSchema'
import { IcdWhereUniqueInputSchema } from '../inputTypeSchemas/IcdWhereUniqueInputSchema'

export const IcdAggregateArgsSchema: z.ZodType<Prisma.IcdAggregateArgs> = z.object({
  where: IcdWhereInputSchema.optional(), 
  orderBy: z.union([ IcdOrderByWithRelationInputSchema.array(), IcdOrderByWithRelationInputSchema ]).optional(),
  cursor: IcdWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IcdAggregateArgsSchema;
