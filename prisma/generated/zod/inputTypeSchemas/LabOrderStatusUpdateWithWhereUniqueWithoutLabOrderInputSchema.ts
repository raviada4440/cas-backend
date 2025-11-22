import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusWhereUniqueInputSchema } from './LabOrderStatusWhereUniqueInputSchema';
import { LabOrderStatusUpdateWithoutLabOrderInputSchema } from './LabOrderStatusUpdateWithoutLabOrderInputSchema';
import { LabOrderStatusUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderStatusUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderStatusUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderStatusUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderStatusWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderStatusUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderStatusUpdateWithWhereUniqueWithoutLabOrderInputSchema;
