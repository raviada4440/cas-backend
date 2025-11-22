import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutProviderEducationInputSchema } from './ProviderCreateWithoutProviderEducationInputSchema';
import { ProviderUncheckedCreateWithoutProviderEducationInputSchema } from './ProviderUncheckedCreateWithoutProviderEducationInputSchema';
import { ProviderCreateOrConnectWithoutProviderEducationInputSchema } from './ProviderCreateOrConnectWithoutProviderEducationInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';

export const ProviderCreateNestedOneWithoutProviderEducationInputSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutProviderEducationInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderEducationInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderEducationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutProviderEducationInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
});

export default ProviderCreateNestedOneWithoutProviderEducationInputSchema;
