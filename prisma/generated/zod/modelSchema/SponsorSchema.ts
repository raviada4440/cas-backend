import { z } from 'zod';
import { SponsoredProgramWithRelationsSchema, SponsoredProgramPartialWithRelationsSchema } from './SponsoredProgramSchema'
import type { SponsoredProgramWithRelations, SponsoredProgramPartialWithRelations } from './SponsoredProgramSchema'

/////////////////////////////////////////
// SPONSOR SCHEMA
/////////////////////////////////////////

export const SponsorSchema = z.object({
  id: z.string(),
  sponsorName: z.string().nullable(),
  sponsorCode: z.string().nullable(),
  sponsorWebsite: z.string().nullable(),
  sponsorType: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zip: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Sponsor = z.infer<typeof SponsorSchema>

/////////////////////////////////////////
// SPONSOR PARTIAL SCHEMA
/////////////////////////////////////////

export const SponsorPartialSchema = SponsorSchema.partial()

export type SponsorPartial = z.infer<typeof SponsorPartialSchema>

/////////////////////////////////////////
// SPONSOR RELATION SCHEMA
/////////////////////////////////////////

export type SponsorRelations = {
  sponsoredPrograms: SponsoredProgramWithRelations[];
};

export type SponsorWithRelations = z.infer<typeof SponsorSchema> & SponsorRelations

export const SponsorWithRelationsSchema: z.ZodType<SponsorWithRelations> = SponsorSchema.merge(z.object({
  sponsoredPrograms: z.lazy(() => SponsoredProgramWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// SPONSOR PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type SponsorPartialRelations = {
  sponsoredPrograms?: SponsoredProgramPartialWithRelations[];
};

export type SponsorPartialWithRelations = z.infer<typeof SponsorPartialSchema> & SponsorPartialRelations

export const SponsorPartialWithRelationsSchema: z.ZodType<SponsorPartialWithRelations> = SponsorPartialSchema.merge(z.object({
  sponsoredPrograms: z.lazy(() => SponsoredProgramPartialWithRelationsSchema).array(),
})).partial()

export type SponsorWithPartialRelations = z.infer<typeof SponsorSchema> & SponsorPartialRelations

export const SponsorWithPartialRelationsSchema: z.ZodType<SponsorWithPartialRelations> = SponsorSchema.merge(z.object({
  sponsoredPrograms: z.lazy(() => SponsoredProgramPartialWithRelationsSchema).array(),
}).partial())

export default SponsorSchema;
