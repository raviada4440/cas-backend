import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdUpdateWithoutIcdInputSchema } from './LabOrderIcdUpdateWithoutIcdInputSchema';
import { LabOrderIcdUncheckedUpdateWithoutIcdInputSchema } from './LabOrderIcdUncheckedUpdateWithoutIcdInputSchema';
import { LabOrderIcdCreateWithoutIcdInputSchema } from './LabOrderIcdCreateWithoutIcdInputSchema';
import { LabOrderIcdUncheckedCreateWithoutIcdInputSchema } from './LabOrderIcdUncheckedCreateWithoutIcdInputSchema';

export const LabOrderIcdUpsertWithWhereUniqueWithoutIcdInputSchema: z.ZodType<Prisma.LabOrderIcdUpsertWithWhereUniqueWithoutIcdInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderIcdUpdateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUncheckedUpdateWithoutIcdInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutIcdInputSchema) ]),
});

export default LabOrderIcdUpsertWithWhereUniqueWithoutIcdInputSchema;
