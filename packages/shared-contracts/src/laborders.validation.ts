export type LabOrderStepKey =
  | 'patient'
  | 'provider'
  | 'test'
  | 'specimen'
  | 'icd'
  | 'clinical'
  | 'attachments'
  | 'billing'

export interface LabOrderIssue {
  step: LabOrderStepKey
  message: string
  path?: string[]
}

export interface LabOrderValidationSummary {
  ok: boolean
  issues: LabOrderIssue[]
  issuesByStep: Record<LabOrderStepKey, LabOrderIssue[]>
}

export interface StepValidationResult {
  ok: boolean
  issues: LabOrderIssue[]
}

export const LAB_ORDER_STEP_KEYS: LabOrderStepKey[] = [
  'patient',
  'provider',
  'test',
  'specimen',
  'icd',
  'clinical',
  'attachments',
  'billing',
]

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

export const ensureRecord = (value: unknown): Record<string, unknown> =>
  isRecord(value) ? (value as Record<string, unknown>) : {}

export const ensureArray = <T = unknown>(value: unknown): T[] =>
  Array.isArray(value) ? (value as T[]) : []

export const stringOrEmpty = (value: unknown): string => (typeof value === 'string' ? value : '')

export const hasValue = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return false
  }
  if (value instanceof Date) {
    return !Number.isNaN(value.getTime())
  }
  if (typeof value === 'string') {
    return value.trim().length > 0
  }
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }
  return true
}

const push = (issues: LabOrderIssue[], step: LabOrderStepKey, message: string, path?: string[]) => {
  issues.push({ step, message, path })
}

const pushIfEmpty = (
  value: unknown,
  issues: LabOrderIssue[],
  step: LabOrderStepKey,
  message: string,
  path?: string[],
) => {
  if (!hasValue(value) || (typeof value === 'string' && value.trim().length === 0)) {
    push(issues, step, message, path)
  }
}

