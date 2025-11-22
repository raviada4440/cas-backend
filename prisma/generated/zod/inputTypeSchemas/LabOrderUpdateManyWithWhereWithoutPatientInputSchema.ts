import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';
import { LabOrderUpdateManyMutationInputSchema } from './LabOrderUpdateManyMutationInputSchema';
import { LabOrderUncheckedUpdateManyWithoutPatientInputSchema } from './LabOrderUncheckedUpdateManyWithoutPatientInputSchema';

export const LabOrderUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithWhereWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => LabOrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateManyMutationInputSchema), z.lazy(() => LabOrderUncheckedUpdateManyWithoutPatientInputSchema) ]),
});

export default LabOrderUpdateManyWithWhereWithoutPatientInputSchema;
