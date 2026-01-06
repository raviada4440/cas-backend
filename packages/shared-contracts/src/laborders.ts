import { z } from 'zod/v4'

import { validateLabOrder } from './laborders.validation'

import { FamilyStructureType } from './catalog'
import { LabOrderFormSnapshot } from './order-forms'

export type SexAtBirth = 'MALE' | 'FEMALE' | 'UNKNOWN'

export type BillingMode = 'SELF_PAY' | 'INSTITUTION' | 'INSURANCE'

export type AttachmentCategory =
  | 'INSURANCE_CARD_FRONT'
  | 'INSURANCE_CARD_BACK'
  | 'MEDICAL_RECORD'
  | 'PRIOR_AUTHORIZATION'
  | 'PAYER_SPECIFIC_FORM'
  | 'PATHOLOGY_REPORT'
  | 'PEDIGREE'
  | 'OTHER'

export type SampleSource =
  | 'BLOOD'
  | 'BUCCAL'
  | 'SALIVA'
  | 'URINE'
  | 'STOOL'
  | 'TISSUE'
  | 'OTHER'
  | ''

export type CollectionMethod = 'LAB' | 'KIT' | 'PSC' | 'MOBILE' | 'OTHER'

export interface LabOrderAddress {
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export type PhoneType = 'MOBILE' | 'HOME' | 'WORK' | 'FAX'

export interface PhoneNumber {
  type: PhoneType
  number: string
  extension?: string
  preferred?: boolean
}

export interface ContactInfo {
  address: LabOrderAddress
  email?: string
  phones: PhoneNumber[]
  fax?: string
}

export interface Signature {
  fullName: string
  relationship?: string
  method?: 'DRAWN' | 'TYPED' | 'UPLOADED'
  assetId?: string
  attestation:
    | 'BILLING_CONSENT'
    | 'PROVIDER_MEDICAL_NECESSITY'
    | 'INSURED_CONSENT'
    | 'FAMILY_MEMBER_CONSENT'
  date: Date | null
}

export interface PatientDemographics {
  firstName: string
  lastName: string
  dateOfBirth: Date | null
  sexAtBirth: SexAtBirth
  mrn: string
  ethnicity: string
}

export interface PatientContact {
  address: LabOrderAddress
  email: string
  phones: PhoneNumber[]
}

export interface PatientSpecimenProfile {
  drawDate: Date | null
  collectionTime?: string
  collectionMethod: CollectionMethod
  collectionMethodOther?: string
  collectionLocation: string
  specialInstructions: string
  fastingRequired: boolean
  fastingHours?: string
  sampleType: SampleSource
  sampleTypeOther?: string
  extractedDna: boolean
  dnaSource?: string
  logisticsNotes: string
}

export interface PatientConsentState {
  researchOptOut: boolean
  sampleRetention: 'UNDECIDED' | 'OPT_IN' | 'OPT_OUT'
  acmgSecondaryFindings: 'UNDECIDED' | 'OPT_IN' | 'OPT_OUT'
  patientSignature: Signature | null
}

export interface PatientSection {
  recordId: string
  ehrSource?: string
  demographics: PatientDemographics
  contact: PatientContact
  specimen: PatientSpecimenProfile
  consent: PatientConsentState
}

export interface PayorDetails {
  fullName: string
  relationship: string
  contact: ContactInfo
  signature: Signature | null
}

export interface InstitutionBillingDetails {
  institutionName: string
  attentionTo: string
  contact: ContactInfo
}

export interface InsurancePolicy {
  insuranceId: string
  insuranceName: string
  planName: string
  groupNumber: string
  benefitsId?: string
  insuredName: string
  relationToPatient: string
  insuredDob: Date | null
  insuredPhone: string
  insurerState: string
  referralAuthNumber?: string
  copayAmount?: number | null
  deductibleAmount?: number | null
}

export interface AttachmentReference {
  id: string
  category: AttachmentCategory
  fileId: string
  fileName: string
  uploadedAt: string
  url?: string
  notes?: string
}

export interface SelfPayDetails {
  paymentMethod: string
  notes?: string
}

export interface BillingSection {
  mode: BillingMode
  usePatientForBilling: boolean
  payor: PayorDetails | null
  institution: InstitutionBillingDetails | null
  primaryInsurance: InsurancePolicy | null
  secondaryInsurance: InsurancePolicy | null
  attachments: AttachmentReference[]
  selfPayDetails: SelfPayDetails | null
  billingNotes: string
}

export interface RequestedTest {
  id: string
  testId?: string
  testName: string
  labId?: string
  labName?: string
  loinc?: string
  methodology?: string
  turnaroundTime?: string
  description?: string
  testCategory?: string
  testSubCategory?: string
  configuration?: GenomicTestConfiguration | null
}

export type TestIndication =
  | 'ALL_IN_ONE_EXTENDED'
  | 'MCC'
  | 'PRENATAL_DIAGNOSTIC'
  | 'PRESYMPTOMATIC'
  | 'FAMILY_HISTORY'
  | 'FAMILY_VARIANT'
  | 'OTHER'

export interface IndicationEntry {
  value: TestIndication
  otherText?: string
}

export type GenomicCohort = 'PROBAND' | 'DUO' | 'TRIO' | 'QUAD'

export type GenomicComparator =
  | 'MATERNAL_PARENT'
  | 'MATERNAL_HALF_SIBLING'
  | 'MATERNAL_GRANDPARENT'
  | 'MATERNAL_AUNT_UNCLE'
  | 'MATERNAL_FIRST_COUSIN'
  | 'PATERNAL_PARENT'
  | 'PATERNAL_HALF_SIBLING'
  | 'PATERNAL_GRANDPARENT'
  | 'PATERNAL_AUNT_UNCLE'
  | 'PATERNAL_FIRST_COUSIN'

export interface GenomicTestConfiguration {
  cohort: GenomicCohort
  comparators: GenomicComparator[]
  reflexes: Array<'PLASMA' | 'URINE'>
  rapid: boolean
}

export interface OrderOptions {
  rush: boolean
  excludeVUS: boolean
  holdSample: boolean
}

export interface TestRequestSection {
  requestedTests: RequestedTest[]
  indications: IndicationEntry[]
  clinicalDiagnosis: string
  testSpecifics: string
  reflexOptions: string[]
  orderOptions: OrderOptions
  additionalGenes: string[]
}

export interface IcdCodeEntry {
  id: string
  code: string
  shortDescription?: string
  longDescription?: string
}

export interface SpecimenEntry {
  id: string
  specimenType: SampleSource
  specimenTypeOther?: string
  collectionMethod: CollectionMethod
  collectionMethodOther?: string
  collectionLocation: string
  drawDate: Date | null
  drawTime?: string
  fastingRequired: boolean
  fastingHours?: string
  specialInstructions: string
  collectionNotes: string
}

export interface FamilySample {
  id: string
  firstName?: string
  lastName?: string
  kitId?: string
  comparator?: GenomicComparator
  fullName: string
  relationToPatient: string
  dateOfBirth: Date | null
  sexAtBirth: SexAtBirth
  affectedStatus: 'AFFECTED' | 'UNAFFECTED' | 'UNKNOWN'
  specimen: SpecimenEntry
  signature: Signature | null
}

export interface FamilyHistoryEntry {
  id: string
  relationToPatient: string
  diagnosisOrSymptoms: string
  ageOfOnset?: string
}

export interface FamilySection {
  samples: FamilySample[]
  history: FamilyHistoryEntry[]
}

export interface ClinicalHistory {
  clinicalDetails: string
  clinicalPresentation: string
  clinicalTesting: string
  riskFlags: string[]
  riskFlagNotes: string
  attachments: AttachmentReference[]
}

export interface ProviderContact {
  fullName: string
  title: string
  npi: string
  minc: string
  email: string
  phone: string
  fax: string
}

export interface ProviderSection {
  facility: {
    organizationId: string | null
    parentOrganizationId: string | null
    parentOrganizationName: string
    name: string
    contact: ContactInfo
  }
  orderingProviderId: string | null
  orderingProvider: ProviderContact
  reportRecipient: {
    name: string
    contact: ContactInfo
  } | null
  providerSignature: Signature | null
}

export interface LabOrderDraft {
  id: string
  orderNumber: string
  orderDate: Date
  patient: PatientSection
  billing: BillingSection
  provider: ProviderSection
  testRequest: TestRequestSection
  icdCodes: IcdCodeEntry[]
  specimens: SpecimenEntry[]
  family: FamilySection
  clinicalHistory: ClinicalHistory
  attachments: AttachmentReference[]
}

export type LabOrderContact = ContactInfo
export type LabOrderSignature = Signature
export type LabOrderSpecimenEntry = SpecimenEntry
export type LabOrderFamilySample = FamilySample
export type LabOrderFamilyHistoryEntry = FamilyHistoryEntry
export type LabOrderCollectionMethod = CollectionMethod

const nonEmptyString = z.string().trim().min(1)
// Use string-based datetime to keep JSON Schema generation happy; no z.date() to avoid to-json-schema errors.
const dateLike = z.union([z.string().datetime(), z.string().min(1)]).nullable()

const LabOrderAddressSchema = z.object({
  line1: nonEmptyString,
  line2: z.string().optional(),
  city: nonEmptyString,
  state: nonEmptyString,
  postalCode: nonEmptyString,
  country: z.string().optional(),
})

const PhoneSchema = z.object({
  type: z.enum(['MOBILE', 'HOME', 'WORK', 'FAX']),
  number: nonEmptyString,
  extension: z.string().optional(),
  preferred: z.boolean().optional(),
})

const ContactInfoSchema = z.object({
  address: LabOrderAddressSchema,
  email: z.string().optional(),
  phones: z.array(PhoneSchema).min(1),
  fax: z.string().optional(),
})

const SignatureSchema = z
  .object({
    fullName: z.string().optional(),
    relationship: z.string().optional(),
    method: z.enum(['DRAWN', 'TYPED', 'UPLOADED']).optional(),
    assetId: z.string().optional(),
    attestation: z
      .enum(['BILLING_CONSENT', 'PROVIDER_MEDICAL_NECESSITY', 'INSURED_CONSENT', 'FAMILY_MEMBER_CONSENT'])
      .optional(),
    date: dateLike,
  })
  .passthrough()

const PatientDemographicsSchema = z.object({
  firstName: nonEmptyString,
  lastName: nonEmptyString,
  dateOfBirth: dateLike,
  sexAtBirth: z.enum(['MALE', 'FEMALE', 'UNKNOWN']),
  mrn: nonEmptyString,
  ethnicity: z.string().optional(),
})

const PatientContactSchema = z.object({
  address: LabOrderAddressSchema,
  email: z.string().optional(),
  phones: z.array(PhoneSchema).min(1),
})

const PatientSpecimenSchema = z
  .object({
    drawDate: dateLike,
    collectionTime: z.string().optional(),
    collectionMethod: z.enum(['LAB', 'KIT', 'PSC', 'MOBILE', 'OTHER']),
    collectionMethodOther: z.string().optional(),
    collectionLocation: nonEmptyString,
    specialInstructions: z.string().optional(),
    fastingRequired: z.boolean(),
    fastingHours: z.string().optional(),
    sampleType: z.enum(['BLOOD', 'BUCCAL', 'SALIVA', 'URINE', 'STOOL', 'TISSUE', 'OTHER', '']),
    sampleTypeOther: z.string().optional(),
    extractedDna: z.boolean(),
    dnaSource: z.string().optional(),
    logisticsNotes: z.string().optional(),
  })
  .passthrough()

const PatientConsentSchema = z
  .object({
    researchOptOut: z.boolean(),
    sampleRetention: z.enum(['UNDECIDED', 'OPT_IN', 'OPT_OUT']),
    acmgSecondaryFindings: z.enum(['UNDECIDED', 'OPT_IN', 'OPT_OUT']),
    patientSignature: SignatureSchema.nullable(),
  })
  .passthrough()

const PatientSectionSchema = z
  .object({
    recordId: z.string().optional(),
    ehrSource: z.string().optional(),
    demographics: PatientDemographicsSchema,
    contact: PatientContactSchema,
    specimen: PatientSpecimenSchema,
    consent: PatientConsentSchema,
  })
  .passthrough()

const PayorDetailsSchema = z
  .object({
    fullName: nonEmptyString,
    relationship: nonEmptyString,
    contact: ContactInfoSchema,
    signature: SignatureSchema.nullable(),
  })
  .passthrough()

const InstitutionBillingSchema = z
  .object({
    institutionName: nonEmptyString,
    attentionTo: z.string().optional(),
    contact: ContactInfoSchema,
  })
  .passthrough()

const InsurancePolicySchema = z
  .object({
    insuranceId: nonEmptyString,
    insuranceName: nonEmptyString,
    planName: z.string().optional(),
    groupNumber: z.string().optional(),
    benefitsId: z.string().optional(),
    insuredName: nonEmptyString,
    relationToPatient: nonEmptyString,
    insuredDob: dateLike,
    insuredPhone: z.string().optional(),
    insurerState: z.string().optional(),
    referralAuthNumber: z.string().optional(),
    copayAmount: z.number().nullable().optional(),
    deductibleAmount: z.number().nullable().optional(),
  })
  .passthrough()

const BillingSectionSchema = z
  .object({
    mode: z.enum(['SELF_PAY', 'INSTITUTION', 'INSURANCE']),
    usePatientForBilling: z.boolean(),
    payor: PayorDetailsSchema.nullable(),
    institution: InstitutionBillingSchema.nullable(),
    primaryInsurance: InsurancePolicySchema.nullable(),
    secondaryInsurance: InsurancePolicySchema.nullable(),
    attachments: z.array(z.any()),
    selfPayDetails: z
      .object({
        paymentMethod: nonEmptyString,
        notes: z.string().optional(),
      })
      .nullable()
      .optional(),
    billingNotes: z.string().optional(),
  })
  .passthrough()

const ProviderContactSchema = z
  .object({
    fullName: nonEmptyString,
    title: z.string().optional(),
    npi: nonEmptyString,
    minc: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    fax: z.string().optional(),
  })
  .passthrough()

const ProviderSectionSchema = z
  .object({
    facility: z
      .object({
        organizationId: z.string().nullable().optional(),
        parentOrganizationId: z.string().nullable().optional(),
        parentOrganizationName: z.string().optional(),
        name: nonEmptyString,
        contact: ContactInfoSchema,
      })
      .passthrough(),
    orderingProviderId: z.string().nullable().optional(),
    orderingProvider: ProviderContactSchema,
    reportRecipient: z
      .object({
        name: z.string(),
        contact: ContactInfoSchema,
      })
      .nullable()
      .optional(),
    providerSignature: SignatureSchema.nullable(),
  })
  .passthrough()

const RequestedTestSchema = z
  .object({
    id: z.string().optional(),
    testId: z.string().optional(),
    testName: z.string().optional(),
    labId: z.string().optional(),
    labName: z.string().optional(),
    loinc: z.string().optional(),
    methodology: z.string().optional(),
    turnaroundTime: z.string().optional(),
    description: z.string().optional(),
    testCategory: z.string().optional(),
    testSubCategory: z.string().optional(),
    configuration: z.any().nullable().optional(),
  })
  .passthrough()

const IndicationEntrySchema = z.object({
  value: z.enum([
    'ALL_IN_ONE_EXTENDED',
    'MCC',
    'PRENATAL_DIAGNOSTIC',
    'PRESYMPTOMATIC',
    'FAMILY_HISTORY',
    'FAMILY_VARIANT',
    'OTHER',
  ]),
  otherText: z.string().optional(),
})

const OrderOptionsSchema = z
  .object({
    rush: z.boolean(),
    excludeVUS: z.boolean(),
    holdSample: z.boolean(),
  })
  .passthrough()

const TestRequestSectionSchema = z
  .object({
    requestedTests: z.array(RequestedTestSchema),
    indications: z.array(IndicationEntrySchema),
    clinicalDiagnosis: z.string().optional(),
    testSpecifics: z.string().optional(),
    reflexOptions: z.array(z.string()).optional(),
    orderOptions: OrderOptionsSchema.optional(),
    additionalGenes: z.array(z.string()).optional(),
  })
  .passthrough()

const IcdCodeEntrySchema = z
  .object({
    id: z.string().optional(),
    code: z.string().optional(),
    shortDescription: z.string().optional(),
    longDescription: z.string().optional(),
  })
  .passthrough()

const SpecimenEntrySchema = z
  .object({
    id: z.string().optional(),
    specimenType: z.string().optional(),
    specimenTypeOther: z.string().optional(),
    collectionMethod: z.string().optional(),
    collectionMethodOther: z.string().optional(),
    collectionLocation: z.string().optional(),
    drawDate: dateLike,
    drawTime: z.string().optional(),
    fastingRequired: z.boolean().optional(),
    fastingHours: z.string().optional(),
    sampleType: z.string().optional(),
    sampleTypeOther: z.string().optional(),
    extractedDna: z.boolean().optional(),
    dnaSource: z.string().optional(),
    logisticsNotes: z.string().optional(),
    collectionNotes: z.string().optional(),
  })
  .passthrough()

const FamilySampleSchema = z
  .object({
    id: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    kitId: z.string().optional(),
    comparator: z
      .enum([
        'MATERNAL_PARENT',
        'MATERNAL_HALF_SIBLING',
        'MATERNAL_GRANDPARENT',
        'MATERNAL_AUNT_UNCLE',
        'MATERNAL_FIRST_COUSIN',
        'PATERNAL_PARENT',
        'PATERNAL_HALF_SIBLING',
        'PATERNAL_GRANDPARENT',
        'PATERNAL_AUNT_UNCLE',
        'PATERNAL_FIRST_COUSIN',
      ])
      .optional(),
    fullName: z.string().optional(),
    relationToPatient: z.string().optional(),
    dateOfBirth: dateLike,
    sexAtBirth: z.enum(['MALE', 'FEMALE', 'UNKNOWN']).optional(),
    affectedStatus: z.enum(['AFFECTED', 'UNAFFECTED', 'UNKNOWN']).optional(),
    specimen: SpecimenEntrySchema.optional(),
    signature: SignatureSchema.nullable(),
  })
  .passthrough()

const FamilyHistoryEntrySchema = z
  .object({
    id: z.string().optional(),
    relationToPatient: z.string().optional(),
    diagnosisOrSymptoms: z.string().optional(),
    ageOfOnset: z.string().optional(),
  })
  .passthrough()

const ClinicalHistorySchema = z
  .object({
    clinicalDetails: z.string().optional(),
    clinicalPresentation: z.string().optional(),
    clinicalTesting: z.string().optional(),
    riskFlags: z.array(z.string()).optional(),
    riskFlagNotes: z.string().optional(),
    attachments: z.array(z.any()).optional(),
  })
  .passthrough()

const AttachmentReferenceSchema = z
  .object({
    id: z.string().optional(),
    category: z.string().optional(),
    fileId: z.string().optional(),
    fileName: z.string().optional(),
    uploadedAt: z.string().optional(),
    url: z.string().optional(),
    notes: z.string().optional(),
  })
  .passthrough()

export const LabOrderDraftSchema = z
  .object({
    id: z.string().optional(),
    orderNumber: z.string().optional(),
    orderDate: dateLike.optional(),
    patient: PatientSectionSchema,
    billing: BillingSectionSchema,
    provider: ProviderSectionSchema,
    testRequest: TestRequestSectionSchema,
    icdCodes: z.array(IcdCodeEntrySchema).optional(),
    specimens: z.array(SpecimenEntrySchema),
    family: z
      .object({
        samples: z.array(FamilySampleSchema).optional(),
        history: z.array(FamilyHistoryEntrySchema).optional(),
      })
      .optional(),
    clinicalHistory: ClinicalHistorySchema,
    attachments: z.array(AttachmentReferenceSchema).optional(),
    labOrderTests: z.array(z.any()).optional(),
    labOrderIcds: z.array(z.any()).optional(),
    labOrderSpecimens: z.array(z.any()).optional(),
    labOrderBilling: z.array(z.any()).optional(),
    labOrderAttachments: z.array(z.any()).optional(),
    labOrderStatuses: z.array(z.any()).optional(),
    orderForms: z.array(z.any()).optional(),
  })
  .passthrough()
  .superRefine((draft, ctx) => {
    const validation = validateLabOrder(draft)
    if (!validation.ok) {
      validation.issues.forEach((issue) => {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: issue.message,
          path: issue.path ?? [],
        })
      })
    }
  })

