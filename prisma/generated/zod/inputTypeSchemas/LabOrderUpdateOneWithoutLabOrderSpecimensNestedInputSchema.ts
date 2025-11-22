import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderCreateWithoutLabOrderSpecimensInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema';
import { LabOrderUpsertWithoutLabOrderSpecimensInputSchema } from './LabOrderUpsertWithoutLabOrderSpecimensInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutLabOrderSpecimensInputSchema } from './LabOrderUpdateToOneWithWhereWithoutLabOrderSpecimensInputSchema';
import { LabOrderUpdateWithoutLabOrderSpecimensInputSchema } from './LabOrderUpdateWithoutLabOrderSpecimensInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema';

export const LabOrderUpdateOneWithoutLabOrderSpecimensNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneWithoutLabOrderSpecimensNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutLabOrderSpecimensInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUpdateWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderSpecimensInputSchema) ]).optional(),
});

export default LabOrderUpdateOneWithoutLabOrderSpecimensNestedInputSchema;
