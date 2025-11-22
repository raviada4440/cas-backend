import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusScalarWhereInputSchema } from './LabOrderStatusScalarWhereInputSchema';
import { LabOrderStatusUpdateManyMutationInputSchema } from './LabOrderStatusUpdateManyMutationInputSchema';
import { LabOrderStatusUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderStatusUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderStatusUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderStatusUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderStatusScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderStatusUpdateManyMutationInputSchema), z.lazy(() => LabOrderStatusUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderStatusUpdateManyWithWhereWithoutLabOrderInputSchema;
