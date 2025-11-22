import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

const locationBiasSchema = z.object({
  latitude: z.number().refine((value) => Math.abs(value) <= 90, {
    message: 'Latitude must be between -90 and 90',
  }),
  longitude: z.number().refine((value) => Math.abs(value) <= 180, {
    message: 'Longitude must be between -180 and 180',
  }),
  radius: z.number().positive().max(50000, 'Radius cannot exceed 50km'),
})

const addressValidationInputSchema = z.object({
  street: z.string().min(3, 'Street address is required'),
  secondary: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip5: z
    .string()
    .regex(/^[0-9]{5}$/u, 'ZIP code must be 5 digits')
    .optional()
    .nullable(),
})

const addressAutocompleteRequestSchema = z.object({
  input: z.string().min(1, 'Search text is required'),
  sessionToken: z.string().optional(),
  languageCode: z.string().optional(),
  regionCode: z.string().optional(),
  locationBias: locationBiasSchema.optional(),
})

const addressAutocompleteSuggestionSchema = z.object({
  placeId: z.string(),
  primaryText: z.string(),
  secondaryText: z.string().nullable(),
  fullText: z.string(),
  distanceMeters: z.number().nullable(),
})

const addressAutocompleteResponseSchema = z.object({
  suggestions: z.array(addressAutocompleteSuggestionSchema),
})

const addressPlaceDetailsRequestSchema = z.object({
  placeId: z.string().min(1, 'placeId is required'),
  sessionToken: z.string().optional(),
  languageCode: z.string().optional(),
})

const addressResolvedSchema = z.object({
  placeId: z.string().nullable(),
  street: z.string(),
  secondary: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string().nullable(),
  postalCodeExtension: z.string().nullable(),
  country: z.string(),
  formattedAddress: z.string(),
})

const addressPlaceDetailsResponseSchema = z.object({
  address: addressResolvedSchema,
})

const addressCandidateSchema = z.object({
  street: z.string(),
  secondary: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zip5: z.string().nullable(),
  zip4: z.string().nullable(),
  dpvConfirmation: z.string().nullable(),
  dpvFootnotes: z.array(z.string()),
  footnotes: z.array(z.string()),
  carrierRoute: z.string().nullable(),
  formatted: z.string(),
  normalized: z.string(),
})

const addressValidationResponseSchema = z.object({
  candidates: z.array(addressCandidateSchema),
  message: z.string().nullable(),
})

export class AddressAutocompleteDto extends createZodDto(addressAutocompleteRequestSchema) {}
export class AddressPlaceDetailsDto extends createZodDto(addressPlaceDetailsRequestSchema) {}
export class AddressValidationDto extends createZodDto(addressValidationInputSchema) {}

export type AddressAutocompleteResult = z.infer<typeof addressAutocompleteResponseSchema>
export type AddressPlaceDetailsResult = z.infer<typeof addressPlaceDetailsResponseSchema>
export type AddressValidationResult = z.infer<typeof addressValidationResponseSchema>
