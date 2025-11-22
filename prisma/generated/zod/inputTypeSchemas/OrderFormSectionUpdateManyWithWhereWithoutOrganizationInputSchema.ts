import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionScalarWhereInputSchema } from './OrderFormSectionScalarWhereInputSchema';
import { OrderFormSectionUpdateManyMutationInputSchema } from './OrderFormSectionUpdateManyMutationInputSchema';
import { OrderFormSectionUncheckedUpdateManyWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedUpdateManyWithoutOrganizationInputSchema';

export const OrderFormSectionUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormSectionUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormSectionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderFormSectionUpdateManyMutationInputSchema), z.lazy(() => OrderFormSectionUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default OrderFormSectionUpdateManyWithWhereWithoutOrganizationInputSchema;
