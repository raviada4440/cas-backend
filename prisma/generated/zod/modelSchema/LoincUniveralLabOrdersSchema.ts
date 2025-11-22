import { z } from 'zod';

/////////////////////////////////////////
// LOINC UNIVERAL LAB ORDERS SCHEMA
/////////////////////////////////////////

export const LoincUniveralLabOrdersSchema = z.object({
  loincNum: z.string(),
  longCommonName: z.string().nullable(),
  orderObs: z.string().nullable(),
})

export type LoincUniveralLabOrders = z.infer<typeof LoincUniveralLabOrdersSchema>

/////////////////////////////////////////
// LOINC UNIVERAL LAB ORDERS PARTIAL SCHEMA
/////////////////////////////////////////

export const LoincUniveralLabOrdersPartialSchema = LoincUniveralLabOrdersSchema.partial()

export type LoincUniveralLabOrdersPartial = z.infer<typeof LoincUniveralLabOrdersPartialSchema>

export default LoincUniveralLabOrdersSchema;
