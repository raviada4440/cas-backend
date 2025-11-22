import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdUpdateWithoutLabOrderInputSchema } from './LabOrderIcdUpdateWithoutLabOrderInputSchema';
import { LabOrderIcdUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderIcdCreateWithoutLabOrderInputSchema } from './LabOrderIcdCreateWithoutLabOrderInputSchema';
import { LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderIcdUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderIcdUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderIcdUpsertWithWhereUniqueWithoutLabOrderInputSchema;
