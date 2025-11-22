import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithoutLabOrderInputSchema } from './LabOrderFormUpdateWithoutLabOrderInputSchema';
import { LabOrderFormUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderFormUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderFormCreateWithoutLabOrderInputSchema } from './LabOrderFormCreateWithoutLabOrderInputSchema';
import { LabOrderFormUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderFormUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderFormUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderFormUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderFormUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderFormUpsertWithWhereUniqueWithoutLabOrderInputSchema;