export type LabOrderDraftInput = z.infer<typeof LabOrderDraftSchema>

export interface Patient {
  id: string
  firstName: string | null
  lastName: string | null
  dateOfBirth: Date | string | null
  gender: string | null
  email: string | null
  mobile: string | null
}

export interface Provider {
  id: string
  firstName: string | null
  lastName: string | null
  npi: string | null
}

export interface Lab {
  id: string
  labName: string | null
  labCode: string | null
}

export interface IcdCode {
  id: string
  code: string | null
  shortDescription: string | null
  longDescription: string | null
}

export interface LabOrderTest {
  id: string
  testVersionId: string | null
  testConfigurationId: string | null
  version:
    | {
        id: string
        versionNumber?: number
        status?: string
        test?: {
          id: string
          casandraTestId?: string | null
          labId?: string | null
          testName: string | null
          lab: Lab | null
        } | null
      }
    | null
  configuration:
    | {
        id: string
        configurationName?: string | null
        familyStructure?: FamilyStructureType | null
        type?: string
      }
    | null
  testCatalog:
    | {
        testId: string
        labId?: string | null
        testName: string | null
        lab: Lab | null
      }
    | null
}

export interface LabOrderIcd {
  id: string
  icd: IcdCode | null
}

export interface LabOrderSpecimen {
  id: string
  specimenType: string | null
  collectedDate: Date | string | null
  specimenCount: string | null
  bodySite: string | null
}

