import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'

/////////////////////////////////////////
// LAB ORDER STATUS SCHEMA
/////////////////////////////////////////

export const LabOrderStatusSchema = z.object({
  id: z.string(),
  labOrderId: z.string().nullable(),
  status: z.string().nullable(),
  statusDate: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderStatus = z.infer<typeof LabOrderStatusSchema>

/////////////////////////////////////////
// LAB ORDER STATUS PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderStatusPartialSchema = LabOrderStatusSchema.partial()

export type LabOrderStatusPartial = z.infer<typeof LabOrderStatusPartialSchema>

/////////////////////////////////////////
// LAB ORDER STATUS RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderStatusRelations = {
  labOrder?: LabOrderWithRelations | null;
};

export type LabOrderStatusWithRelations = z.infer<typeof LabOrderStatusSchema> & LabOrderStatusRelations

export const LabOrderStatusWithRelationsSchema: z.ZodType<LabOrderStatusWithRelations> = LabOrderStatusSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER STATUS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderStatusPartialRelations = {
  labOrder?: LabOrderPartialWithRelations | null;
};

export type LabOrderStatusPartialWithRelations = z.infer<typeof LabOrderStatusPartialSchema> & LabOrderStatusPartialRelations

export const LabOrderStatusPartialWithRelationsSchema: z.ZodType<LabOrderStatusPartialWithRelations> = LabOrderStatusPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderStatusWithPartialRelations = z.infer<typeof LabOrderStatusSchema> & LabOrderStatusPartialRelations

export const LabOrderStatusWithPartialRelationsSchema: z.ZodType<LabOrderStatusWithPartialRelations> = LabOrderStatusSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderStatusSchema;
