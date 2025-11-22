import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutVersionInputSchema } from './LabOrderUpdateWithoutVersionInputSchema';
import { LabOrderUncheckedUpdateWithoutVersionInputSchema } from './LabOrderUncheckedUpdateWithoutVersionInputSchema';

export const LabOrderUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.LabOrderUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutVersionInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default LabOrderUpdateWithWhereUniqueWithoutVersionInputSchema;
