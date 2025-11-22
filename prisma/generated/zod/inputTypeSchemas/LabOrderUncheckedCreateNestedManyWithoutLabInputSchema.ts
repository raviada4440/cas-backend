import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabInputSchema } from './LabOrderCreateWithoutLabInputSchema';
import { LabOrderUncheckedCreateWithoutLabInputSchema } from './LabOrderUncheckedCreateWithoutLabInputSchema';
import { LabOrderCreateOrConnectWithoutLabInputSchema } from './LabOrderCreateOrConnectWithoutLabInputSchema';
import { LabOrderCreateManyLabInputEnvelopeSchema } from './LabOrderCreateManyLabInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderUncheckedCreateNestedManyWithoutLabInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateNestedManyWithoutLabInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabInputSchema), z.lazy(() => LabOrderCreateWithoutLabInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutLabInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutLabInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyLabInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedCreateNestedManyWithoutLabInputSchema;
