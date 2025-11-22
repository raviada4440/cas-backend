import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutTreatingProviderInputSchema } from './LabOrderCreateWithoutTreatingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutTreatingProviderInputSchema } from './LabOrderUncheckedCreateWithoutTreatingProviderInputSchema';

export const LabOrderCreateOrConnectWithoutTreatingProviderInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutTreatingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutTreatingProviderInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutTreatingProviderInputSchema;
