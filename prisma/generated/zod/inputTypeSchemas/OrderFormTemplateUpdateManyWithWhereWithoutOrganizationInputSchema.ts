import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateScalarWhereInputSchema } from './OrderFormTemplateScalarWhereInputSchema';
import { OrderFormTemplateUpdateManyMutationInputSchema } from './OrderFormTemplateUpdateManyMutationInputSchema';
import { OrderFormTemplateUncheckedUpdateManyWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedUpdateManyWithoutOrganizationInputSchema';

export const OrderFormTemplateUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderFormTemplateUpdateManyMutationInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default OrderFormTemplateUpdateManyWithWhereWithoutOrganizationInputSchema;
