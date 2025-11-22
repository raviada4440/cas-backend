import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutLabInputSchema } from './LabOrderUpdateWithoutLabInputSchema';
import { LabOrderUncheckedUpdateWithoutLabInputSchema } from './LabOrderUncheckedUpdateWithoutLabInputSchema';
import { LabOrderCreateWithoutLabInputSchema } from './LabOrderCreateWithoutLabInputSchema';
import { LabOrderUncheckedCreateWithoutLabInputSchema } from './LabOrderUncheckedCreateWithoutLabInputSchema';

export const LabOrderUpsertWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.LabOrderUpsertWithWhereUniqueWithoutLabInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabInputSchema) ]),
});

export default LabOrderUpsertWithWhereUniqueWithoutLabInputSchema;
