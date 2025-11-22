import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutUserAttributeInputSchema } from './ProviderCreateWithoutUserAttributeInputSchema';
import { ProviderUncheckedCreateWithoutUserAttributeInputSchema } from './ProviderUncheckedCreateWithoutUserAttributeInputSchema';
import { ProviderCreateOrConnectWithoutUserAttributeInputSchema } from './ProviderCreateOrConnectWithoutUserAttributeInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';

export const ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema: z.ZodType<Prisma.ProviderUncheckedCreateNestedOneWithoutUserAttributeInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutUserAttributeInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutUserAttributeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutUserAttributeInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
});

export default ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema;
