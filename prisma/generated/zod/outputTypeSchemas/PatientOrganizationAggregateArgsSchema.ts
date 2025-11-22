import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientOrganizationWhereInputSchema } from '../inputTypeSchemas/PatientOrganizationWhereInputSchema'
import { PatientOrganizationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientOrganizationOrderByWithRelationInputSchema'
import { PatientOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/PatientOrganizationWhereUniqueInputSchema'

export const PatientOrganizationAggregateArgsSchema: z.ZodType<Prisma.PatientOrganizationAggregateArgs> = z.object({
  where: PatientOrganizationWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrganizationOrderByWithRelationInputSchema.array(), PatientOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: PatientOrganizationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default PatientOrganizationAggregateArgsSchema;
