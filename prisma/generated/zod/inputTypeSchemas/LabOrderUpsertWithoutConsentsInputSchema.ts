import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutConsentsInputSchema } from './LabOrderUpdateWithoutConsentsInputSchema';
import { LabOrderUncheckedUpdateWithoutConsentsInputSchema } from './LabOrderUncheckedUpdateWithoutConsentsInputSchema';
import { LabOrderCreateWithoutConsentsInputSchema } from './LabOrderCreateWithoutConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutConsentsInputSchema } from './LabOrderUncheckedCreateWithoutConsentsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutConsentsInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutConsentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConsentsInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutConsentsInputSchema;
