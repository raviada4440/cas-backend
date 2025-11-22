import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithoutLabOrderInputSchema } from './LabOrderFormUpdateWithoutLabOrderInputSchema';
import { LabOrderFormUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderFormUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderFormUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderFormUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderFormUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderFormUpdateWithWhereUniqueWithoutLabOrderInputSchema;
