import * as z from 'zod/v4'

import { Uuid } from './common'

export const Address = z.object({
  id: Uuid.optional(),
  line1: z.string().nullable(),
  line2: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  postalCode: z.string().nullable(),
  country: z.string().nullable(),
  timezone: z.string().nullable(),
})
export type Address = z.infer<typeof Address>

export const AddressAutocompleteRequest = z.object({
  q: z.string().min(1),
  country: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(10).default(5),
})
export type AddressAutocompleteRequest = z.infer<typeof AddressAutocompleteRequest>

export const AddressAutocompleteCandidate = Address.extend({
  score: z.number().nullable(),
  source: z.enum(['smartystreets', 'google', 'manual']).optional(),
})
export type AddressAutocompleteCandidate = z.infer<typeof AddressAutocompleteCandidate>

export const AddressAutocompleteResponse = z.object({
  items: z.array(AddressAutocompleteCandidate),
})
export type AddressAutocompleteResponse = z.infer<typeof AddressAutocompleteResponse>

export const AddressValidationRequest = Address.omit({ id: true }).extend({
  allowPoBox: z.boolean().default(false),
})
export type AddressValidationRequest = z.infer<typeof AddressValidationRequest>

export const AddressValidationResult = z.object({
  isValid: z.boolean(),
  normalized: Address.nullable(),
  messages: z.array(z.string()).optional(),
})
export type AddressValidationResult = z.infer<typeof AddressValidationResult>

export const AddressIdParam = z.object({
  addressId: Uuid,
})
export type AddressIdParam = z.infer<typeof AddressIdParam>

