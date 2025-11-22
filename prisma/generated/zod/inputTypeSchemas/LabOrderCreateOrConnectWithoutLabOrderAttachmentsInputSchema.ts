import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema';

export const LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabOrderAttachmentsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema;
