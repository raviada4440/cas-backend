import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionUpdateWithoutTemplatesInputSchema } from './OrderFormSectionUpdateWithoutTemplatesInputSchema';
import { OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema } from './OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema';
import { OrderFormSectionCreateWithoutTemplatesInputSchema } from './OrderFormSectionCreateWithoutTemplatesInputSchema';
import { OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema } from './OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema';
import { OrderFormSectionWhereInputSchema } from './OrderFormSectionWhereInputSchema';

export const OrderFormSectionUpsertWithoutTemplatesInputSchema: z.ZodType<Prisma.OrderFormSectionUpsertWithoutTemplatesInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrderFormSectionUpdateWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema) ]),
  where: z.lazy(() => OrderFormSectionWhereInputSchema).optional(),
});

export default OrderFormSectionUpsertWithoutTemplatesInputSchema;
