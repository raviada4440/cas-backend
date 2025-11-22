import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderCreateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema';

export const ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderCreateWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema) ]),
});

export default ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema;
