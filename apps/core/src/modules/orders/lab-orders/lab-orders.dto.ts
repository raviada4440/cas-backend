import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  CreateLabOrderInput as CreateLabOrderInputContract,
  LabOrderSearchQuery as LabOrderSearchQueryContract,
  UpdateLabOrderInput as UpdateLabOrderInputContract,
} from '@shared/contracts/laborders'
import { FamilyStructure } from '@shared/contracts/catalog'

const uuid = () => z.string().uuid()

const labOrderObjectSchema = z
  .unknown()
  .refine((value) => value !== null && typeof value === 'object', {
    message: 'labOrder must be an object',
  })

export const CreateLabOrderRequestSchema = z
  .object({
    testId: z.string().min(1),
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
    labOrder: labOrderObjectSchema,
  })
  .strict()

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
    patientId: uuid(),
    testId: uuid(),
    familyStructure: FamilyStructure,
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
            collectedDate: z.union([z.string(), z.date()]).optional(),
            specimenCount: z.string().optional(),
            bodySite: z.string().optional(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict() satisfies z.ZodType<CreateLabOrderInputContract>

export class CreateLabOrderDto extends createZodDto(CreateLabOrderSchema) {}
export type CreateLabOrderInput = CreateLabOrderInputContract

export const UpdateLabOrderSchema = z
  .object({
    orderNotes: z.string().optional(),
    testIds: z.array(uuid()).optional(),
    icdIds: z.array(uuid()).optional(),
    familyStructure: z.string().optional(),
    labOrder: z
      .object({
        testRequest: z
          .object({
            requestedTests: z.array(z.object({ testId: uuid().optional() })).optional(),
          })
          .optional(),
        icdCodes: z.array(z.object({ id: uuid().optional() })).optional(),
        specimens: z
          .array(
            z.object({
              id: uuid().optional(),
              specimenType: z.string().optional(),
              collectedDate: z.union([z.string(), z.date()]).optional(),
              specimenCount: z.string().optional(),
              bodySite: z.string().optional(),
              _delete: z.boolean().optional(),
            }),
          )
          .optional(),
      })
      .optional(),
    specimens: z
      .array(
        z
          .object({
            id: uuid().optional(),
            specimenType: z.string(),
            collectedDate: z.union([z.string(), z.date()]).optional(),
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
