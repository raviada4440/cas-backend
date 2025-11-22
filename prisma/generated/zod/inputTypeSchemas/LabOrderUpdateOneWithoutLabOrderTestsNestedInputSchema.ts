import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderTestsInputSchema } from './LabOrderCreateWithoutLabOrderTestsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema';
import { LabOrderUpsertWithoutLabOrderTestsInputSchema } from './LabOrderUpsertWithoutLabOrderTestsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutLabOrderTestsInputSchema } from './LabOrderUpdateToOneWithWhereWithoutLabOrderTestsInputSchema';
import { LabOrderUpdateWithoutLabOrderTestsInputSchema } from './LabOrderUpdateWithoutLabOrderTestsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema';

export const LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneWithoutLabOrderTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutLabOrderTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUpdateWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema) ]).optional(),
});

export default LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema;
