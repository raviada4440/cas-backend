import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateCreateWithoutAssignmentsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema } from './OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';

export const OrderFormTemplateCreateNestedOneWithoutAssignmentsInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateNestedOneWithoutAssignmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema).optional(),
  connect: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).optional(),
});

export default OrderFormTemplateCreateNestedOneWithoutAssignmentsInputSchema;
