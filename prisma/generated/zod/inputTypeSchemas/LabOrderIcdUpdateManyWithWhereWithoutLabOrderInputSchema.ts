import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdScalarWhereInputSchema } from './LabOrderIcdScalarWhereInputSchema';
import { LabOrderIcdUpdateManyMutationInputSchema } from './LabOrderIcdUpdateManyMutationInputSchema';
import { LabOrderIcdUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderIcdUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderIcdUpdateManyMutationInputSchema), z.lazy(() => LabOrderIcdUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderIcdUpdateManyWithWhereWithoutLabOrderInputSchema;
