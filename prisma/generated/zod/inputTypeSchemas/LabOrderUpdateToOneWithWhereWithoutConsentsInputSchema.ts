import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutConsentsInputSchema } from './LabOrderUpdateWithoutConsentsInputSchema';
import { LabOrderUncheckedUpdateWithoutConsentsInputSchema } from './LabOrderUncheckedUpdateWithoutConsentsInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutConsentsInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutConsentsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutConsentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutConsentsInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutConsentsInputSchema;
