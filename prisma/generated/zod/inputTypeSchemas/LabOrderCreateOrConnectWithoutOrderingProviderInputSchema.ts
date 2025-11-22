import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutOrderingProviderInputSchema } from './LabOrderCreateWithoutOrderingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutOrderingProviderInputSchema } from './LabOrderUncheckedCreateWithoutOrderingProviderInputSchema';

export const LabOrderCreateOrConnectWithoutOrderingProviderInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutOrderingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderingProviderInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutOrderingProviderInputSchema;
