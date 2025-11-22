import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';

export const EnumOrderFormTemplateStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumOrderFormTemplateStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => OrderFormTemplateStatusSchema).optional(),
});

export default EnumOrderFormTemplateStatusFieldUpdateOperationsInputSchema;
