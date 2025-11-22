import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabCreateWithoutLabOrdersInputSchema } from './LabCreateWithoutLabOrdersInputSchema';
import { LabUncheckedCreateWithoutLabOrdersInputSchema } from './LabUncheckedCreateWithoutLabOrdersInputSchema';
import { LabCreateOrConnectWithoutLabOrdersInputSchema } from './LabCreateOrConnectWithoutLabOrdersInputSchema';
import { LabUpsertWithoutLabOrdersInputSchema } from './LabUpsertWithoutLabOrdersInputSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';
import { LabUpdateToOneWithWhereWithoutLabOrdersInputSchema } from './LabUpdateToOneWithWhereWithoutLabOrdersInputSchema';
import { LabUpdateWithoutLabOrdersInputSchema } from './LabUpdateWithoutLabOrdersInputSchema';
import { LabUncheckedUpdateWithoutLabOrdersInputSchema } from './LabUncheckedUpdateWithoutLabOrdersInputSchema';

export const LabUpdateOneWithoutLabOrdersNestedInputSchema: z.ZodType<Prisma.LabUpdateOneWithoutLabOrdersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabCreateWithoutLabOrdersInputSchema), z.lazy(() => LabUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  upsert: z.lazy(() => LabUpsertWithoutLabOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabUpdateToOneWithWhereWithoutLabOrdersInputSchema), z.lazy(() => LabUpdateWithoutLabOrdersInputSchema), z.lazy(() => LabUncheckedUpdateWithoutLabOrdersInputSchema) ]).optional(),
});

export default LabUpdateOneWithoutLabOrdersNestedInputSchema;
