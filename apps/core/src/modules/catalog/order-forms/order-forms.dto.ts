import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  AssignOrderFormInput as AssignOrderFormSchema,
  AssignOrderFormResponse as AssignOrderFormResponseSchema,
  CreateOrderFormSectionInput as CreateOrderFormSectionSchema,
  CreateOrderFormTemplateInput as CreateOrderFormTemplateSchema,
  OrderFormAssignment as OrderFormAssignmentSchema,
  OrderFormSection as OrderFormSectionSchema,
  OrderFormSectionListResponse as OrderFormSectionListResponseSchema,
  OrderFormTemplate as OrderFormTemplateSchema,
  OrderFormTemplateListResponse as OrderFormTemplateListResponseSchema,
  UpdateOrderFormSectionInput as UpdateOrderFormSectionSchema,
  UpdateOrderFormTemplateInput as UpdateOrderFormTemplateSchema,
} from '@shared/contracts/order-forms'

export class CreateOrderFormSectionDto extends createZodDto(CreateOrderFormSectionSchema) {}
export type CreateOrderFormSectionInput = z.infer<typeof CreateOrderFormSectionSchema>

export class UpdateOrderFormSectionDto extends createZodDto(UpdateOrderFormSectionSchema) {}
export type UpdateOrderFormSectionInput = z.infer<typeof UpdateOrderFormSectionSchema>

export class CreateOrderFormTemplateDto extends createZodDto(CreateOrderFormTemplateSchema) {}
export type CreateOrderFormTemplateInput = z.infer<typeof CreateOrderFormTemplateSchema>

export class UpdateOrderFormTemplateDto extends createZodDto(UpdateOrderFormTemplateSchema) {}
export type UpdateOrderFormTemplateInput = z.infer<typeof UpdateOrderFormTemplateSchema>

export class AssignOrderFormsDto extends createZodDto(AssignOrderFormSchema) {}
export type AssignOrderFormsInput = z.infer<typeof AssignOrderFormSchema>

export type OrderFormSectionSummary = z.infer<typeof OrderFormSectionSchema>
export type OrderFormTemplateSummary = z.infer<typeof OrderFormTemplateSchema>
export type OrderFormAssignmentItem = z.infer<typeof OrderFormAssignmentSchema>
export type OrderFormSectionListResponse = z.infer<typeof OrderFormSectionListResponseSchema>
export type OrderFormTemplateListResponse = z.infer<typeof OrderFormTemplateListResponseSchema>
export type AssignOrderFormResponse = z.infer<typeof AssignOrderFormResponseSchema>
