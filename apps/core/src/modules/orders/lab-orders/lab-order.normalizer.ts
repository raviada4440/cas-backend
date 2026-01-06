import { ensureArray, ensureRecord } from './lab-order.validation'

const toTrimmedString = (value: unknown): string | null => {
  if (typeof value !== 'string') {
    return null
  }
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

const toOptionalDate = (value: unknown): Date | null => {
  if (!value) {
    return null
  }
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value
  }
  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (trimmed.length === 0) {
      return null
    }
    const parsed = new Date(trimmed)
    return Number.isNaN(parsed.getTime()) ? null : parsed
  }
  return null
}

const isUuidLike = (value: string | null): string | null => {
  if (!value) {
    return null
  }
  const trimmed = value.trim()
  if (!trimmed) {
    return null
  }
  const normalized = trimmed.startsWith('urn:uuid:') ? trimmed.slice(9) : trimmed
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return uuidPattern.test(normalized) ? normalized : null
}

const dedupe = (input: (string | null | undefined)[]): string[] => {
  const seen = new Set<string>()
  input.forEach((value) => {
    if (!value) {
      return
    }
    const trimmed = value.trim()
    if (trimmed.length === 0) {
      return
    }
    seen.add(trimmed)
  })
  return Array.from(seen)
}

export interface NormalizedAddress {
  line1: string | null
  line2: string | null
  city: string | null
  state: string | null
  postalCode: string | null
  country: string | null
}

export interface NormalizedPhone {
  type: string | null
  number: string | null
  extension: string | null
  preferred: boolean | null
}

export interface NormalizedPatient {
  id: string | null
  mrn: string | null
  email: string | null
  mobile: string | null
  firstName: string | null
  lastName: string | null
  dateOfBirth: Date | null
  sexAtBirth: string | null
  ethnicity: string | null
  address: NormalizedAddress
  phones: NormalizedPhone[]
}

export interface NormalizedFacility {
  organizationId: string | null
  parentOrganizationId: string | null
  parentOrganizationName: string | null
  name: string | null
  contact: {
    address: NormalizedAddress
    email: string | null
    phones: NormalizedPhone[]
    fax: string | null
  }
}

export interface NormalizedOrderingProvider {
  id: string | null
  fullName: string | null
  npi: string | null
  minc: string | null
  email: string | null
  phone: string | null
  fax: string | null
}

export interface NormalizedRequestedTest {
  id: string | null
  testId: string | null
  testName: string | null
  labId: string | null
  labName: string | null
}

export interface NormalizedIcdCode {
  id: string | null
  code: string | null
  shortDescription: string | null
  longDescription: string | null
}

export interface NormalizedSpecimen {
  id: string | null
  specimenType: string | null
  specimenTypeOther: string | null
  collectionMethod: string | null
  collectionMethodOther: string | null
  collectionLocation: string | null
  drawDate: Date | null
  drawTime: string | null
  specimenCount: string | null
  bodySite: string | null
}

export interface NormalizedClinicalHistory {
  clinicalDetails: string | null
  clinicalPresentation: string | null
  clinicalTesting: string | null
  riskFlags: string[]
  riskFlagNotes: string | null
  attachments: Record<string, unknown>[]
}

export interface NormalizedInsurance {
  insuranceName: string | null
  insuranceId: string | null
  planName: string | null
  groupNumber: string | null
  benefitsId: string | null
  insuredName: string | null
  relationToPatient: string | null
  insuredDob: Date | null
  insuredPhone: string | null
  insurerState: string | null
  referralAuthNumber: string | null
  copayAmount: number | null
  deductibleAmount: number | null
}

export interface NormalizedBilling {
  mode: string | null
  usePatientForBilling: boolean
  payorFullName: string | null
  payorRelationship: string | null
  primaryInsurance: NormalizedInsurance | null
  secondaryInsurance: NormalizedInsurance | null
  selfPayDetails: {
    paymentMethod: string | null
    notes: string | null
  } | null
  institution: {
    institutionName: string | null
    attentionTo: string | null
    contact: {
      address: NormalizedAddress
      email: string | null
      phones: NormalizedPhone[]
      fax: string | null
    }
  } | null
}

export interface NormalizedAttachment {
  id: string | null
  category: string | null
  fileId: string | null
  fileName: string | null
  uploadedAt: string | null
  url: string | null
  notes: string | null
}

export interface NormalizedFamilySample {
  id: string | null
  firstName: string | null
  lastName: string | null
  fullName: string | null
  relationToPatient: string | null
  dateOfBirth: Date | null
  sexAtBirth: string | null
  affectedStatus: string | null
  specimen: {
    specimenType: string | null
    specimenTypeOther: string | null
    collectionMethod: string | null
    collectionMethodOther: string | null
    collectionLocation: string | null
    drawDate: Date | null
    drawTime: string | null
  }
}

export interface NormalizedLabOrderDraft {
  snapshot: string
  orderDate: Date | null
  requestedTests: NormalizedRequestedTest[]
  resolvedTestIds: string[]
  derivedLabId: string | null
  icdCodes: NormalizedIcdCode[]
  resolvedIcdIds: string[]
  specimens: NormalizedSpecimen[]
  clinicalHistory: NormalizedClinicalHistory
  billing: NormalizedBilling
  patient: NormalizedPatient
  facility: NormalizedFacility
  orderingProvider: NormalizedOrderingProvider
  familySamples: NormalizedFamilySample[]
  attachments: NormalizedAttachment[]
}

const normalizePhones = (input: unknown): NormalizedPhone[] =>
  ensureArray(input).map((phoneRaw) => {
    const phone = ensureRecord(phoneRaw)
    return {
      type: toTrimmedString(phone.type),
      number: toTrimmedString(phone.number),
      extension: toTrimmedString(phone.extension),
      preferred:
        typeof phone.preferred === 'boolean'
          ? phone.preferred
          : typeof phone.preferred === 'string'
            ? phone.preferred.toLowerCase() === 'true'
            : null,
    }
  })

const normalizeAddress = (input: unknown): NormalizedAddress => {
  const address = ensureRecord(input)
  return {
    line1: toTrimmedString(address.line1),
    line2: toTrimmedString(address.line2),
    city: toTrimmedString(address.city),
    state: toTrimmedString(address.state),
    postalCode: toTrimmedString(address.postalCode),
    country: toTrimmedString(address.country),
  }
}

const normalizeInsurance = (input: unknown): NormalizedInsurance | null => {
  const insurance = ensureRecord(input)
  if (Object.keys(insurance).length === 0) {
    return null
  }
  const toNumberOrNull = (value: unknown): number | null => {
    if (typeof value === 'number') {
      return Number.isFinite(value) ? value : null
    }
    if (typeof value === 'string') {
      const trimmed = value.trim()
      if (!trimmed) {
        return null
      }
      const parsed = Number(trimmed)
      return Number.isFinite(parsed) ? parsed : null
    }
    return null
  }

  return {
    insuranceName: toTrimmedString(insurance.insuranceName),
    insuranceId: toTrimmedString(insurance.insuranceId),
    planName: toTrimmedString(insurance.planName),
    groupNumber: toTrimmedString(insurance.groupNumber),
    benefitsId: toTrimmedString(insurance.benefitsId),
    insuredName: toTrimmedString(insurance.insuredName),
    relationToPatient: toTrimmedString(insurance.relationToPatient),
    insuredDob: toOptionalDate(insurance.insuredDob),
    insuredPhone: toTrimmedString(insurance.insuredPhone),
    insurerState: toTrimmedString(insurance.insurerState),
    referralAuthNumber: toTrimmedString(insurance.referralAuthNumber),
    copayAmount: toNumberOrNull(insurance.copayAmount),
    deductibleAmount: toNumberOrNull(insurance.deductibleAmount),
  }
}

