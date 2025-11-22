import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdScalarWhereInputSchema } from './LabOrderIcdScalarWhereInputSchema';
import { LabOrderIcdUpdateManyMutationInputSchema } from './LabOrderIcdUpdateManyMutationInputSchema';
import { LabOrderIcdUncheckedUpdateManyWithoutIcdInputSchema } from './LabOrderIcdUncheckedUpdateManyWithoutIcdInputSchema';

export const LabOrderIcdUpdateManyWithWhereWithoutIcdInputSchema: z.ZodType<Prisma.LabOrderIcdUpdateManyWithWhereWithoutIcdInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderIcdUpdateManyMutationInputSchema), z.lazy(() => LabOrderIcdUncheckedUpdateManyWithoutIcdInputSchema) ]),
});

export default LabOrderIcdUpdateManyWithWhereWithoutIcdInputSchema;
