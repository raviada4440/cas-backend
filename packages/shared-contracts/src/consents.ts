import { z } from 'zod/v4'

import { JsonValue as JsonValueSchema, Uuid } from './common'
import type { JsonValue } from './common'

const NullableString = z.string().nullable()

export const FormVisibilityOperator = z.enum([
  'equals',
  'not_equals',
  'in',
  'not_in',
  'contains',
  'not_contains',
  'greater_than',
  'greater_than_or_equal',
  'less_than',
  'less_than_or_equal',
  'is_empty',
  'is_not_empty',
])
export type FormVisibilityOperator = z.infer<typeof FormVisibilityOperator>

export const FormVisibilityCondition = z.object({
  fieldKey: z.string().min(1),
  operator: FormVisibilityOperator,
  value: JsonValueSchema.optional(),
})
export type FormVisibilityCondition = z.infer<typeof FormVisibilityCondition>

export const FormValidationType = z.enum([
  'required',
  'min_length',
  'max_length',
  'min',
  'max',
  'regex',
  'custom',
])
export type FormValidationType = z.infer<typeof FormValidationType>

export const FormValidationRule = z.object({
  type: FormValidationType,
  value: JsonValueSchema.optional(),
  message: NullableString.optional(),
})
export type FormValidationRule = z.infer<typeof FormValidationRule>

export const FormFieldOption = z.object({
  id: z.string().min(1),
  label: z.string(),
  value: JsonValueSchema.optional(),
  description: NullableString.optional(),
  icon: NullableString.optional(),
})
export type FormFieldOption = z.infer<typeof FormFieldOption>

export const FormFieldType = z.enum([
  'text',
  'textarea',
  'number',
  'integer',
  'currency',
  'email',
  'password',
  'phone',
  'url',
  'date',
  'time',
  'select',
  'multi-select',
  'checkbox',
  'checkbox-group',
  'radio-group',
  'switch',
  'file',
  'file-upload',
  'signature',
  'rich-text',
  'button',
  'submit',
  'reset',
])
export type FormFieldType = z.infer<typeof FormFieldType>

export const FormFieldLayout = z
  .object({
    width: z.enum(['auto', 'full', 'half', 'third', 'quarter']).default('full'),
    columnSpan: z.number().int().min(1).max(12).optional(),
    rowSpan: z.number().int().min(1).max(12).optional(),
    order: z.number().int().optional(),
  })
  .partial()
export type FormFieldLayout = z.infer<typeof FormFieldLayout>

export const FormFieldElement = z.object({
  kind: z.literal('field'),
  id: z.string().min(1),
  key: z.string().min(1),
  type: FormFieldType,
  label: NullableString.optional(),
  description: NullableString.optional(),
  placeholder: NullableString.optional(),
  helperText: NullableString.optional(),
  defaultValue: JsonValueSchema.optional(),
  required: z.boolean().optional(),
  disabled: z.boolean().optional(),
  readOnly: z.boolean().optional(),
  hidden: z.boolean().optional(),
  options: z.array(FormFieldOption).optional(),
  validations: z.array(FormValidationRule).optional(),
  visibilityCondition: FormVisibilityCondition.optional(),
  layout: FormFieldLayout.optional(),
  settings: z.record(z.string(), JsonValueSchema).optional(),
})
export type FormFieldElementType = z.infer<typeof FormFieldElement>

export const FormContainerType = z.enum(['section', 'group', 'grid'])
export type FormContainerType = z.infer<typeof FormContainerType>

export const FormContainerLayout = z
  .object({
    columns: z.number().int().min(1).max(4).default(1),
    columnSpan: z.number().int().min(1).max(12).optional(),
    rowSpan: z.number().int().min(1).max(12).optional(),
    gap: NullableString.optional(),
  })
  .partial()
export type FormContainerLayout = z.infer<typeof FormContainerLayout>

export const FormContainerElement: z.ZodType<any> = z.lazy(() =>
  z.object({
    kind: z.literal('container'),
    id: z.string().min(1),
    type: FormContainerType,
    title: NullableString.optional(),
    description: NullableString.optional(),
    layout: FormContainerLayout.optional(),
    visibilityCondition: FormVisibilityCondition.optional(),
    settings: z.record(z.string(), JsonValueSchema).optional(),
    children: z.array(FormElement),
  }),
)
export type FormContainerElementType = z.infer<typeof FormContainerElement>

export const FormElement: z.ZodType<FormFieldElementType | FormContainerElementType> = z.lazy(() =>
  z.union([FormFieldElement, FormContainerElement]),
)
export type FormElementType = z.infer<typeof FormElement>

export const FormSchema = z.object({
  version: z.literal(1),
  name: NullableString.optional(),
  description: NullableString.optional(),
  elements: z.array(FormElement),
  metadata: z.record(z.string(), JsonValueSchema).optional(),
  settings: z.record(z.string(), JsonValueSchema).optional(),
  lastEditedBy: NullableString.optional(),
  lastEditedAt: z.string().datetime().optional(),
})
export type FormSchema = z.infer<typeof FormSchema>

