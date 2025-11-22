import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'

/////////////////////////////////////////
// LAB ORDER BILLING SCHEMA
/////////////////////////////////////////

export const LabOrderBillingSchema = z.object({
  id: z.string(),
  labOrderId: z.string().nullable(),
  billToId: z.string().nullable(),
  healthPlanId: z.string().nullable(),
  patientStatus: z.string().nullable(),
  sponsoredTestCouponCode: z.string().nullable(),
  billingType: z.string().nullable(),
  insuranceProvider: z.string().nullable(),
  policyNumber: z.string().nullable(),
  planName: z.string().nullable(),
  groupNumber: z.string().nullable(),
  benefitsId: z.string().nullable(),
  insuredName: z.string().nullable(),
  relationToPatient: z.string().nullable(),
  insuredDob: z.date().nullable(),
  insuredPhone: z.string().nullable(),
  insurerState: z.string().nullable(),
  referralAuthNumber: z.string().nullable(),
  copayAmount: z.instanceof(Prisma.Decimal, { message: "Field 'copayAmount' must be a Decimal. Location: ['Models', 'LabOrderBilling']"}).nullable(),
  deductibleAmount: z.instanceof(Prisma.Decimal, { message: "Field 'deductibleAmount' must be a Decimal. Location: ['Models', 'LabOrderBilling']"}).nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderBilling = z.infer<typeof LabOrderBillingSchema>

/////////////////////////////////////////
// LAB ORDER BILLING PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderBillingPartialSchema = LabOrderBillingSchema.partial()

export type LabOrderBillingPartial = z.infer<typeof LabOrderBillingPartialSchema>

/////////////////////////////////////////
// LAB ORDER BILLING RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderBillingRelations = {
  labOrder?: LabOrderWithRelations | null;
};

export type LabOrderBillingWithRelations = z.infer<typeof LabOrderBillingSchema> & LabOrderBillingRelations

export const LabOrderBillingWithRelationsSchema: z.ZodType<LabOrderBillingWithRelations> = LabOrderBillingSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER BILLING PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderBillingPartialRelations = {
  labOrder?: LabOrderPartialWithRelations | null;
};

export type LabOrderBillingPartialWithRelations = z.infer<typeof LabOrderBillingPartialSchema> & LabOrderBillingPartialRelations

export const LabOrderBillingPartialWithRelationsSchema: z.ZodType<LabOrderBillingPartialWithRelations> = LabOrderBillingPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderBillingWithPartialRelations = z.infer<typeof LabOrderBillingSchema> & LabOrderBillingPartialRelations

export const LabOrderBillingWithPartialRelationsSchema: z.ZodType<LabOrderBillingWithPartialRelations> = LabOrderBillingSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderBillingSchema;
