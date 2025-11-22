import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { TestCatalogVersionConsentWithRelationsSchema, TestCatalogVersionConsentPartialWithRelationsSchema } from './TestCatalogVersionConsentSchema'
import type { TestCatalogVersionConsentWithRelations, TestCatalogVersionConsentPartialWithRelations } from './TestCatalogVersionConsentSchema'
import { ConsentTemplateWithRelationsSchema, ConsentTemplatePartialWithRelationsSchema } from './ConsentTemplateSchema'
import type { ConsentTemplateWithRelations, ConsentTemplatePartialWithRelations } from './ConsentTemplateSchema'

/////////////////////////////////////////
// LAB ORDER CONSENT SCHEMA
/////////////////////////////////////////

export const LabOrderConsentSchema = z.object({
  id: z.string(),
  labOrderId: z.string(),
  versionConsentId: z.string().nullable(),
  consentTemplateId: z.string(),
  consentTitle: z.string(),
  consentContent: z.string(),
  isAccepted: z.boolean(),
  acceptedAt: z.date().nullable(),
  declinedAt: z.date().nullable(),
  patientSignature: z.string().nullable(),
  witnessSignature: z.string().nullable(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  consentVersion: z.number(),
  collectedBy: z.string().nullable(),
  collectedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderConsent = z.infer<typeof LabOrderConsentSchema>

/////////////////////////////////////////
// LAB ORDER CONSENT PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderConsentPartialSchema = LabOrderConsentSchema.partial()

export type LabOrderConsentPartial = z.infer<typeof LabOrderConsentPartialSchema>

/////////////////////////////////////////
// LAB ORDER CONSENT RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderConsentRelations = {
  labOrder: LabOrderWithRelations;
  consent?: TestCatalogVersionConsentWithRelations | null;
  consentTemplate: ConsentTemplateWithRelations;
};

export type LabOrderConsentWithRelations = z.infer<typeof LabOrderConsentSchema> & LabOrderConsentRelations

export const LabOrderConsentWithRelationsSchema: z.ZodType<LabOrderConsentWithRelations> = LabOrderConsentSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema),
  consent: z.lazy(() => TestCatalogVersionConsentWithRelationsSchema).nullable(),
  consentTemplate: z.lazy(() => ConsentTemplateWithRelationsSchema),
}))

/////////////////////////////////////////
// LAB ORDER CONSENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderConsentPartialRelations = {
  labOrder?: LabOrderPartialWithRelations;
  consent?: TestCatalogVersionConsentPartialWithRelations | null;
  consentTemplate?: ConsentTemplatePartialWithRelations;
};

export type LabOrderConsentPartialWithRelations = z.infer<typeof LabOrderConsentPartialSchema> & LabOrderConsentPartialRelations

export const LabOrderConsentPartialWithRelationsSchema: z.ZodType<LabOrderConsentPartialWithRelations> = LabOrderConsentPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema),
  consent: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).nullable(),
  consentTemplate: z.lazy(() => ConsentTemplatePartialWithRelationsSchema),
})).partial()

export type LabOrderConsentWithPartialRelations = z.infer<typeof LabOrderConsentSchema> & LabOrderConsentPartialRelations

export const LabOrderConsentWithPartialRelationsSchema: z.ZodType<LabOrderConsentWithPartialRelations> = LabOrderConsentSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema),
  consent: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).nullable(),
  consentTemplate: z.lazy(() => ConsentTemplatePartialWithRelationsSchema),
}).partial())

export default LabOrderConsentSchema;
