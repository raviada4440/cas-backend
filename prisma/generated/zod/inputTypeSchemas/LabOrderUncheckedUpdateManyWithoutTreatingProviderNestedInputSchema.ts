import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutTreatingProviderInputSchema } from './LabOrderCreateWithoutTreatingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutTreatingProviderInputSchema } from './LabOrderUncheckedCreateWithoutTreatingProviderInputSchema';
import { LabOrderCreateOrConnectWithoutTreatingProviderInputSchema } from './LabOrderCreateOrConnectWithoutTreatingProviderInputSchema';
import { LabOrderUpsertWithWhereUniqueWithoutTreatingProviderInputSchema } from './LabOrderUpsertWithWhereUniqueWithoutTreatingProviderInputSchema';
import { LabOrderCreateManyTreatingProviderInputEnvelopeSchema } from './LabOrderCreateManyTreatingProviderInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithWhereUniqueWithoutTreatingProviderInputSchema } from './LabOrderUpdateWithWhereUniqueWithoutTreatingProviderInputSchema';
import { LabOrderUpdateManyWithWhereWithoutTreatingProviderInputSchema } from './LabOrderUpdateManyWithWhereWithoutTreatingProviderInputSchema';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';

export const LabOrderUncheckedUpdateManyWithoutTreatingProviderNestedInputSchema: z.ZodType<Prisma.LabOrderUncheckedUpdateManyWithoutTreatingProviderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderCreateWithoutTreatingProviderInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutTreatingProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutTreatingProviderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutTreatingProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyTreatingProviderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutTreatingProviderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderUpdateManyWithWhereWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUpdateManyWithWhereWithoutTreatingProviderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedUpdateManyWithoutTreatingProviderNestedInputSchema;
