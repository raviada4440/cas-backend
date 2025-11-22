import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutLabOrderStatusesInputSchema } from './LabOrderUpdateWithoutLabOrderStatusesInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutLabOrderStatusesInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutLabOrderStatusesInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutLabOrderStatusesInputSchema;
