import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutLabOrderSpecimensInputSchema } from './LabOrderUpdateWithoutLabOrderSpecimensInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutLabOrderSpecimensInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutLabOrderSpecimensInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutLabOrderSpecimensInputSchema;
