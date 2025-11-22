import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';
import { LabCreateWithoutLabOrdersInputSchema } from './LabCreateWithoutLabOrdersInputSchema';
import { LabUncheckedCreateWithoutLabOrdersInputSchema } from './LabUncheckedCreateWithoutLabOrdersInputSchema';

export const LabCreateOrConnectWithoutLabOrdersInputSchema: z.ZodType<Prisma.LabCreateOrConnectWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => LabWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabCreateWithoutLabOrdersInputSchema), z.lazy(() => LabUncheckedCreateWithoutLabOrdersInputSchema) ]),
});

export default LabCreateOrConnectWithoutLabOrdersInputSchema;
