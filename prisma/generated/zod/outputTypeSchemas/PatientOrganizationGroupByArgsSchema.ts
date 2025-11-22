import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientOrganizationWhereInputSchema } from '../inputTypeSchemas/PatientOrganizationWhereInputSchema'
import { PatientOrganizationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PatientOrganizationOrderByWithAggregationInputSchema'
import { PatientOrganizationScalarFieldEnumSchema } from '../inputTypeSchemas/PatientOrganizationScalarFieldEnumSchema'
import { PatientOrganizationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PatientOrganizationScalarWhereWithAggregatesInputSchema'

export const PatientOrganizationGroupByArgsSchema: z.ZodType<Prisma.PatientOrganizationGroupByArgs> = z.object({
  where: PatientOrganizationWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrganizationOrderByWithAggregationInputSchema.array(), PatientOrganizationOrderByWithAggregationInputSchema ]).optional(),
  by: PatientOrganizationScalarFieldEnumSchema.array(), 
  having: PatientOrganizationScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default PatientOrganizationGroupByArgsSchema;
