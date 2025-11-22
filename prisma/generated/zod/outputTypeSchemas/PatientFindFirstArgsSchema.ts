import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientIncludeSchema } from '../inputTypeSchemas/PatientIncludeSchema'
import { PatientWhereInputSchema } from '../inputTypeSchemas/PatientWhereInputSchema'
import { PatientOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientOrderByWithRelationInputSchema'
import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'
import { PatientScalarFieldEnumSchema } from '../inputTypeSchemas/PatientScalarFieldEnumSchema'
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { PatientOrganizationFindManyArgsSchema } from "../outputTypeSchemas/PatientOrganizationFindManyArgsSchema"
import { PatientCountOutputTypeArgsSchema } from "../outputTypeSchemas/PatientCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PatientSelectSchema: z.ZodType<Prisma.PatientSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  gender: z.boolean().optional(),
  email: z.boolean().optional(),
  mobile: z.boolean().optional(),
  addressLine1: z.boolean().optional(),
  addressLine2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  patientOrganizations: z.union([z.boolean(),z.lazy(() => PatientOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PatientFindFirstArgsSchema: z.ZodType<Prisma.PatientFindFirstArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: z.lazy(() => PatientIncludeSchema).optional(),
  where: PatientWhereInputSchema.optional(), 
  orderBy: z.union([ PatientOrderByWithRelationInputSchema.array(), PatientOrderByWithRelationInputSchema ]).optional(),
  cursor: PatientWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PatientScalarFieldEnumSchema, PatientScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default PatientFindFirstArgsSchema;
