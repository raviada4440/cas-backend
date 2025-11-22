import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';
import { LabOrderUpdateManyMutationInputSchema } from './LabOrderUpdateManyMutationInputSchema';
import { LabOrderUncheckedUpdateManyWithoutLabInputSchema } from './LabOrderUncheckedUpdateManyWithoutLabInputSchema';

export const LabOrderUpdateManyWithWhereWithoutLabInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithWhereWithoutLabInput> = z.strictObject({
  where: z.lazy(() => LabOrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateManyMutationInputSchema), z.lazy(() => LabOrderUncheckedUpdateManyWithoutLabInputSchema) ]),
});

export default LabOrderUpdateManyWithWhereWithoutLabInputSchema;
