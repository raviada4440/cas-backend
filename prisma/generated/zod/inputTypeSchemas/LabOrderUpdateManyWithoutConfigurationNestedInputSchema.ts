import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutConfigurationInputSchema } from './LabOrderCreateWithoutConfigurationInputSchema';
import { LabOrderUncheckedCreateWithoutConfigurationInputSchema } from './LabOrderUncheckedCreateWithoutConfigurationInputSchema';
import { LabOrderCreateOrConnectWithoutConfigurationInputSchema } from './LabOrderCreateOrConnectWithoutConfigurationInputSchema';
import { LabOrderUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './LabOrderUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { LabOrderCreateManyConfigurationInputEnvelopeSchema } from './LabOrderCreateManyConfigurationInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './LabOrderUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { LabOrderUpdateManyWithWhereWithoutConfigurationInputSchema } from './LabOrderUpdateManyWithWhereWithoutConfigurationInputSchema';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';

export const LabOrderUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConfigurationInputSchema), z.lazy(() => LabOrderCreateWithoutConfigurationInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => LabOrderUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderUpdateManyWithoutConfigurationNestedInputSchema;
