import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateCreateWithoutAssignmentsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema } from './OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema';
import { OrderFormTemplateUpsertWithoutAssignmentsInputSchema } from './OrderFormTemplateUpsertWithoutAssignmentsInputSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateToOneWithWhereWithoutAssignmentsInputSchema } from './OrderFormTemplateUpdateToOneWithWhereWithoutAssignmentsInputSchema';
import { OrderFormTemplateUpdateWithoutAssignmentsInputSchema } from './OrderFormTemplateUpdateWithoutAssignmentsInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema';

export const OrderFormTemplateUpdateOneRequiredWithoutAssignmentsNestedInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateOneRequiredWithoutAssignmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderFormTemplateCreateOrConnectWithoutAssignmentsInputSchema).optional(),
  upsert: z.lazy(() => OrderFormTemplateUpsertWithoutAssignmentsInputSchema).optional(),
  connect: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateToOneWithWhereWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUpdateWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema) ]).optional(),
});

export default OrderFormTemplateUpdateOneRequiredWithoutAssignmentsNestedInputSchema;
