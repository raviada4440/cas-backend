import { FamilyStructure, FamilyStructureType } from './catalog'
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

export interface Address {
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
  address: Address
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
  address: Address
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
  testCatalog: {
    testId: string
    labId?: string | null
    testName: string | null
    lab: Lab | null
  } | null
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

export interface LabOrderForm {
  id: string
  versionOrderFormId: string | null
  orderFormTemplateId: string | null
  sectionName: string
  templateName: string | null
  displayOrder: number
  formSchema: unknown
  layoutSchema: unknown
  isCompleted: boolean
  completedAt: Date | string | null
  responses: unknown
  createdAt: Date | string
  updatedAt: Date | string
}

export interface LabOrder {
  id: string
  orderNumber: number | null
  accessionNumber: number | null
  testVersionId: string
  testConfigurationId: string
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
        versionNumber: number | null
        status: string | null
        turnAroundTime: string | null
        orderLoincs: { loincCode: string }[]
        specimens: Array<{
          id: string
          displayName: string | null
          isPrimary: boolean | null
          specimenType: string | null
          specimenRequirements: string | null
          volume: string | null
          minimumVolume: string | null
          container: string | null
          specialInstructions: string | null
          alternateContainers: string | null
          preferredVolume: string | null
        }>
      }
    | null
  configuration:
    | {
        id: string
        configurationName: string | null
        type: string | null
        customerId?: string | null
      }
    | null
  labOrderTests: LabOrderTest[]
  labOrderIcds: LabOrderIcd[]
  labOrderSpecimens: LabOrderSpecimen[]
  labOrderBilling: LabOrderBilling[]
  labOrderAttachments: LabOrderAttachment[]
  labOrderStatuses: LabOrderStatusRecord[]
  orderForms: LabOrderForm[]
}

export interface LabOrderSummary {
  id: string
  orderNumber: number | null
  accessionNumber: number | null
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

export interface PagedLabOrders {
  items: LabOrderSummary[]
  nextCursor: string | null
  total: number
}

