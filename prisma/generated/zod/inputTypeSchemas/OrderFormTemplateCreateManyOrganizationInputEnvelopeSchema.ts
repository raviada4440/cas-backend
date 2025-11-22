import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateManyOrganizationInputSchema } from './OrderFormTemplateCreateManyOrganizationInputSchema';

export const OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.OrderFormTemplateCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OrderFormTemplateCreateManyOrganizationInputSchema), z.lazy(() => OrderFormTemplateCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema;
