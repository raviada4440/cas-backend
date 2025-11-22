import { z } from 'zod';
import { SponsorWithRelationsSchema, SponsorPartialWithRelationsSchema } from './SponsorSchema'
import type { SponsorWithRelations, SponsorPartialWithRelations } from './SponsorSchema'
import { SponsoredTestWithRelationsSchema, SponsoredTestPartialWithRelationsSchema } from './SponsoredTestSchema'
import type { SponsoredTestWithRelations, SponsoredTestPartialWithRelations } from './SponsoredTestSchema'

/////////////////////////////////////////
// SPONSORED PROGRAM SCHEMA
/////////////////////////////////////////

export const SponsoredProgramSchema = z.object({
  id: z.string(),
  sponsorId: z.string().nullable(),
  therapeuticArea: z.string().nullable(),
  programName: z.string().nullable(),
  programUrl: z.string().nullable(),
  programLabUrl: z.string().nullable(),
  sponsoredTestingUrl: z.string().nullable(),
  programEligibility: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type SponsoredProgram = z.infer<typeof SponsoredProgramSchema>

/////////////////////////////////////////
// SPONSORED PROGRAM PARTIAL SCHEMA
/////////////////////////////////////////

export const SponsoredProgramPartialSchema = SponsoredProgramSchema.partial()

export type SponsoredProgramPartial = z.infer<typeof SponsoredProgramPartialSchema>

/////////////////////////////////////////
// SPONSORED PROGRAM RELATION SCHEMA
/////////////////////////////////////////

export type SponsoredProgramRelations = {
  sponsor?: SponsorWithRelations | null;
  sponsoredTests: SponsoredTestWithRelations[];
};

export type SponsoredProgramWithRelations = z.infer<typeof SponsoredProgramSchema> & SponsoredProgramRelations

export const SponsoredProgramWithRelationsSchema: z.ZodType<SponsoredProgramWithRelations> = SponsoredProgramSchema.merge(z.object({
  sponsor: z.lazy(() => SponsorWithRelationsSchema).nullable(),
  sponsoredTests: z.lazy(() => SponsoredTestWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// SPONSORED PROGRAM PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type SponsoredProgramPartialRelations = {
  sponsor?: SponsorPartialWithRelations | null;
  sponsoredTests?: SponsoredTestPartialWithRelations[];
};

export type SponsoredProgramPartialWithRelations = z.infer<typeof SponsoredProgramPartialSchema> & SponsoredProgramPartialRelations

export const SponsoredProgramPartialWithRelationsSchema: z.ZodType<SponsoredProgramPartialWithRelations> = SponsoredProgramPartialSchema.merge(z.object({
  sponsor: z.lazy(() => SponsorPartialWithRelationsSchema).nullable(),
  sponsoredTests: z.lazy(() => SponsoredTestPartialWithRelationsSchema).array(),
})).partial()

export type SponsoredProgramWithPartialRelations = z.infer<typeof SponsoredProgramSchema> & SponsoredProgramPartialRelations

export const SponsoredProgramWithPartialRelationsSchema: z.ZodType<SponsoredProgramWithPartialRelations> = SponsoredProgramSchema.merge(z.object({
  sponsor: z.lazy(() => SponsorPartialWithRelationsSchema).nullable(),
  sponsoredTests: z.lazy(() => SponsoredTestPartialWithRelationsSchema).array(),
}).partial())

export default SponsoredProgramSchema;
