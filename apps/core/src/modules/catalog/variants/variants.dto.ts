import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  CreateOperationalVariantInput as CreateOperationalVariantSchema,
  OperationalVariantBiomarkerOverrideInput as OperationalVariantBiomarkerOverrideInputSchema,
  UpdateOperationalVariantInput as UpdateOperationalVariantSchema,
  UpsertCustomerVariantInput as UpsertCustomerVariantSchema,
  CreateOperationalVariantInput as CreateOperationalVariantInputType,
  OperationalVariantBiomarkerOverrideInput as OperationalVariantBiomarkerOverrideInputType,
  UpdateOperationalVariantInput as UpdateOperationalVariantInputType,
  UpsertCustomerVariantInput as UpsertCustomerVariantInputType,
} from '@shared/contracts/catalog-variants'
import {
  ResolveVariantInput as ResolveVariantInputSchema,
  ResolveVariantInput as ResolveVariantInputType,
} from '@shared/contracts/catalog'

const uuid = () => z.string().uuid()

export class ListOperationalVariantsQueryDto extends createZodDto(
  z.object({
    versionId: uuid().optional(),
  }),
) {}

export class CreateOperationalVariantDto extends createZodDto(
  CreateOperationalVariantSchema.omit({ testId: true }),
) {}
export type CreateOperationalVariantInput = Omit<CreateOperationalVariantInputType, 'testId'>

export class UpdateOperationalVariantDto extends createZodDto(
  UpdateOperationalVariantSchema.omit({ testId: true, configurationId: true }),
) {}
export type UpdateOperationalVariantInput = Omit<
  UpdateOperationalVariantInputType,
  'testId' | 'configurationId'
>

export class ConfigurationIdParamDto extends createZodDto(
  z.object({
    configurationId: uuid(),
  }),
) {}

export class VariantIdParamDto extends createZodDto(
  z.object({
    variantId: uuid(),
  }),
) {}

export class UpsertCustomerVariantDto extends createZodDto(
  UpsertCustomerVariantSchema.omit({ testId: true }),
) {}
export type UpsertCustomerVariantInput = Omit<UpsertCustomerVariantInputType, 'testId'>

export class BulkUpsertBiomarkersDto extends createZodDto(
  z.object({
    overrides: z.array(OperationalVariantBiomarkerOverrideInputSchema),
  }),
) {}
export type OperationalVariantBiomarkerOverrideInput = OperationalVariantBiomarkerOverrideInputType

export class DeleteBiomarkersDto extends createZodDto(
  z.object({
    hgncIds: z.array(z.string().min(1)),
  }),
) {}

export class ResolveVariantDto extends createZodDto(ResolveVariantInputSchema) {}
export type ResolveVariantInput = ResolveVariantInputType

export class MasterDefaultsQueryDto extends createZodDto(
  z.object({
    versionId: uuid(),
  }),
) {}

export class VariantDiffDto extends createZodDto(
  z.object({
    versionId: uuid(),
    configurationId: uuid().optional(),
  }),
) {}
