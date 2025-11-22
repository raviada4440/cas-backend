import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestUpdateWithoutLabOrderInputSchema } from './LabOrderTestUpdateWithoutLabOrderInputSchema';
import { LabOrderTestUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderTestUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderTestUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderTestUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderTestUpdateWithWhereUniqueWithoutLabOrderInputSchema;
