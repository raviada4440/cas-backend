import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabOrderTestsInputSchema } from './LabOrderCreateWithoutLabOrderTestsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema';

export const LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabOrderTestsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema;
