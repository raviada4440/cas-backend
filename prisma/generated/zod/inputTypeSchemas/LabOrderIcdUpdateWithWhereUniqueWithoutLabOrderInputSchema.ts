import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdUpdateWithoutLabOrderInputSchema } from './LabOrderIcdUpdateWithoutLabOrderInputSchema';
import { LabOrderIcdUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderIcdUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderIcdUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderIcdUpdateWithWhereUniqueWithoutLabOrderInputSchema;
