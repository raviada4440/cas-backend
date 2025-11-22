import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';
import { LabOrderUpdateManyMutationInputSchema } from './LabOrderUpdateManyMutationInputSchema';
import { LabOrderUncheckedUpdateManyWithoutVersionInputSchema } from './LabOrderUncheckedUpdateManyWithoutVersionInputSchema';

export const LabOrderUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => LabOrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateManyMutationInputSchema), z.lazy(() => LabOrderUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default LabOrderUpdateManyWithWhereWithoutVersionInputSchema;
