import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabInputSchema } from './LabOrderCreateWithoutLabInputSchema';
import { LabOrderUncheckedCreateWithoutLabInputSchema } from './LabOrderUncheckedCreateWithoutLabInputSchema';

export const LabOrderCreateOrConnectWithoutLabInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabInputSchema;
