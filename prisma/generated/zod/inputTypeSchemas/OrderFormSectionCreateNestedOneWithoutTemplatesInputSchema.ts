import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionCreateWithoutTemplatesInputSchema } from './OrderFormSectionCreateWithoutTemplatesInputSchema';
import { OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema } from './OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema';
import { OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema } from './OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';

export const OrderFormSectionCreateNestedOneWithoutTemplatesInputSchema: z.ZodType<Prisma.OrderFormSectionCreateNestedOneWithoutTemplatesInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema).optional(),
  connect: z.lazy(() => OrderFormSectionWhereUniqueInputSchema).optional(),
});

export default OrderFormSectionCreateNestedOneWithoutTemplatesInputSchema;
