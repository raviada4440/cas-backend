import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

const uuid = () => z.string().uuid()
const nullableString = () => z.string().nullable()

export const LabOrderSearchQuerySchema = z
  .object({
    query: z.string().trim().optional(),
    status: z.string().trim().optional(),
    labId: uuid().optional(),
    providerId: uuid().optional(),
    dateFrom: z.string().datetime().optional(),
    dateTo: z.string().datetime().optional(),
    limit: z.coerce.number().int().min(1).max(50).default(20),
    cursor: uuid().optional(),
  })
  .strict()

export class LabOrderSearchQueryDto extends createZodDto(LabOrderSearchQuerySchema) {}
export type LabOrderSearchQuery = z.infer<typeof LabOrderSearchQuerySchema>

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
    familyStructure: z.string().trim(),
    orderDate: z.string().datetime().optional(),
    versionId: uuid().optional(),
    orderingProviderId: uuid().optional(),
    treatingProviderId: uuid().optional(),
    organizationId: uuid().optional(),
    orderNotes: nullableString().optional(),
    testIds: z.array(uuid()).optional(),
    icdIds: z.array(uuid()).optional(),
    specimens: z
      .array(
        z
          .object({
            specimenType: z.string(),
            collectedDate: z.union([z.string().datetime(), z.date()]).optional(),
            specimenCount: nullableString().optional(),
            bodySite: nullableString().optional(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict()

export class CreateLabOrderDto extends createZodDto(CreateLabOrderSchema) {}
export type CreateLabOrderInput = z.infer<typeof CreateLabOrderSchema>

export const UpdateLabOrderSchema = z
  .object({
    orderNotes: nullableString().optional(),
    testIds: z.array(uuid()).optional(),
    icdIds: z.array(uuid()).optional(),
    specimens: z
      .array(
        z
          .object({
            id: uuid().optional(),
            specimenType: z.string(),
            collectedDate: z.union([z.string().datetime(), z.date()]).optional(),
            specimenCount: nullableString().optional(),
            bodySite: nullableString().optional(),
            _delete: z.boolean().optional(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict()

export class UpdateLabOrderDto extends createZodDto(UpdateLabOrderSchema) {}
export type UpdateLabOrderInput = z.infer<typeof UpdateLabOrderSchema>

export const UpdateLabOrderStatusSchema = z
  .object({
    status: z.string().trim().min(1),
  })
  .strict()

export class UpdateLabOrderStatusDto extends createZodDto(UpdateLabOrderStatusSchema) {}
export type UpdateLabOrderStatusInput = z.infer<typeof UpdateLabOrderStatusSchema>
