import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderEducationWhereInputSchema } from '../inputTypeSchemas/ProviderEducationWhereInputSchema'
import { ProviderEducationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProviderEducationOrderByWithRelationInputSchema'
import { ProviderEducationWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderEducationWhereUniqueInputSchema'

export const ProviderEducationAggregateArgsSchema: z.ZodType<Prisma.ProviderEducationAggregateArgs> = z.object({
  where: ProviderEducationWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderEducationOrderByWithRelationInputSchema.array(), ProviderEducationOrderByWithRelationInputSchema ]).optional(),
  cursor: ProviderEducationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderEducationAggregateArgsSchema;
