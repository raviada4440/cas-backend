import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderCreateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema } from './ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';

export const ProviderCreateNestedOneWithoutOrderingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutOrderingProviderLabOrdersInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
});

export default ProviderCreateNestedOneWithoutOrderingProviderLabOrdersInputSchema;
