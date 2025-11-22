import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutLabInputSchema } from './LabOrderUpdateWithoutLabInputSchema';
import { LabOrderUncheckedUpdateWithoutLabInputSchema } from './LabOrderUncheckedUpdateWithoutLabInputSchema';

export const LabOrderUpdateWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.LabOrderUpdateWithWhereUniqueWithoutLabInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabInputSchema) ]),
});

export default LabOrderUpdateWithWhereUniqueWithoutLabInputSchema;
