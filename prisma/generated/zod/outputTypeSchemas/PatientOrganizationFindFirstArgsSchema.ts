import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientOrganizationIncludeSchema } from '../inputTypeSchemas/PatientOrganizationIncludeSchema'
import { PatientOrganizationWhereInputSchema } from '../inputTypeSchemas/PatientOrganizationWhereInputSchema'
import { PatientOrganizationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientOrganizationOrderByWithRelationInputSchema'
import { PatientOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/PatientOrganizationWhereUniqueInputSchema'
import { PatientOrganizationScalarFieldEnumSchema } from '../inputTypeSchemas/PatientOrganizationScalarFieldEnumSchema'
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { PatientArgsSchema } from "../outputTypeSchemas/PatientArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PatientOrganizationSelectSchema: z.ZodType<Prisma.PatientOrganizationSelect> = z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  mrn: z.boolean().optional(),
  mobile: z.boolean().optional(),
  email: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  patient: z.union([z.boolean(),z.lazy(() => PatientArgsSchema)]).optional(),
}).strict()

export const PatientOrganizationFindFirstArgsSchema: z.ZodType<Prisma.PatientOrganizationFindFirstArgs> = z.object({
  select: PatientOrganizationSelectSchema.optional(),
  include: z.lazy(() => PatientOrganizationIncludeSchema).optional(),
  where: PatientOrganizationWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrganizationOrderByWithRelationInputSchema.array(), PatientOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: PatientOrganizationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PatientOrganizationScalarFieldEnumSchema, PatientOrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default PatientOrganizationFindFirstArgsSchema;
