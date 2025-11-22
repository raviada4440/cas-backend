import { z } from 'zod';
import { SponsoredTestWithRelationsSchema, SponsoredTestPartialWithRelationsSchema } from './SponsoredTestSchema'
import type { SponsoredTestWithRelations, SponsoredTestPartialWithRelations } from './SponsoredTestSchema'
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'

/////////////////////////////////////////
// LAB ORDER SPONSORED TEST CONSENT SCHEMA
/////////////////////////////////////////

export const LabOrderSponsoredTestConsentSchema = z.object({
  id: z.string(),
  labOrderId: z.string().nullable(),
  sponsoredCasandraTestId: z.string().nullable(),
  providerName: z.string().nullable(),
  providerNpi: z.string().nullable(),
  consentAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderSponsoredTestConsent = z.infer<typeof LabOrderSponsoredTestConsentSchema>

/////////////////////////////////////////
// LAB ORDER SPONSORED TEST CONSENT PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderSponsoredTestConsentPartialSchema = LabOrderSponsoredTestConsentSchema.partial()

export type LabOrderSponsoredTestConsentPartial = z.infer<typeof LabOrderSponsoredTestConsentPartialSchema>

/////////////////////////////////////////
// LAB ORDER SPONSORED TEST CONSENT RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderSponsoredTestConsentRelations = {
  sponsoredTest?: SponsoredTestWithRelations | null;
  labOrder?: LabOrderWithRelations | null;
};

export type LabOrderSponsoredTestConsentWithRelations = z.infer<typeof LabOrderSponsoredTestConsentSchema> & LabOrderSponsoredTestConsentRelations

export const LabOrderSponsoredTestConsentWithRelationsSchema: z.ZodType<LabOrderSponsoredTestConsentWithRelations> = LabOrderSponsoredTestConsentSchema.merge(z.object({
  sponsoredTest: z.lazy(() => SponsoredTestWithRelationsSchema).nullable(),
  labOrder: z.lazy(() => LabOrderWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER SPONSORED TEST CONSENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderSponsoredTestConsentPartialRelations = {
  sponsoredTest?: SponsoredTestPartialWithRelations | null;
  labOrder?: LabOrderPartialWithRelations | null;
};

export type LabOrderSponsoredTestConsentPartialWithRelations = z.infer<typeof LabOrderSponsoredTestConsentPartialSchema> & LabOrderSponsoredTestConsentPartialRelations

export const LabOrderSponsoredTestConsentPartialWithRelationsSchema: z.ZodType<LabOrderSponsoredTestConsentPartialWithRelations> = LabOrderSponsoredTestConsentPartialSchema.merge(z.object({
  sponsoredTest: z.lazy(() => SponsoredTestPartialWithRelationsSchema).nullable(),
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderSponsoredTestConsentWithPartialRelations = z.infer<typeof LabOrderSponsoredTestConsentSchema> & LabOrderSponsoredTestConsentPartialRelations

export const LabOrderSponsoredTestConsentWithPartialRelationsSchema: z.ZodType<LabOrderSponsoredTestConsentWithPartialRelations> = LabOrderSponsoredTestConsentSchema.merge(z.object({
  sponsoredTest: z.lazy(() => SponsoredTestPartialWithRelationsSchema).nullable(),
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderSponsoredTestConsentSchema;
