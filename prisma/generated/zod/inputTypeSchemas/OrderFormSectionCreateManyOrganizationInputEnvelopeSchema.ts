import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionCreateManyOrganizationInputSchema } from './OrderFormSectionCreateManyOrganizationInputSchema';

export const OrderFormSectionCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.OrderFormSectionCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OrderFormSectionCreateManyOrganizationInputSchema), z.lazy(() => OrderFormSectionCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OrderFormSectionCreateManyOrganizationInputEnvelopeSchema;
