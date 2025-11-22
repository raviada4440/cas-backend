import { z } from 'zod';
import { LabOrderSponsoredTestConsentWithRelationsSchema, LabOrderSponsoredTestConsentPartialWithRelationsSchema } from './LabOrderSponsoredTestConsentSchema'
import type { LabOrderSponsoredTestConsentWithRelations, LabOrderSponsoredTestConsentPartialWithRelations } from './LabOrderSponsoredTestConsentSchema'
import { LabWithRelationsSchema, LabPartialWithRelationsSchema } from './LabSchema'
import type { LabWithRelations, LabPartialWithRelations } from './LabSchema'
import { SponsoredProgramWithRelationsSchema, SponsoredProgramPartialWithRelationsSchema } from './SponsoredProgramSchema'
import type { SponsoredProgramWithRelations, SponsoredProgramPartialWithRelations } from './SponsoredProgramSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'

/////////////////////////////////////////
// SPONSORED TEST SCHEMA
/////////////////////////////////////////

export const SponsoredTestSchema = z.object({
  id: z.string(),
  testId: z.string(),
  labTestId: z.string().nullable(),
  sponsoredProgramId: z.string().nullable(),
  labId: z.string().nullable(),
  casandraTestId: z.string(),
  category: z.string(),
  subCategory: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type SponsoredTest = z.infer<typeof SponsoredTestSchema>

/////////////////////////////////////////
// SPONSORED TEST PARTIAL SCHEMA
/////////////////////////////////////////

export const SponsoredTestPartialSchema = SponsoredTestSchema.partial()

export type SponsoredTestPartial = z.infer<typeof SponsoredTestPartialSchema>

/////////////////////////////////////////
// SPONSORED TEST RELATION SCHEMA
/////////////////////////////////////////

export type SponsoredTestRelations = {
  labOrderSponsoredTestConsents: LabOrderSponsoredTestConsentWithRelations[];
  lab?: LabWithRelations | null;
  sponsoredProgram?: SponsoredProgramWithRelations | null;
  testCatalog: TestCatalogWithRelations;
};

export type SponsoredTestWithRelations = z.infer<typeof SponsoredTestSchema> & SponsoredTestRelations

export const SponsoredTestWithRelationsSchema: z.ZodType<SponsoredTestWithRelations> = SponsoredTestSchema.merge(z.object({
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentWithRelationsSchema).array(),
  lab: z.lazy(() => LabWithRelationsSchema).nullable(),
  sponsoredProgram: z.lazy(() => SponsoredProgramWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogWithRelationsSchema),
}))

/////////////////////////////////////////
// SPONSORED TEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type SponsoredTestPartialRelations = {
  labOrderSponsoredTestConsents?: LabOrderSponsoredTestConsentPartialWithRelations[];
  lab?: LabPartialWithRelations | null;
  sponsoredProgram?: SponsoredProgramPartialWithRelations | null;
  testCatalog?: TestCatalogPartialWithRelations;
};

export type SponsoredTestPartialWithRelations = z.infer<typeof SponsoredTestPartialSchema> & SponsoredTestPartialRelations

export const SponsoredTestPartialWithRelationsSchema: z.ZodType<SponsoredTestPartialWithRelations> = SponsoredTestPartialSchema.merge(z.object({
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentPartialWithRelationsSchema).array(),
  lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  sponsoredProgram: z.lazy(() => SponsoredProgramPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
})).partial()

export type SponsoredTestWithPartialRelations = z.infer<typeof SponsoredTestSchema> & SponsoredTestPartialRelations

export const SponsoredTestWithPartialRelationsSchema: z.ZodType<SponsoredTestWithPartialRelations> = SponsoredTestSchema.merge(z.object({
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentPartialWithRelationsSchema).array(),
  lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  sponsoredProgram: z.lazy(() => SponsoredProgramPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
}).partial())

export default SponsoredTestSchema;
