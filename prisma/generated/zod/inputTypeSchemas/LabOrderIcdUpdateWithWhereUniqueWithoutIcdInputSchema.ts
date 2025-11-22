import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdUpdateWithoutIcdInputSchema } from './LabOrderIcdUpdateWithoutIcdInputSchema';
import { LabOrderIcdUncheckedUpdateWithoutIcdInputSchema } from './LabOrderIcdUncheckedUpdateWithoutIcdInputSchema';

export const LabOrderIcdUpdateWithWhereUniqueWithoutIcdInputSchema: z.ZodType<Prisma.LabOrderIcdUpdateWithWhereUniqueWithoutIcdInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderIcdUpdateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUncheckedUpdateWithoutIcdInputSchema) ]),
});

export default LabOrderIcdUpdateWithWhereUniqueWithoutIcdInputSchema;
