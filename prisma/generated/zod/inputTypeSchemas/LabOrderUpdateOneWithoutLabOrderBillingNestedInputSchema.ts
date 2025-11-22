import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderBillingInputSchema } from './LabOrderCreateWithoutLabOrderBillingInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema';
import { LabOrderUpsertWithoutLabOrderBillingInputSchema } from './LabOrderUpsertWithoutLabOrderBillingInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutLabOrderBillingInputSchema } from './LabOrderUpdateToOneWithWhereWithoutLabOrderBillingInputSchema';
import { LabOrderUpdateWithoutLabOrderBillingInputSchema } from './LabOrderUpdateWithoutLabOrderBillingInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema';

export const LabOrderUpdateOneWithoutLabOrderBillingNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneWithoutLabOrderBillingNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutLabOrderBillingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUpdateWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema) ]).optional(),
});

export default LabOrderUpdateOneWithoutLabOrderBillingNestedInputSchema;