export const ConsentTemplateStatus = z.enum(['DRAFT', 'ACTIVE', 'RETIRED'])
export type ConsentTemplateStatus = z.infer<typeof ConsentTemplateStatus>

export const ConsentType = z.enum([
  'GENERAL_CONSENT',
  'SPECIFIC_CONSENT',
  'RESEARCH_CONSENT',
  'MINOR_CONSENT',
  'EMERGENCY_CONSENT',
  'CUSTOM_CONSENT',
  'HIPAA_PRIVACY_CONSENT',
])
export type ConsentType = z.infer<typeof ConsentType>

export const ConsentTemplate = z.object({
  id: Uuid,
  name: z.string(),
  description: NullableString.optional(),
  consentType: ConsentType,
  title: z.string(),
  content: z.string(),
  legalText: NullableString.optional(),
  formSchema: FormSchema.nullable().optional(),
  status: ConsentTemplateStatus,
  version: z.number().int(),
  effectiveDate: z.string().datetime().nullable().optional(),
  retiredDate: z.string().datetime().nullable().optional(),
  organizationId: NullableString.optional(),
  isGlobal: z.boolean(),
  createdBy: NullableString.optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})
export type ConsentTemplate = z.infer<typeof ConsentTemplate>

export const ConsentTemplateListResponse = z.object({
  items: z.array(ConsentTemplate),
})
export type ConsentTemplateListResponse = z.infer<typeof ConsentTemplateListResponse>

export const ConsentTemplateInputBase = z.object({
  name: z.string().min(1),
  description: NullableString.optional(),
  consentType: ConsentType,
  title: z.string().min(1),
  content: z.string().min(1),
  legalText: NullableString.optional(),
  formSchema: FormSchema.nullable().optional(),
  organizationId: NullableString.optional(),
  isGlobal: z.boolean().optional(),
})

export const CreateConsentTemplateInput = ConsentTemplateInputBase.extend({
  status: ConsentTemplateStatus.optional(),
})
export type CreateConsentTemplateInput = z.infer<typeof CreateConsentTemplateInput>

export const UpdateConsentTemplateInput = ConsentTemplateInputBase.partial().extend({
  templateId: Uuid,
  status: ConsentTemplateStatus.optional(),
  effectiveDate: z.string().datetime().nullable().optional(),
  retiredDate: z.string().datetime().nullable().optional(),
})
export type UpdateConsentTemplateInput = z.infer<typeof UpdateConsentTemplateInput>

export const AssignConsentTemplateInput = z.object({
  versionId: Uuid,
  consentTemplateId: Uuid,
  isRequired: z.boolean().optional(),
  customTitle: NullableString.optional(),
  customContent: NullableString.optional(),
  conditionalLogic: NullableString.optional(),
  dependsOnConsent: NullableString.optional(),
  configurationId: Uuid.optional(),
})
export type AssignConsentTemplateInput = z.infer<typeof AssignConsentTemplateInput>

export const TestCatalogVersionConsent = z.object({
  id: Uuid,
  versionId: Uuid,
  configurationId: NullableString,
  consentTemplateId: Uuid,
  isRequired: z.boolean(),
  displayOrder: z.number().int(),
  customTitle: NullableString,
  customContent: NullableString,
  conditionalLogic: NullableString,
  dependsOnConsent: NullableString,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})
export type TestCatalogVersionConsent = z.infer<typeof TestCatalogVersionConsent>

export const TestCatalogVersionConsentListResponse = z.array(TestCatalogVersionConsent)
export type TestCatalogVersionConsentListResponse = z.infer<
  typeof TestCatalogVersionConsentListResponse
>

export const UpdateTestCatalogVersionConsentInput = z.object({
  versionConsentId: Uuid,
  isRequired: z.boolean().optional(),
  customTitle: NullableString.optional(),
  customContent: NullableString.optional(),
  conditionalLogic: NullableString.optional(),
  dependsOnConsent: NullableString.optional(),
  updatedBy: NullableString.optional(),
})
export type UpdateTestCatalogVersionConsentInput = z.infer<
  typeof UpdateTestCatalogVersionConsentInput
>

export const ReorderVersionConsentsInput = z.object({
  versionId: Uuid,
  consentIdsInOrder: z.array(Uuid).min(1),
  performedBy: NullableString.optional(),
})
export type ReorderVersionConsentsInput = z.infer<typeof ReorderVersionConsentsInput>

export const RemoveVersionConsentInput = z.object({
  versionConsentId: Uuid,
  performedBy: NullableString.optional(),
})
export type RemoveVersionConsentInput = z.infer<typeof RemoveVersionConsentInput>

export const ConsentTemplateLifecycleActionInput = z.object({
  templateId: Uuid,
})
export type ConsentTemplateLifecycleActionInput = z.infer<
  typeof ConsentTemplateLifecycleActionInput
>

