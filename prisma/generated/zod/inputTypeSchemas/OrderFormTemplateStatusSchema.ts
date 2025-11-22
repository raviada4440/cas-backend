import { z } from 'zod';

export const OrderFormTemplateStatusSchema = z.enum(['DRAFT','ACTIVE','RETIRED']);

export type OrderFormTemplateStatusType = `${z.infer<typeof OrderFormTemplateStatusSchema>}`

export default OrderFormTemplateStatusSchema;
