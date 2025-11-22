import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestCreateWithoutLabOrderInputSchema } from './LabOrderTestCreateWithoutLabOrderInputSchema';
import { LabOrderTestUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderTestUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderTestCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderTestCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderTestCreateManyLabOrderInputEnvelopeSchema } from './LabOrderTestCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';

export const LabOrderTestCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderTestUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderTestCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderTestCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderTestCreateNestedManyWithoutLabOrderInputSchema;
