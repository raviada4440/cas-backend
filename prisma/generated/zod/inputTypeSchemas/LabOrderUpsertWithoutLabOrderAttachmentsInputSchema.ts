import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUpdateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutLabOrderAttachmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutLabOrderAttachmentsInputSchema;
