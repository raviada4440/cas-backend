import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabOrderStatusesInputSchema } from './LabOrderCreateWithoutLabOrderStatusesInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema';

export const LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabOrderStatusesInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema;