const stepValidators: Record<LabOrderStepKey, (draft: Record<string, unknown>) => LabOrderIssue[]> = {
  patient: (draft) => {
    const issues: LabOrderIssue[] = []
    const patient = ensureRecord(draft.patient)
    const demographics = ensureRecord(patient.demographics)
    const contact = ensureRecord(patient.contact)
    const address = ensureRecord(contact.address)

    pushIfEmpty(demographics.firstName, issues, 'patient', 'Patient first name is required', [
      'patient',
      'demographics',
      'firstName',
    ])
    pushIfEmpty(demographics.lastName, issues, 'patient', 'Patient last name is required', [
      'patient',
      'demographics',
      'lastName',
    ])
    pushIfEmpty(demographics.mrn, issues, 'patient', 'MRN is required', [
      'patient',
      'demographics',
      'mrn',
    ])
    if (!hasValue(demographics.dateOfBirth)) {
      push(issues, 'patient', 'Date of birth is required', ['patient', 'demographics', 'dateOfBirth'])
    }
    if (stringOrEmpty(demographics.sexAtBirth).toUpperCase() === 'UNKNOWN') {
      push(issues, 'patient', 'Sex at birth must be specified', [
        'patient',
        'demographics',
        'sexAtBirth',
      ])
    }

    pushIfEmpty(address.line1, issues, 'patient', 'Patient address line 1 is required', [
      'patient',
      'contact',
      'address',
      'line1',
    ])
    pushIfEmpty(address.city, issues, 'patient', 'Patient city is required', [
      'patient',
      'contact',
      'address',
      'city',
    ])
    pushIfEmpty(address.state, issues, 'patient', 'Patient state is required', [
      'patient',
      'contact',
      'address',
      'state',
    ])
    pushIfEmpty(address.postalCode, issues, 'patient', 'Patient postal code is required', [
      'patient',
      'contact',
      'address',
      'postalCode',
    ])

    const phones = ensureArray(contact.phones).map(ensureRecord)
    if (phones.length === 0) {
      push(issues, 'patient', 'At least one patient phone number is required', [
        'patient',
        'contact',
        'phones',
      ])
    } else {
      phones.forEach((phone, index) => {
        pushIfEmpty(phone.number, issues, 'patient', 'Phone number is required', [
          'patient',
          'contact',
          'phones',
          String(index),
          'number',
        ])
      })
    }

    return issues
  },
  provider: (draft) => {
    const issues: LabOrderIssue[] = []
    const provider = ensureRecord(draft.provider)
    const facility = ensureRecord(provider.facility)
    const facilityContact = ensureRecord(facility.contact)
    const facilityAddress = ensureRecord(facilityContact.address)
    const orderingProvider = ensureRecord(provider.orderingProvider)

    pushIfEmpty(facility.name, issues, 'provider', 'Facility name is required', [
      'provider',
      'facility',
      'name',
    ])
    pushIfEmpty(
      facilityAddress.line1,
      issues,
      'provider',
      'Facility address line 1 is required',
      ['provider', 'facility', 'contact', 'address', 'line1'],
    )
    pushIfEmpty(facilityAddress.city, issues, 'provider', 'Facility city is required', [
      'provider',
      'facility',
      'contact',
      'address',
      'city',
    ])
    pushIfEmpty(facilityAddress.state, issues, 'provider', 'Facility state is required', [
      'provider',
      'facility',
      'contact',
      'address',
      'state',
    ])
    pushIfEmpty(
      facilityAddress.postalCode,
      issues,
      'provider',
      'Facility postal code is required',
      ['provider', 'facility', 'contact', 'address', 'postalCode'],
    )

    pushIfEmpty(orderingProvider.fullName, issues, 'provider', 'Ordering provider name is required', [
      'provider',
      'orderingProvider',
      'fullName',
    ])
    pushIfEmpty(orderingProvider.npi, issues, 'provider', 'Ordering provider NPI is required', [
      'provider',
      'orderingProvider',
      'npi',
    ])

    return issues
  },
  test: (draft) => {
    const issues: LabOrderIssue[] = []
    const testRequest = ensureRecord(draft.testRequest)

    const requestedTests = ensureArray(testRequest.requestedTests).map(ensureRecord)
    if (requestedTests.length === 0) {
      push(issues, 'test', 'Select at least one test', ['testRequest', 'requestedTests'])
    } else {
      requestedTests.forEach((test, index) => {
        const testId = stringOrEmpty(test.testId || test.id)
        const testName = stringOrEmpty(test.testName)
        if (!testId && !testName) {
          push(issues, 'test', 'Each test requires an identifier', [
            'testRequest',
            'requestedTests',
            String(index),
          ])
        }
      })
    }

    const indications = ensureArray(testRequest.indications)
    if (indications.length === 0) {
      push(issues, 'test', 'Select at least one indication for testing', [
        'testRequest',
        'indications',
      ])
    }

    return issues
  },
  specimen: (draft) => {
    const issues: LabOrderIssue[] = []
    const specimens = ensureArray(draft.specimens).map(ensureRecord)

    if (specimens.length === 0) {
      push(issues, 'specimen', 'Add at least one specimen', ['specimens'])
      return issues
    }

    specimens.forEach((specimen, index) => {
      const sampleType = stringOrEmpty(specimen.specimenType).toUpperCase()
      if (!sampleType) {
        push(issues, 'specimen', 'Specimen type is required', [
          'specimens',
          String(index),
          'specimenType',
        ])
      } else if (sampleType === 'OTHER') {
        pushIfEmpty(
          specimen.specimenTypeOther,
          issues,
          'specimen',
          'Describe the specimen type',
          ['specimens', String(index), 'specimenTypeOther'],
        )
      }

      const collectionMethod = stringOrEmpty(specimen.collectionMethod).toUpperCase()
      if (!collectionMethod) {
        push(issues, 'specimen', 'Collection method is required', [
          'specimens',
          String(index),
          'collectionMethod',
        ])
      } else if (collectionMethod === 'OTHER') {
        pushIfEmpty(
          specimen.collectionMethodOther,
          issues,
          'specimen',
          'Describe the collection method',
          ['specimens', String(index), 'collectionMethodOther'],
        )
      }

      pushIfEmpty(
        specimen.collectionLocation,
        issues,
        'specimen',
        'Collection location is required',
        ['specimens', String(index), 'collectionLocation'],
      )

      if (!hasValue(specimen.drawDate)) {
        push(issues, 'specimen', 'Collection date is required', [
          'specimens',
          String(index),
          'drawDate',
        ])
      }
    })

    const family = ensureRecord(draft.family)
    const familySamples = ensureArray(family.samples).map(ensureRecord)

    familySamples.forEach((sample, index) => {
      const specimen = ensureRecord(sample.specimen)
      const hasFamilyData =
        hasValue(sample.fullName) ||
        hasValue(sample.relationToPatient) ||
        hasValue(sample.kitId) ||
        hasValue(specimen.specimenType) ||
        hasValue(specimen.drawDate)

      if (!hasFamilyData) {
        return
      }

      pushIfEmpty(sample.fullName, issues, 'specimen', 'Family member name is required', [
        'family',
        'samples',
        String(index),
        'fullName',
      ])
      pushIfEmpty(
        sample.relationToPatient,
        issues,
        'specimen',
        'Relation to patient is required',
        ['family', 'samples', String(index), 'relationToPatient'],
      )

      const familySampleType = stringOrEmpty(specimen.specimenType).toUpperCase()
      if (!familySampleType) {
        push(issues, 'specimen', 'Family specimen type is required', [
          'family',
          'samples',
          String(index),
          'specimen',
          'specimenType',
        ])
      }

      if (!hasValue(specimen.drawDate)) {
        push(issues, 'specimen', 'Family collection date is required', [
          'family',
          'samples',
          String(index),
          'specimen',
          'drawDate',
        ])
      }
    })

    return issues
  },
  icd: (draft) => {
    const issues: LabOrderIssue[] = []
    const icdCodes = ensureArray(draft.icdCodes)
    if (icdCodes.length === 0) {
      push(issues, 'icd', 'Add at least one diagnosis code', ['icdCodes'])
    }
    return issues
  },
  clinical: (draft) => {
    const issues: LabOrderIssue[] = []
    const clinicalHistory = ensureRecord(draft.clinicalHistory)

    pushIfEmpty(
      clinicalHistory.clinicalDetails,
      issues,
      'clinical',
      'Clinical details are required',
      ['clinicalHistory', 'clinicalDetails'],
    )

    return issues
  },
  attachments: () => {
    const issues: LabOrderIssue[] = []
    return issues
  },
  billing: (draft) => {
    const issues: LabOrderIssue[] = []
    const billing = ensureRecord(draft.billing)
    const mode = stringOrEmpty(billing.mode).toUpperCase()

    if (mode === 'INSURANCE') {
      const primaryInsurance = ensureRecord(billing.primaryInsurance)
      if (Object.keys(primaryInsurance).length === 0) {
        push(issues, 'billing', 'Primary insurance details are required', ['billing', 'primaryInsurance'])
        return issues
      }

      pushIfEmpty(
        primaryInsurance.insuranceName,
        issues,
        'billing',
        'Insurance provider is required',
        ['billing', 'primaryInsurance', 'insuranceName'],
      )
      pushIfEmpty(primaryInsurance.insuranceId, issues, 'billing', 'Policy number is required', [
        'billing',
        'primaryInsurance',
        'insuranceId',
      ])
      pushIfEmpty(primaryInsurance.insuredName, issues, 'billing', 'Insured name is required', [
        'billing',
        'primaryInsurance',
        'insuredName',
      ])
      pushIfEmpty(
        primaryInsurance.relationToPatient,
        issues,
        'billing',
        'Relationship to patient is required',
        ['billing', 'primaryInsurance', 'relationToPatient'],
      )
    } else if (mode === 'SELF_PAY') {
      const selfPayDetails = ensureRecord(billing.selfPayDetails)
      pushIfEmpty(
        selfPayDetails.paymentMethod,
        issues,
        'billing',
        'Payment method is required for self pay',
        ['billing', 'selfPayDetails', 'paymentMethod'],
      )
    } else if (mode === 'INSTITUTION') {
      const institution = ensureRecord(billing.institution)
      if (Object.keys(institution).length === 0) {
        push(issues, 'billing', 'Institution billing details are required', ['billing', 'institution'])
        return issues
      }

      pushIfEmpty(
        institution.institutionName,
        issues,
        'billing',
        'Institution name is required',
        ['billing', 'institution', 'institutionName'],
      )
      const contact = ensureRecord(institution.contact)
      const address = ensureRecord(contact.address)
      pushIfEmpty(address.line1, issues, 'billing', 'Institution address line 1 is required', [
        'billing',
        'institution',
        'contact',
        'address',
        'line1',
      ])
      pushIfEmpty(address.city, issues, 'billing', 'Institution city is required', [
        'billing',
        'institution',
        'contact',
        'address',
        'city',
      ])
      pushIfEmpty(address.state, issues, 'billing', 'Institution state is required', [
        'billing',
        'institution',
        'contact',
        'address',
        'state',
      ])
      pushIfEmpty(address.postalCode, issues, 'billing', 'Institution postal code is required', [
        'billing',
        'institution',
        'contact',
        'address',
        'postalCode',
      ])
    }

    return issues
  },
}

export const validateLabOrder = (raw: unknown): LabOrderValidationSummary => {
  const draft = ensureRecord(raw)

  const issuesByStep = LAB_ORDER_STEP_KEYS.reduce<Record<LabOrderStepKey, LabOrderIssue[]>>(
    (acc, key) => {
      acc[key] = []
      return acc
    },
    {} as Record<LabOrderStepKey, LabOrderIssue[]>,
  )

  const issues: LabOrderIssue[] = []

  LAB_ORDER_STEP_KEYS.forEach((step) => {
    const stepIssues = stepValidators[step](draft)
    issuesByStep[step] = stepIssues
    issues.push(...stepIssues)
  })

  return {
    ok: issues.length === 0,
    issues,
    issuesByStep,
  }
}

export const validateLabOrderStep = (raw: unknown, step: LabOrderStepKey): StepValidationResult => {
  const summary = validateLabOrder(raw)
  return {
    ok: summary.issuesByStep[step]?.length === 0,
    issues: summary.issuesByStep[step] ?? [],
  }
}

export const getSubmissionIssues = (raw: unknown): string[] => {
  const summary = validateLabOrder(raw)
  if (summary.ok) {
    return []
  }
  return summary.issues.map((issue) =>
    issue.path && issue.path.length > 0
      ? `${issue.message} (${issue.path.join('.')})`
      : issue.message,
  )
}


