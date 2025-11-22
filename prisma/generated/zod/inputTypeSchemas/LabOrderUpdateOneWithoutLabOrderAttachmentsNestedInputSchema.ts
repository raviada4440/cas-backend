import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUpsertWithoutLabOrderAttachmentsInputSchema } from './LabOrderUpsertWithoutLabOrderAttachmentsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema } from './LabOrderUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUpdateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUpdateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema';

export const LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderAttachmentsInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutLabOrderAttachmentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUpdateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema) ]).optional(),
});

export default LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema;
