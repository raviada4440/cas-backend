import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdWhereInputSchema } from '../inputTypeSchemas/IcdWhereInputSchema'
import { IcdOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IcdOrderByWithAggregationInputSchema'
import { IcdScalarFieldEnumSchema } from '../inputTypeSchemas/IcdScalarFieldEnumSchema'
import { IcdScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IcdScalarWhereWithAggregatesInputSchema'

export const IcdGroupByArgsSchema: z.ZodType<Prisma.IcdGroupByArgs> = z.object({
  where: IcdWhereInputSchema.optional(), 
  orderBy: z.union([ IcdOrderByWithAggregationInputSchema.array(), IcdOrderByWithAggregationInputSchema ]).optional(),
  by: IcdScalarFieldEnumSchema.array(), 
  having: IcdScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IcdGroupByArgsSchema;
