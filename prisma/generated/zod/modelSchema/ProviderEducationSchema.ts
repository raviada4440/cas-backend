import { z } from 'zod';
import { ProviderWithRelationsSchema, ProviderPartialWithRelationsSchema } from './ProviderSchema'
import type { ProviderWithRelations, ProviderPartialWithRelations } from './ProviderSchema'

/////////////////////////////////////////
// PROVIDER EDUCATION SCHEMA
/////////////////////////////////////////

export const ProviderEducationSchema = z.object({
  id: z.string(),
  providerId: z.string(),
  providerNpi: z.string().nullable(),
  name: z.string().nullable(),
  educationType: z.string().nullable(),
  schoolName: z.string().nullable(),
  areaOfEducation: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type ProviderEducation = z.infer<typeof ProviderEducationSchema>

/////////////////////////////////////////
// PROVIDER EDUCATION PARTIAL SCHEMA
/////////////////////////////////////////

export const ProviderEducationPartialSchema = ProviderEducationSchema.partial()

export type ProviderEducationPartial = z.infer<typeof ProviderEducationPartialSchema>

/////////////////////////////////////////
// PROVIDER EDUCATION RELATION SCHEMA
/////////////////////////////////////////

export type ProviderEducationRelations = {
  provider: ProviderWithRelations;
};

export type ProviderEducationWithRelations = z.infer<typeof ProviderEducationSchema> & ProviderEducationRelations

export const ProviderEducationWithRelationsSchema: z.ZodType<ProviderEducationWithRelations> = ProviderEducationSchema.merge(z.object({
  provider: z.lazy(() => ProviderWithRelationsSchema),
}))

/////////////////////////////////////////
// PROVIDER EDUCATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ProviderEducationPartialRelations = {
  provider?: ProviderPartialWithRelations;
};

export type ProviderEducationPartialWithRelations = z.infer<typeof ProviderEducationPartialSchema> & ProviderEducationPartialRelations

export const ProviderEducationPartialWithRelationsSchema: z.ZodType<ProviderEducationPartialWithRelations> = ProviderEducationPartialSchema.merge(z.object({
  provider: z.lazy(() => ProviderPartialWithRelationsSchema),
})).partial()

export type ProviderEducationWithPartialRelations = z.infer<typeof ProviderEducationSchema> & ProviderEducationPartialRelations

export const ProviderEducationWithPartialRelationsSchema: z.ZodType<ProviderEducationWithPartialRelations> = ProviderEducationSchema.merge(z.object({
  provider: z.lazy(() => ProviderPartialWithRelationsSchema),
}).partial())

export default ProviderEducationSchema;
