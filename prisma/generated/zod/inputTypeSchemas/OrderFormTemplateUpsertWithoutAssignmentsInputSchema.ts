import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateUpdateWithoutAssignmentsInputSchema } from './OrderFormTemplateUpdateWithoutAssignmentsInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema';
import { OrderFormTemplateCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateCreateWithoutAssignmentsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';

export const OrderFormTemplateUpsertWithoutAssignmentsInputSchema: z.ZodType<Prisma.OrderFormTemplateUpsertWithoutAssignmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema) ]),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutAssignmentsInputSchema) ]),
  where: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
});

export default OrderFormTemplateUpsertWithoutAssignmentsInputSchema;