export interface LabOrderBilling {
  id: string
  billingType: string | null
  totalCost: number | null
  insuranceProvider: string | null
  policyNumber: string | null
  planName: string | null
  groupNumber: string | null
  benefitsId: string | null
  insuredName: string | null
  relationToPatient: string | null
  insuredDob: Date | string | null
  insuredPhone: string | null
  insurerState: string | null
  referralAuthNumber: string | null
  copayAmount: number | null
  deductibleAmount: number | null
}

export interface LabOrderAttachment {
  id: string
  labOrderId: string | null
  attachmentId: string | null
  attachment:
    | {
        id: string
        fileName: string
        createdAt: Date | string | null
        url?: string | null
        attachmentUrl?: string | null
      }
    | null
}

export interface LabOrderStatusRecord {
  id: string
  status: string | null
  statusDate: Date | string | null
}

export interface LabOrder {
  id: string
  orderNumber: number
  accessionNumber: number
  patientMRN: string | null
  patientMobile: string | null
  patientEmail: string | null
  orderDate: Date | string | null
  orderNotes: string | null
  clinicalNotes: string | null
  clinicalDetails: string | null
  clinicalPresentation: string | null
  clinicalTesting: string | null
  riskFlags: string[] | null
  riskFlagNotes: string | null
  clinicalAttachments: AttachmentReference[] | null
  labId: string | null
  organizationId: string | null
  orderingProviderId: string | null
  treatingProviderId: string | null
  createdAt: Date | string | null
  updatedAt: Date | string
  patient: Patient | null
  orderingProvider: Provider | null
  treatingProvider: Provider | null
  organization:
    | {
        id: string
        orgName?: string | null
        parentOrgName?: string | null
        orgAddress?: string | null
        orgCity?: string | null
        orgState?: string | null
        orgZip?: string | null
      }
    | null
  lab:
    | {
        id: string
        labName: string | null
      }
    | null
  version:
    | {
        id: string
        versionNumber?: number
        status?: string
      }
    | null
  configuration:
    | {
        id: string
        configurationName?: string | null
        familyStructure?: FamilyStructureType | null
        type?: string
      }
    | null
  labOrderTests: LabOrderTest[] | null
  labOrderIcds: LabOrderIcd[] | null
  labOrderSpecimens: LabOrderSpecimen[] | null
  labOrderBilling: LabOrderBilling[] | null
  labOrderAttachments: LabOrderAttachment[] | null
  labOrderStatuses: LabOrderStatusRecord[] | null
  orderForms: LabOrderFormSnapshot[] | null
}

