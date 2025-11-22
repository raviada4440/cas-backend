import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderBillingIncludeSchema } from '../inputTypeSchemas/LabOrderBillingIncludeSchema'
import { LabOrderBillingWhereInputSchema } from '../inputTypeSchemas/LabOrderBillingWhereInputSchema'
import { LabOrderBillingOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderBillingOrderByWithRelationInputSchema'
import { LabOrderBillingWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderBillingWhereUniqueInputSchema'
import { LabOrderBillingScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderBillingScalarFieldEnumSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderBillingSelectSchema: z.ZodType<Prisma.LabOrderBillingSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  billToId: z.boolean().optional(),
  healthPlanId: z.boolean().optional(),
  patientStatus: z.boolean().optional(),
  sponsoredTestCouponCode: z.boolean().optional(),
  billingType: z.boolean().optional(),
  insuranceProvider: z.boolean().optional(),
  policyNumber: z.boolean().optional(),
  planName: z.boolean().optional(),
  groupNumber: z.boolean().optional(),
  benefitsId: z.boolean().optional(),
  insuredName: z.boolean().optional(),
  relationToPatient: z.boolean().optional(),
  insuredDob: z.boolean().optional(),
  insuredPhone: z.boolean().optional(),
  insurerState: z.boolean().optional(),
  referralAuthNumber: z.boolean().optional(),
  copayAmount: z.boolean().optional(),
  deductibleAmount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict()

export const LabOrderBillingFindFirstArgsSchema: z.ZodType<Prisma.LabOrderBillingFindFirstArgs> = z.object({
  select: LabOrderBillingSelectSchema.optional(),
  include: z.lazy(() => LabOrderBillingIncludeSchema).optional(),
  where: LabOrderBillingWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderBillingOrderByWithRelationInputSchema.array(), LabOrderBillingOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderBillingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabOrderBillingScalarFieldEnumSchema, LabOrderBillingScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LabOrderBillingFindFirstArgsSchema;
