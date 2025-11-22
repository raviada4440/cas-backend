import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientOrganizationUpdateManyMutationInputSchema } from '../inputTypeSchemas/PatientOrganizationUpdateManyMutationInputSchema'
import { PatientOrganizationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PatientOrganizationUncheckedUpdateManyInputSchema'
import { PatientOrganizationWhereInputSchema } from '../inputTypeSchemas/PatientOrganizationWhereInputSchema'

export const PatientOrganizationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PatientOrganizationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PatientOrganizationUpdateManyMutationInputSchema, PatientOrganizationUncheckedUpdateManyInputSchema ]),
  where: PatientOrganizationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default PatientOrganizationUpdateManyAndReturnArgsSchema;
