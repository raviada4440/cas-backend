import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderCreateWithoutUserAttributeInputSchema } from './ProviderCreateWithoutUserAttributeInputSchema';
import { ProviderUncheckedCreateWithoutUserAttributeInputSchema } from './ProviderUncheckedCreateWithoutUserAttributeInputSchema';

export const ProviderCreateOrConnectWithoutUserAttributeInputSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutUserAttributeInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderCreateWithoutUserAttributeInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutUserAttributeInputSchema) ]),
});

export default ProviderCreateOrConnectWithoutUserAttributeInputSchema;
