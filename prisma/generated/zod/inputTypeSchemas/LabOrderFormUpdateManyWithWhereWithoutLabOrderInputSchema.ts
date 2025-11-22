import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormScalarWhereInputSchema } from './LabOrderFormScalarWhereInputSchema';
import { LabOrderFormUpdateManyMutationInputSchema } from './LabOrderFormUpdateManyMutationInputSchema';
import { LabOrderFormUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderFormUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderFormUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderFormUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderFormUpdateManyMutationInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderFormUpdateManyWithWhereWithoutLabOrderInputSchema;
