import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestCreateWithoutLabOrderInputSchema } from './LabOrderTestCreateWithoutLabOrderInputSchema';
import { LabOrderTestUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderTestUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderTestCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderTestCreateOrConnectWithoutLabOrderInputSchema;