export type LabOrderDetail = LabOrder

export interface LabOrderSummary {
  id: string
  orderNumber: number
  accessionNumber: number
  orderDate: Date | string | null
  patientMRN: string | null
  patientName: string | null
  status: string | null
  providerName: string | null
  labName: string | null
  casandraTestId: string | null
  versionNumber: number | null
  totalCost: number | null
  createdAt: Date | string | null
  updatedAt: Date | string
  testCount: number
  icdCount: number
}

export interface CreateLabOrderInput {
  status?: LabOrderStatusType
  patientId?: string
  testId?: string
  familyStructure?: FamilyStructureType
  orderDate?: string
  versionId?: string
  orderingProviderId?: string
  treatingProviderId?: string
  organizationId?: string
  orderNotes?: string
  testIds?: string[]
  icdIds?: string[]
  specimens?: Array<{
    specimenType: string
    collectedDate?: Date | string
    specimenCount?: string
    bodySite?: string
  }>
}

export interface UpdateLabOrderInput {
  orderNotes?: string
  testIds?: string[]
  icdIds?: string[]
  specimens?: Array<{
    id?: string
    specimenType: string
    collectedDate?: Date | string
    specimenCount?: string
    bodySite?: string
    _delete?: boolean
  }>
}

export interface LabOrderSearchQuery {
  query?: string
  status?: string
  labId?: string
  providerId?: string
  dateFrom?: string
  dateTo?: string
  limit?: number
  cursor?: string
}

