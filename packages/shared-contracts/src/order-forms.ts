import * as z from 'zod/v4'

import { FormSchema } from './consents.js'
export type { FormSchema } from './consents.js'
import { JsonValue, UtcDateTime, Uuid } from './common.js'

export const OrderFormTemplateStatus = z.enum(['DRAFT', 'ACTIVE', 'RETIRED'])
export type OrderFormTemplateStatus = z.infer<typeof OrderFormTemplateStatus>

const NullableString = z.string().nullable()

export const OrderFormSection = z.object({
  id: Uuid,
  name: z.string().min(1),
  description: NullableString,
  sortOrder: z.number().int(),
  isActive: z.boolean(),
  organizationId: Uuid.nullable(),
  createdBy: Uuid.nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type OrderFormSection = z.infer<typeof OrderFormSection>

export const CreateOrderFormSectionInput = z.object({
  name: z.string().min(1),
  description: NullableString.optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  organizationId: Uuid.optional(),
})
export type CreateOrderFormSectionInput = z.infer<typeof CreateOrderFormSectionInput>

export const UpdateOrderFormSectionInput = z.object({
  sectionId: Uuid,
  name: z.string().min(1).optional(),
  description: NullableString.optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
})
export type UpdateOrderFormSectionInput = z.infer<typeof UpdateOrderFormSectionInput>

export const OrderFormSectionListResponse = z.object({
  items: z.array(OrderFormSection),
})
export type OrderFormSectionListResponse = z.infer<typeof OrderFormSectionListResponse>

export const OrderFormTemplate = z.object({
  id: Uuid,
  orderFormSectionId: Uuid,
  name: z.string().min(1),
  description: NullableString,
  status: OrderFormTemplateStatus,
  version: z.number().int(),
  effectiveDate: UtcDateTime.nullable(),
  retiredDate: UtcDateTime.nullable(),
  formSchema: FormSchema.nullable(),
  layoutSchema: JsonValue.nullable(),
  organizationId: Uuid.nullable(),
  isGlobal: z.boolean(),
  createdBy: Uuid.nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
  section: z
    .object({
      id: Uuid,
      name: z.string(),
    })
    .optional(),
})
export type OrderFormTemplate = z.infer<typeof OrderFormTemplate>

export const CreateOrderFormTemplateInput = z.object({
  orderFormSectionId: Uuid,
  name: z.string().min(1),
  description: NullableString.optional(),
  status: OrderFormTemplateStatus.optional(),
  formSchema: FormSchema.nullable().optional(),
  layoutSchema: JsonValue.nullable().optional(),
  organizationId: Uuid.optional(),
  isGlobal: z.boolean().optional(),
})
export type CreateOrderFormTemplateInput = z.infer<typeof CreateOrderFormTemplateInput>

export const UpdateOrderFormTemplateInput = z.object({
  templateId: Uuid,
  name: z.string().min(1).optional(),
  description: NullableString.optional(),
  status: OrderFormTemplateStatus.optional(),
  effectiveDate: UtcDateTime.nullable().optional(),
  retiredDate: UtcDateTime.nullable().optional(),
  formSchema: FormSchema.nullable().optional(),
  layoutSchema: JsonValue.nullable().optional(),
})
export type UpdateOrderFormTemplateInput = z.infer<typeof UpdateOrderFormTemplateInput>

export const OrderFormTemplateListResponse = z.object({
  items: z.array(OrderFormTemplate),
})
export type OrderFormTemplateListResponse = z.infer<typeof OrderFormTemplateListResponse>

export const OrderFormAssignment = z.object({
  id: Uuid,
  versionId: Uuid,
  configurationId: Uuid.nullable(),
  orderFormTemplateId: Uuid,
  displayOrder: z.number().int(),
  customTitle: NullableString,
  isRequired: z.boolean(),
  isVisible: z.boolean(),
  createdBy: Uuid.nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
  template: OrderFormTemplate.optional(),
})
export type OrderFormAssignment = z.infer<typeof OrderFormAssignment>

export const AssignOrderFormInput = z.object({
  testId: Uuid,
  versionId: Uuid,
  configurationId: Uuid.nullable().optional(),
  assignments: z.array(
    z.object({
      orderFormTemplateId: Uuid,
      displayOrder: z.number().int().nonnegative(),
      customTitle: NullableString.optional(),
      isRequired: z.boolean().optional(),
      isVisible: z.boolean().optional(),
    }),
  ),
})
export type AssignOrderFormInput = z.infer<typeof AssignOrderFormInput>

export const AssignOrderFormResponse = z.object({
  items: z.array(OrderFormAssignment),
})
export type AssignOrderFormResponse = z.infer<typeof AssignOrderFormResponse>

export const ResolvedOrderFormSection = z.object({
  assignmentId: Uuid,
  sectionId: Uuid,
  sectionName: z.string(),
  templateId: Uuid,
  templateName: z.string(),
  displayOrder: z.number().int(),
  isRequired: z.boolean(),
  isVisible: z.boolean(),
  customTitle: NullableString,
  formSchema: FormSchema.nullable(),
  layoutSchema: JsonValue.nullable(),
})
export type ResolvedOrderFormSection = z.infer<typeof ResolvedOrderFormSection>

export const FileUploadCategory = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  description: NullableString.optional(),
  required: z.boolean().default(false),
})
export type FileUploadCategory = z.infer<typeof FileUploadCategory>

export const FileUploadRequirement = z.object({
  assignmentId: Uuid.nullable().optional(),
  componentId: z.string().min(1),
  sectionId: Uuid,
  sectionName: z.string(),
  templateId: Uuid,
  templateName: z.string(),
  title: z.string().min(1),
  helperText: NullableString.optional(),
  categories: z.array(FileUploadCategory),
  maxFiles: z.number().int().positive().optional(),
  allowOther: z.boolean().optional(),
  required: z.boolean().optional(),
})
export type FileUploadRequirement = z.infer<typeof FileUploadRequirement>

export const LabOrderFormSnapshot = z.object({
  id: Uuid,
  versionOrderFormId: Uuid.nullable(),
  orderFormTemplateId: Uuid.nullable(),
  sectionName: z.string(),
  templateName: NullableString,
  displayOrder: z.number().int(),
  formSchema: FormSchema.nullable(),
  layoutSchema: JsonValue.nullable(),
  isCompleted: z.boolean(),
  completedAt: UtcDateTime.nullable(),
  responses: JsonValue.nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type LabOrderFormSnapshot = z.infer<typeof LabOrderFormSnapshot>

