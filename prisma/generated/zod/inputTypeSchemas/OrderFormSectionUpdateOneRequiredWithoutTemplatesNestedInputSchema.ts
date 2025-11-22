import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionCreateWithoutTemplatesInputSchema } from './OrderFormSectionCreateWithoutTemplatesInputSchema';
import { OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema } from './OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema';
import { OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema } from './OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema';
import { OrderFormSectionUpsertWithoutTemplatesInputSchema } from './OrderFormSectionUpsertWithoutTemplatesInputSchema';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';
import { OrderFormSectionUpdateToOneWithWhereWithoutTemplatesInputSchema } from './OrderFormSectionUpdateToOneWithWhereWithoutTemplatesInputSchema';
import { OrderFormSectionUpdateWithoutTemplatesInputSchema } from './OrderFormSectionUpdateWithoutTemplatesInputSchema';
import { OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema } from './OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema';

export const OrderFormSectionUpdateOneRequiredWithoutTemplatesNestedInputSchema: z.ZodType<Prisma.OrderFormSectionUpdateOneRequiredWithoutTemplatesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderFormSectionCreateOrConnectWithoutTemplatesInputSchema).optional(),
  upsert: z.lazy(() => OrderFormSectionUpsertWithoutTemplatesInputSchema).optional(),
  connect: z.lazy(() => OrderFormSectionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderFormSectionUpdateToOneWithWhereWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUpdateWithoutTemplatesInputSchema), z.lazy(() => OrderFormSectionUncheckedUpdateWithoutTemplatesInputSchema) ]).optional(),
});

export default OrderFormSectionUpdateOneRequiredWithoutTemplatesNestedInputSchema;