export const normalizeLabOrderDraft = (raw: unknown): NormalizedLabOrderDraft => {
  const draft = ensureRecord(raw)

  const patientRecord = ensureRecord(draft.patient)
  const demographics = ensureRecord(patientRecord.demographics)
  const contact = ensureRecord(patientRecord.contact)
  const patientAddress = normalizeAddress(contact.address)
  const patientPhones = normalizePhones(contact.phones)
  const primaryPhone =
    patientPhones.find((phone) => phone.number && phone.number.length > 0)?.number ?? null

  const facilityRecord = ensureRecord(ensureRecord(draft.provider).facility)
  const facilityContact = ensureRecord(facilityRecord.contact)
  const facilityContactAddress = normalizeAddress(facilityContact.address)
  const facilityPhones = normalizePhones(facilityContact.phones)

  const orderingProviderRecord = ensureRecord(ensureRecord(draft.provider).orderingProvider)

  const requestedTests = ensureArray(ensureRecord(draft.testRequest).requestedTests).map(
    (testRaw) => {
      const test = ensureRecord(testRaw)
      return {
        id: toTrimmedString(test.id),
        testId: toTrimmedString(test.testId ?? test.id),
        testName: toTrimmedString(test.testName),
        labId: toTrimmedString(test.labId),
        labName: toTrimmedString(test.labName),
      }
    },
  )
  const resolvedTestIds = dedupe(requestedTests.map((test) => test.testId))

  let derivedLabId: string | null =
    requestedTests.map((test) => test.labId).find((labId): labId is string => Boolean(labId)) ??
    null

  const icdCodes = ensureArray(draft.icdCodes).map((codeRaw) => {
    const code = ensureRecord(codeRaw)
    return {
      id: toTrimmedString(code.id),
      code: toTrimmedString(code.code),
      shortDescription: toTrimmedString(code.shortDescription),
      longDescription: toTrimmedString(code.longDescription),
    }
  })
  const resolvedIcdIds = dedupe(icdCodes.map((code) => isUuidLike(code.id)))

  const specimens = ensureArray(draft.specimens).map((specimenRaw) => {
    const specimen = ensureRecord(specimenRaw)
    return {
      id: toTrimmedString(specimen.id),
      specimenType: toTrimmedString(specimen.specimenType),
      specimenTypeOther: toTrimmedString(specimen.specimenTypeOther),
      collectionMethod: toTrimmedString(specimen.collectionMethod),
      collectionMethodOther: toTrimmedString(specimen.collectionMethodOther),
      collectionLocation: toTrimmedString(specimen.collectionLocation),
      drawDate: toOptionalDate(specimen.drawDate),
      drawTime: toTrimmedString(specimen.drawTime),
      specimenCount: toTrimmedString(specimen.specimenCount),
      bodySite: toTrimmedString(specimen.collectionLocation),
    }
  })

  const clinicalHistoryRecord = ensureRecord(draft.clinicalHistory)
  const clinicalHistory: NormalizedClinicalHistory = {
    clinicalDetails: toTrimmedString(clinicalHistoryRecord.clinicalDetails),
    clinicalPresentation: toTrimmedString(clinicalHistoryRecord.clinicalPresentation),
    clinicalTesting: toTrimmedString(clinicalHistoryRecord.clinicalTesting),
    riskFlags: dedupe(
      ensureArray(clinicalHistoryRecord.riskFlags).map((flagRaw) => toTrimmedString(flagRaw)),
    ),
    riskFlagNotes: toTrimmedString(clinicalHistoryRecord.riskFlagNotes),
    attachments: ensureArray(clinicalHistoryRecord.attachments).map((attachment) =>
      ensureRecord(attachment),
    ),
  }

  const billingRecord = ensureRecord(draft.billing)
  const applyPatientDobFallback = (
    insurance: NormalizedInsurance | null,
    fallbackDob: Date | null,
  ): NormalizedInsurance | null => {
    if (!insurance) {
      return null
    }
    const relation = (insurance.relationToPatient ?? '').toUpperCase()
    if (!insurance.insuredDob && fallbackDob && (relation === 'SELF' || relation === 'PATIENT')) {
      return { ...insurance, insuredDob: fallbackDob }
    }
    return insurance
  }

  const billing: NormalizedBilling = {
    mode: toTrimmedString(billingRecord.mode),
    usePatientForBilling: Boolean(billingRecord.usePatientForBilling),
    payorFullName: toTrimmedString(ensureRecord(billingRecord.payor).fullName),
    payorRelationship: toTrimmedString(ensureRecord(billingRecord.payor).relationship),
    primaryInsurance: applyPatientDobFallback(
      normalizeInsurance(billingRecord.primaryInsurance),
      toOptionalDate(demographics.dateOfBirth),
    ),
    secondaryInsurance: applyPatientDobFallback(
      normalizeInsurance(billingRecord.secondaryInsurance),
      toOptionalDate(demographics.dateOfBirth),
    ),
    selfPayDetails: (() => {
      const details = ensureRecord(billingRecord.selfPayDetails)
      if (Object.keys(details).length === 0) {
        return null
      }
      return {
        paymentMethod: toTrimmedString(details.paymentMethod),
        notes: toTrimmedString(details.notes),
      }
    })(),
    institution: (() => {
      const institution = ensureRecord(billingRecord.institution)
      if (Object.keys(institution).length === 0) {
        return null
      }
      return {
        institutionName: toTrimmedString(institution.institutionName),
        attentionTo: toTrimmedString(institution.attentionTo),
        contact: {
          address: normalizeAddress(ensureRecord(institution.contact).address),
          email: toTrimmedString(ensureRecord(institution.contact).email),
          phones: normalizePhones(ensureRecord(institution.contact).phones),
          fax: toTrimmedString(ensureRecord(institution.contact).fax),
        },
      }
    })(),
  }

  const attachments: NormalizedAttachment[] = ensureArray(draft.attachments).map(
    (attachmentRaw) => {
      const attachment = ensureRecord(attachmentRaw)
      return {
        id: toTrimmedString(attachment.id),
        category: toTrimmedString(attachment.category),
        fileId: toTrimmedString(attachment.fileId),
        fileName: toTrimmedString(attachment.fileName),
        uploadedAt: toTrimmedString(attachment.uploadedAt),
        url: toTrimmedString(attachment.url),
        notes: toTrimmedString(attachment.notes),
      }
    },
  )

  const familySamples: NormalizedFamilySample[] = ensureArray(
    ensureRecord(draft.family).samples,
  ).map((sampleRaw) => {
    const sample = ensureRecord(sampleRaw)
    const specimen = ensureRecord(sample.specimen)
    return {
      id: toTrimmedString(sample.id),
      firstName: toTrimmedString(sample.firstName),
      lastName: toTrimmedString(sample.lastName),
      fullName: toTrimmedString(sample.fullName),
      relationToPatient: toTrimmedString(sample.relationToPatient),
      dateOfBirth: toOptionalDate(sample.dateOfBirth),
      sexAtBirth: toTrimmedString(sample.sexAtBirth),
      affectedStatus: toTrimmedString(sample.affectedStatus),
      specimen: {
        specimenType: toTrimmedString(specimen.specimenType),
        specimenTypeOther: toTrimmedString(specimen.specimenTypeOther),
        collectionMethod: toTrimmedString(specimen.collectionMethod),
        collectionMethodOther: toTrimmedString(specimen.collectionMethodOther),
        collectionLocation: toTrimmedString(specimen.collectionLocation),
        drawDate: toOptionalDate(specimen.drawDate),
        drawTime: toTrimmedString(specimen.drawTime),
      },
    }
  })

  if (!derivedLabId) {
    derivedLabId =
      requestedTests
        .map((test) => test.labId)
        .find((candidate): candidate is string => Boolean(candidate)) ?? null
  }

  const snapshot = JSON.stringify(draft)
  const orderDate = toOptionalDate(draft.orderDate)

  const patient: NormalizedPatient = {
    id: toTrimmedString(patientRecord.id),
    mrn: toTrimmedString(demographics.mrn),
    email: toTrimmedString(contact.email),
    mobile: primaryPhone,
    firstName: toTrimmedString(demographics.firstName),
    lastName: toTrimmedString(demographics.lastName),
    dateOfBirth: toOptionalDate(demographics.dateOfBirth),
    sexAtBirth: toTrimmedString(demographics.sexAtBirth),
    ethnicity: toTrimmedString(demographics.ethnicity),
    address: patientAddress,
    phones: patientPhones,
  }

  const facility: NormalizedFacility = {
    organizationId: toTrimmedString(facilityRecord.organizationId),
    parentOrganizationId: toTrimmedString(facilityRecord.parentOrganizationId),
    parentOrganizationName: toTrimmedString(facilityRecord.parentOrganizationName),
    name: toTrimmedString(facilityRecord.name),
    contact: {
      address: facilityContactAddress,
      email: toTrimmedString(facilityContact.email),
      phones: facilityPhones,
      fax: toTrimmedString(facilityContact.fax),
    },
  }

  const orderingProvider: NormalizedOrderingProvider = {
    id: toTrimmedString(orderingProviderRecord.id),
    fullName: toTrimmedString(orderingProviderRecord.fullName),
    npi: toTrimmedString(orderingProviderRecord.npi),
    minc: toTrimmedString(orderingProviderRecord.minc),
    email: toTrimmedString(orderingProviderRecord.email),
    phone: toTrimmedString(orderingProviderRecord.phone),
    fax: toTrimmedString(orderingProviderRecord.fax),
  }

  return {
    snapshot,
    orderDate,
    requestedTests,
    resolvedTestIds,
    derivedLabId,
    icdCodes,
    resolvedIcdIds,
    specimens,
    clinicalHistory,
    billing,
    patient,
    facility,
    orderingProvider,
    familySamples,
    attachments,
  }
}
