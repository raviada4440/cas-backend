import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutOrderingProviderInputSchema } from './LabOrderCreateWithoutOrderingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutOrderingProviderInputSchema } from './LabOrderUncheckedCreateWithoutOrderingProviderInputSchema';
import { LabOrderCreateOrConnectWithoutOrderingProviderInputSchema } from './LabOrderCreateOrConnectWithoutOrderingProviderInputSchema';
import { LabOrderUpsertWithWhereUniqueWithoutOrderingProviderInputSchema } from './LabOrderUpsertWithWhereUniqueWithoutOrderingProviderInputSchema';
import { LabOrderCreateManyOrderingProviderInputEnvelopeSchema } from './LabOrderCreateManyOrderingProviderInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithWhereUniqueWithoutOrderingProviderInputSchema } from './LabOrderUpdateWithWhereUniqueWithoutOrderingProviderInputSchema';
import { LabOrderUpdateManyWithWhereWithoutOrderingProviderInputSchema } from './LabOrderUpdateManyWithWhereWithoutOrderingProviderInputSchema';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';

export const LabOrderUncheckedUpdateManyWithoutOrderingProviderNestedInputSchema: z.ZodType<Prisma.LabOrderUncheckedUpdateManyWithoutOrderingProviderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderCreateWithoutOrderingProviderInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderingProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutOrderingProviderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutOrderingProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyOrderingProviderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutOrderingProviderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderUpdateManyWithWhereWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUpdateManyWithWhereWithoutOrderingProviderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedUpdateManyWithoutOrderingProviderNestedInputSchema;
