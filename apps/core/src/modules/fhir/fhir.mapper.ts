import {
  Address,
  Bundle,
  ContactPoint,
  HumanName,
  Identifier,
  OperationOutcome,
  Patient,
} from 'fhir/r4'

import {
  FhirPatient,
  FhirPatientDetailResponse,
  FhirPatientSearchResponse,
} from '@shared/contracts/fhir'

const MRN_CODES = new Set(['MR', 'MRN', 'MEDRECNO', 'MedicalRecordNumber'])

const ensureTrailingSlash = (value: string): string => (value.endsWith('/') ? value : `${value}/`)

const formatName = (
  name?: HumanName | null,
): {
  firstName: string | null
  lastName: string | null
  fullName: string
} => {
  if (!name) {
    return { firstName: null, lastName: null, fullName: 'Unknown Patient' }
  }

  const given = Array.isArray(name.given) ? name.given.join(' ') : name.given ?? ''
  const family = name.family ?? ''
  const firstName = given ? given.trim() : null
  const lastName = family ? family.trim() : null
  const fullName = [given, family].filter(Boolean).join(' ').trim() || 'Unknown Patient'

  return { firstName, lastName, fullName }
}

const normalizeIdentifierCodes = (identifier: Identifier): string[] => {
  const values: string[] = []
  if (identifier.type?.text) {
    values.push(identifier.type.text.toUpperCase())
  }
  if (Array.isArray(identifier.type?.coding)) {
    for (const coding of identifier.type!.coding!) {
      if (coding.code) {
        values.push(coding.code.toUpperCase())
      }
    }
  }
  return values
}

const extractIdentifierValue = (
  identifiers: Identifier[] | undefined | null,
  preferredCodes: string[],
  fallbackCodes: string[] = [],
): string | null => {
  if (!Array.isArray(identifiers)) {
    return null
  }

  const preferredSet = new Set(preferredCodes.map((code) => code.toUpperCase()))
  const fallbackSet = new Set(fallbackCodes.map((code) => code.toUpperCase()))

  const matchBySet = (identifier: Identifier, set: Set<string>) => {
    if (set.size === 0) return false
    const codes = normalizeIdentifierCodes(identifier)
    return codes.some((code) => set.has(code))
  }

  const preferredIdentifier = identifiers.find(
    (identifier) => identifier.value && matchBySet(identifier, preferredSet),
  )

  if (preferredIdentifier?.value) {
    return preferredIdentifier.value.trim() || null
  }

  const fallbackIdentifier = identifiers.find((identifier) => {
    if (!identifier.value) return false
    const codes = normalizeIdentifierCodes(identifier)
    return codes.some((code) => fallbackSet.has(code)) || codes.some((code) => MRN_CODES.has(code))
  })

  if (fallbackIdentifier?.value) {
    return fallbackIdentifier.value.trim() || null
  }

  const firstValue = identifiers.find((identifier) => identifier.value)?.value
  return firstValue ? firstValue.trim() || null : null
}

const extractContact = (
  telecom?: ContactPoint[] | null,
): { email: string | null; phone: string | null } => {
  if (!Array.isArray(telecom)) {
    return { email: null, phone: null }
  }

  let email: string | null = null
  let phone: string | null = null

  for (const point of telecom) {
    if (point.system === 'email' && point.value && !email) {
      email = point.value
    }
    if (point.system === 'phone' && point.value && !phone) {
      phone = point.value
    }
    if (email && phone) {
      break
    }
  }

  return { email, phone }
}

const formatAddress = (address?: Address | null): string | null => {
  if (!address) {
    return null
  }

  const parts = [
    Array.isArray(address.line) ? address.line.join(' ') : address.line,
    address.city,
    address.state,
    address.postalCode,
    address.country,
  ]

  const formatted = parts.filter(Boolean).join(', ')
  return formatted || null
}

export const buildFhirPatientId = (
  endpoint: string,
  resourceType: string,
  resourceId: string,
): string => {
  const normalizedEndpoint = ensureTrailingSlash(endpoint)
  const normalizedResourceId = resourceId.startsWith(`${resourceType}/`)
    ? resourceId
    : `${resourceType}/${resourceId}`
  return `${normalizedEndpoint}${normalizedResourceId}`
}

export const mapFhirPatient = (patient: Patient, options?: { endpoint?: string }) => {
  const primaryName = Array.isArray(patient.name) ? patient.name[0] : undefined
  const { firstName, lastName, fullName } = formatName(primaryName)
  const { email, phone } = extractContact(patient.telecom)
  const address = Array.isArray(patient.address) ? formatAddress(patient.address[0]) : null
  const mrn = extractIdentifierValue(patient.identifier, ['EPI'], ['MRN', 'EXTERNAL'])
  const resourceId = patient.id ?? ''
  const resourceType = patient.resourceType ?? 'Patient'

  const resolvedId =
    options?.endpoint && resourceId
      ? buildFhirPatientId(options.endpoint, resourceType, resourceId)
      : resourceId

  return FhirPatient.parse({
    id: patient.id ?? resolvedId ?? null,
    resourceId: resourceId ?? null,
    firstName,
    lastName,
    dateOfBirth: patient.birthDate ?? null,
    gender: patient.gender ?? null,
    mrn,
    email,
    phone,
    address,
    fullName,
  })
}

export const mapPatientDetailResponse = (
  patient: Patient,
  warning: string | null | undefined,
  options?: { endpoint?: string },
) =>
  FhirPatientDetailResponse.parse({
    patient: mapFhirPatient(patient, options),
    warning: warning ?? null,
  })

export const mapPatientSearchResponse = (
  bundle: Bundle,
  endpoint: string,
  warning?: string | null,
  cursor?: string | null,
) => {
  const entries = Array.isArray(bundle.entry) ? bundle.entry : []
  const items = entries
    .map((entry) => entry.resource)
    .filter((resource): resource is Patient => resource?.resourceType === 'Patient')
    .map((patient) => mapFhirPatient(patient, { endpoint }))

  const nextCursor = extractNextCursor(bundle, cursor ?? null)

  return FhirPatientSearchResponse.parse({
    items,
    nextCursor,
    warning: warning ?? null,
  })
}

export const isOperationOutcome = (input: any): input is OperationOutcome =>
  input?.resourceType === 'OperationOutcome' && Array.isArray(input.issue)

const extractNextCursor = (bundle: Bundle, fallbackUrl: string | null): string | null => {
  const link = Array.isArray(bundle.link)
    ? bundle.link.find((entry) => entry.relation === 'next')
    : undefined
  if (link?.url) return link.url
  return fallbackUrl
}
