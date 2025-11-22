import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionWhereInputSchema } from './OrderFormSectionWhereInputSchema';
import { OrderFormSectionUpdateWithoutTemplatesInputSchema } from './OrderFormSectionUpdateWithoutTemplatesInputSchema';
import { OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema } from './OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema';

export const OrderFormSectionUpdateToOneWithWhereWithoutTemplatesInputSchema: z.ZodType<Prisma.OrderFormSectionUpdateToOneWithWhereWithoutTemplatesInput> = z.strictObject({
  where: z.lazy(() => OrderFormSectionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderFormSectionUpdateWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema) ]),
});

export default OrderFormSectionUpdateToOneWithWhereWithoutTemplatesInputSchema;
