import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormCreateWithoutLabOrderInputSchema } from './LabOrderFormCreateWithoutLabOrderInputSchema';
import { LabOrderFormUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderFormUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderFormCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderFormCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderFormCreateOrConnectWithoutLabOrderInputSchema;
