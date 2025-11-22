import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderIcdsInputSchema } from './LabOrderCreateWithoutLabOrderIcdsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema';
import { LabOrderUpsertWithoutLabOrderIcdsInputSchema } from './LabOrderUpsertWithoutLabOrderIcdsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema } from './LabOrderUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema';
import { LabOrderUpdateWithoutLabOrderIcdsInputSchema } from './LabOrderUpdateWithoutLabOrderIcdsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema';

export const LabOrderUpdateOneWithoutLabOrderIcdsNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneWithoutLabOrderIcdsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutLabOrderIcdsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUpdateWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema) ]).optional(),
});

export default LabOrderUpdateOneWithoutLabOrderIcdsNestedInputSchema;
