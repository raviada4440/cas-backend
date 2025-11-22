import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabOrderIcdsInputSchema } from './LabOrderCreateWithoutLabOrderIcdsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema';

export const LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabOrderIcdsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema;
