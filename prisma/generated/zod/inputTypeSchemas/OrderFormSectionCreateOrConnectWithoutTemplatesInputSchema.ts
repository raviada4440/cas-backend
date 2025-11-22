import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';
import { OrderFormSectionCreateWithoutTemplatesInputSchema } from './OrderFormSectionCreateWithoutTemplatesInputSchema';
import { OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema } from './OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema';

export const OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema: z.ZodType<Prisma.OrderFormSectionCreateOrConnectWithoutTemplatesInput> = z.strictObject({
  where: z.lazy(() => OrderFormSectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema) ]),
});

export default OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema;
