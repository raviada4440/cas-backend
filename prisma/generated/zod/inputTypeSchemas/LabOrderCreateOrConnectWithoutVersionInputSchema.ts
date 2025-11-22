import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutVersionInputSchema } from './LabOrderCreateWithoutVersionInputSchema';
import { LabOrderUncheckedCreateWithoutVersionInputSchema } from './LabOrderUncheckedCreateWithoutVersionInputSchema';

export const LabOrderCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutVersionInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutVersionInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutVersionInputSchema;
