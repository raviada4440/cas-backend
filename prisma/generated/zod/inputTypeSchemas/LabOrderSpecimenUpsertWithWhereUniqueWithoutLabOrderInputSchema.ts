import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenWhereUniqueInputSchema } from './LabOrderSpecimenWhereUniqueInputSchema';
import { LabOrderSpecimenUpdateWithoutLabOrderInputSchema } from './LabOrderSpecimenUpdateWithoutLabOrderInputSchema';
import { LabOrderSpecimenUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderSpecimenCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenCreateWithoutLabOrderInputSchema';
import { LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderSpecimenUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSpecimenUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderSpecimenUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderSpecimenCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderSpecimenUpsertWithWhereUniqueWithoutLabOrderInputSchema;
