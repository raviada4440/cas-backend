import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenScalarWhereInputSchema } from './LabOrderSpecimenScalarWhereInputSchema';
import { LabOrderSpecimenUpdateManyMutationInputSchema } from './LabOrderSpecimenUpdateManyMutationInputSchema';
import { LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderSpecimenUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSpecimenUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSpecimenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderSpecimenUpdateManyMutationInputSchema), z.lazy(() => LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderSpecimenUpdateManyWithWhereWithoutLabOrderInputSchema;
