import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutLabOrderStatusesInputSchema } from './LabOrderUpdateWithoutLabOrderStatusesInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema';
import { LabOrderCreateWithoutLabOrderStatusesInputSchema } from './LabOrderCreateWithoutLabOrderStatusesInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutLabOrderStatusesInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutLabOrderStatusesInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutLabOrderStatusesInputSchema;
