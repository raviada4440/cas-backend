import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutLabOrderSpecimensInputSchema } from './LabOrderUpdateWithoutLabOrderSpecimensInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema';
import { LabOrderCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderCreateWithoutLabOrderSpecimensInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutLabOrderSpecimensInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutLabOrderSpecimensInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutLabOrderSpecimensInputSchema;
