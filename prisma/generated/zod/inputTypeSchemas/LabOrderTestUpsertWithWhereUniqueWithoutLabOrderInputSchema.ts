import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestUpdateWithoutLabOrderInputSchema } from './LabOrderTestUpdateWithoutLabOrderInputSchema';
import { LabOrderTestUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderTestUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderTestCreateWithoutLabOrderInputSchema } from './LabOrderTestCreateWithoutLabOrderInputSchema';
import { LabOrderTestUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderTestUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderTestUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderTestUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderTestUpsertWithWhereUniqueWithoutLabOrderInputSchema;
