import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateScalarWhereInputSchema } from './OrderFormTemplateScalarWhereInputSchema';
import { OrderFormTemplateUpdateManyMutationInputSchema } from './OrderFormTemplateUpdateManyMutationInputSchema';
import { OrderFormTemplateUncheckedUpdateManyWithoutSectionInputSchema } from './OrderFormTemplateUncheckedUpdateManyWithoutSectionInputSchema';

export const OrderFormTemplateUpdateManyWithWhereWithoutSectionInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateManyWithWhereWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderFormTemplateUpdateManyMutationInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateManyWithoutSectionInputSchema) ]),
});

export default OrderFormTemplateUpdateManyWithWhereWithoutSectionInputSchema;
