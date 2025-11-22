import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateCreateWithoutAssignmentsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema';

export const OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateOrConnectWithoutAssignmentsInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema) ]),
});

export default OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema;
