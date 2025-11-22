import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';
import { OrderFormTemplateUpdateWithoutAssignmentsInputSchema } from './OrderFormTemplateUpdateWithoutAssignmentsInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema';

export const OrderFormTemplateUpdateToOneWithWhereWithoutAssignmentsInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateToOneWithWhereWithoutAssignmentsInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutAssignmentsInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutAssignmentsInputSchema) ]),
});

export default OrderFormTemplateUpdateToOneWithWhereWithoutAssignmentsInputSchema;
