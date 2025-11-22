import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateManySectionInputSchema } from './OrderFormTemplateCreateManySectionInputSchema';

export const OrderFormTemplateCreateManySectionInputEnvelopeSchema: z.ZodType<Prisma.OrderFormTemplateCreateManySectionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OrderFormTemplateCreateManySectionInputSchema), z.lazy(() => OrderFormTemplateCreateManySectionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OrderFormTemplateCreateManySectionInputEnvelopeSchema;
