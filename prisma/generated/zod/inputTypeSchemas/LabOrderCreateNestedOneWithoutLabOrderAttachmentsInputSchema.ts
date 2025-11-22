import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutLabOrderAttachmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema;
