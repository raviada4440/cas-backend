import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderCreateWithoutLabOrderSpecimensInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema';

export const LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabOrderSpecimensInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema;
