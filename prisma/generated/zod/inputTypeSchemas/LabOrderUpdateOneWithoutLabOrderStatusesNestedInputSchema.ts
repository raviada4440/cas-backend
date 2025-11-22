import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderStatusesInputSchema } from './LabOrderCreateWithoutLabOrderStatusesInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema';
import { LabOrderUpsertWithoutLabOrderStatusesInputSchema } from './LabOrderUpsertWithoutLabOrderStatusesInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutLabOrderStatusesInputSchema } from './LabOrderUpdateToOneWithWhereWithoutLabOrderStatusesInputSchema';
import { LabOrderUpdateWithoutLabOrderStatusesInputSchema } from './LabOrderUpdateWithoutLabOrderStatusesInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema';

export const LabOrderUpdateOneWithoutLabOrderStatusesNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneWithoutLabOrderStatusesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderStatusesInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutLabOrderStatusesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUpdateWithoutLabOrderStatusesInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderStatusesInputSchema) ]).optional(),
});

export default LabOrderUpdateOneWithoutLabOrderStatusesNestedInputSchema;
