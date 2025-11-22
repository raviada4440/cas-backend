import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutConsentsInputSchema } from './LabOrderCreateWithoutConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutConsentsInputSchema } from './LabOrderUncheckedCreateWithoutConsentsInputSchema';

export const LabOrderCreateOrConnectWithoutConsentsInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutConsentsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConsentsInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutConsentsInputSchema;
