import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderStatusesInputSchema } from './LabOrderCreateWithoutLabOrderStatusesInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutLabOrderStatusesInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutLabOrderStatusesInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutLabOrderStatusesInputSchema;
