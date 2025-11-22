import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestScalarWhereInputSchema } from './LabOrderTestScalarWhereInputSchema';
import { LabOrderTestUpdateManyMutationInputSchema } from './LabOrderTestUpdateManyMutationInputSchema';
import { LabOrderTestUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderTestUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderTestUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderTestUpdateManyMutationInputSchema), z.lazy(() => LabOrderTestUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderTestUpdateManyWithWhereWithoutLabOrderInputSchema;
