import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderCreateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema';

export const ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderCreateWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema) ]),
});

export default ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema;
