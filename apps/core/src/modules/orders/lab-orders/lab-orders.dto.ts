import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  CreateLabOrderInput as CreateLabOrderInputContract,
  LabOrderDraftSchema,
  LabOrderSearchQuery as LabOrderSearchQueryContract,
  LabOrderStatus,
  UpdateLabOrderInput as UpdateLabOrderInputContract,
} from '@shared/contracts/laborders'
import { FamilyStructure } from '@shared/contracts/catalog'

const uuid = () => z.string().uuid()

export const CreateLabOrderRequestSchema = z
  .object({
    status: LabOrderStatus.optional(),
    testId: z.string().min(1).optional(),
    versionId: z.string().min(1).optional(),
    organizationId: z.string().min(1).optional(),
    labOrderId: z.string().min(1).optional(),
    labId: z.string().optional(),
    patientId: z.string().optional(),
    orderingProviderId: z.string().optional(),
    treatingProviderId: z.string().optional(),
    orderDate: z.string().optional(),
    dimension: z.string().optional(),
    dimensionValue: z.string().optional(),
    familyStructure: z.string().optional(),
    // Accept any object for labOrder at DTO; controller handles draft/non-draft validation
    labOrder: z.object({}).passthrough(),
  })
  .strict()
  .superRefine((val, ctx) => {
    const status = val.status ?? 'DRAFT'
    if (status !== 'DRAFT') {
      if (!val.testId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'testId is required',
          path: ['testId'],
        })
      }
      if (!val.patientId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'patientId is required',
          path: ['patientId'],
        })
      }
      if (!val.familyStructure) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'familyStructure is required',
          path: ['familyStructure'],
        })
      }
    }
  })

export class CreateLabOrderRequestDto extends createZodDto(CreateLabOrderRequestSchema) {}
export type CreateLabOrderRequest = z.infer<typeof CreateLabOrderRequestSchema>
export const LabOrderSearchQuerySchema = z
  .object({
    query: z.string().trim().optional(),
    status: z.string().trim().optional(),
    labId: uuid().optional(),
    providerId: uuid().optional(),
    dateFrom: z.string().optional(),
    dateTo: z.string().optional(),
    limit: z.coerce.number().int().min(1).max(50).optional(),
    cursor: z.string().optional(),
  })
  .strict() satisfies z.ZodType<LabOrderSearchQueryContract>

export class LabOrderSearchQueryDto extends createZodDto(LabOrderSearchQuerySchema) {}
export type LabOrderSearchQuery = LabOrderSearchQueryContract

export const LabOrderIdParamSchema = z
  .object({
    labOrderId: uuid(),
  })
  .strict()

export class LabOrderIdParamDto extends createZodDto(LabOrderIdParamSchema) {}
export type LabOrderIdParam = z.infer<typeof LabOrderIdParamSchema>

export const CreateLabOrderSchema = z
  .object({
    status: LabOrderStatus.optional(),
    patientId: uuid().optional(),
    testId: uuid().optional(),
    familyStructure: FamilyStructure.optional(),
    orderDate: z.string().optional(),
    versionId: uuid().optional(),
    orderingProviderId: uuid().optional(),
    treatingProviderId: uuid().optional(),
    organizationId: uuid().optional(),
    orderNotes: z.string().optional(),
    testIds: z.array(uuid()).optional(),
    icdIds: z.array(uuid()).optional(),
    specimens: z
      .array(
        z
          .object({
            specimenType: z.string(),
            collectedDate: z.string().datetime().optional(),
            specimenCount: z.string().optional(),
            bodySite: z.string().optional(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict()
  .superRefine((val, ctx) => {
    const status = val.status ?? 'DRAFT'
    if (status !== 'DRAFT') {
      if (!val.patientId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'patientId is required',
          path: ['patientId'],
        })
      }
      if (!val.testId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'testId is required',
          path: ['testId'],
        })
      }
      if (!val.familyStructure) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'familyStructure is required',
          path: ['familyStructure'],
        })
      }
    }
  }) satisfies z.ZodType<CreateLabOrderInputContract>

export class CreateLabOrderDto extends createZodDto(CreateLabOrderSchema) {}
export type CreateLabOrderInput = CreateLabOrderInputContract

export const UpdateLabOrderSchema = z
  .object({
    orderNotes: z.string().optional(),
    testIds: z.array(uuid()).optional(),
    icdIds: z.array(uuid()).optional(),
    familyStructure: z.string().optional(),
    labOrder: LabOrderDraftSchema.optional(),
    specimens: z
      .array(
        z
          .object({
            id: uuid().optional(),
            specimenType: z.string(),
            collectedDate: z.string().datetime().optional(),
            specimenCount: z.string().optional(),
            bodySite: z.string().optional(),
            _delete: z.boolean().optional(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict() satisfies z.ZodType<UpdateLabOrderInputContract>

export class UpdateLabOrderDto extends createZodDto(UpdateLabOrderSchema) {}
export type UpdateLabOrderInput = UpdateLabOrderInputContract

export const UpdateLabOrderStatusSchema = z
  .object({
    status: z.string().trim().min(1),
  })
  .strict()

export class UpdateLabOrderStatusDto extends createZodDto(UpdateLabOrderStatusSchema) {}
export type UpdateLabOrderStatusInput = z.infer<typeof UpdateLabOrderStatusSchema>
