import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenWhereUniqueInputSchema } from './LabOrderSpecimenWhereUniqueInputSchema';
import { LabOrderSpecimenUpdateWithoutLabOrderInputSchema } from './LabOrderSpecimenUpdateWithoutLabOrderInputSchema';
import { LabOrderSpecimenUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderSpecimenUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSpecimenUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderSpecimenUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderSpecimenUpdateWithWhereUniqueWithoutLabOrderInputSchema;