export interface PagedLabOrders {
  items: LabOrderSummary[]
  nextCursor: string | null
  total: number
}

export const LabOrderStatus = z.enum([
  'DRAFT',
  'SUBMITTED',
  'PENDING_REVIEW',
  'PRIOR_AUTH_PENDING',
  'PRIOR_AUTH_APPROVED',
  'SPECIMEN_SHIPPED',
  'SPECIMEN_IN_TRANSIT',
  'SPECIMEN_RECEIVED',
  'ACCESSIONING_IN_PROGRESS',
  'ACCESSIONING_CANCELLED',
  'ACCESSIONING_FAILED',
  'ACCESSIONING_PENDING',
  'ACCESSIONING_PENDING_REVIEW',
  'ACCESSIONING_PENDING_APPROVAL',
  'ACCESSIONING_PENDING_REJECTION',
  'ACCESSIONING_PENDING_CANCELLATION',
  'ACCESSIONING_COMPLETED',
  'CANCELLED',
  'WET_LAB_COMPLETED',
  'DRY_LAB_COMPLETED',
  'ANALYSIS_IN_PROGRESS',
  'ANALYSIS_COMPLETED',
  'ANALYSIS_FAILED',
  'ANALYSIS_PENDING',
  'ANALYSIS_PENDING_REVIEW',
  'ANALYSIS_PENDING_APPROVAL',
  'ANALYSIS_PENDING_REJECTION',
  'ANALYSIS_PENDING_CANCELLATION',
  'RESULTED',
  'REJECTED',
  'RESULTS_DELIVERED',
  'RESULTS_DELIVERED_TO_PATIENT',
  'RESULTS_DELIVERED_TO_PROVIDER',
  'RESULTS_DELIVERED_TO_INSTITUTION',
  'RESULTS_DELIVERED_TO_PAYOR',
  'RESULTS_DELIVERED_TO_PAYOR_REJECTED',
  'RESULTS_DELIVERED_TO_PAYOR_APPROVED',
  'CPT_CODES_UPDATED',
  'ICD_CODES_UPDATED',
  'DOCTOR_NOTES_UPDATED',
  'CLINICAL_NOTES_UPDATED',
  'MEDICAL_NECESSITY_VERIFIED',
])

export type LabOrderStatusType = z.infer<typeof LabOrderStatus>

export const LabOrderPriority = z.enum(['ROUTINE', 'URGENT', 'STAT'])

