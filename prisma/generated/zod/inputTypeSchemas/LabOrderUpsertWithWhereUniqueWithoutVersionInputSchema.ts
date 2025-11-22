import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutVersionInputSchema } from './LabOrderUpdateWithoutVersionInputSchema';
import { LabOrderUncheckedUpdateWithoutVersionInputSchema } from './LabOrderUncheckedUpdateWithoutVersionInputSchema';
import { LabOrderCreateWithoutVersionInputSchema } from './LabOrderCreateWithoutVersionInputSchema';
import { LabOrderUncheckedCreateWithoutVersionInputSchema } from './LabOrderUncheckedCreateWithoutVersionInputSchema';

export const LabOrderUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.LabOrderUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutVersionInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutVersionInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutVersionInputSchema) ]),
});

export default LabOrderUpsertWithWhereUniqueWithoutVersionInputSchema;
