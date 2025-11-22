import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusWhereUniqueInputSchema } from './LabOrderStatusWhereUniqueInputSchema';
import { LabOrderStatusUpdateWithoutLabOrderInputSchema } from './LabOrderStatusUpdateWithoutLabOrderInputSchema';
import { LabOrderStatusUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderStatusUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderStatusCreateWithoutLabOrderInputSchema } from './LabOrderStatusCreateWithoutLabOrderInputSchema';
import { LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderStatusUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderStatusUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderStatusWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderStatusUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderStatusCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderStatusUpsertWithWhereUniqueWithoutLabOrderInputSchema;
