import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderCreateWithoutProviderEducationInputSchema } from './ProviderCreateWithoutProviderEducationInputSchema';
import { ProviderUncheckedCreateWithoutProviderEducationInputSchema } from './ProviderUncheckedCreateWithoutProviderEducationInputSchema';

export const ProviderCreateOrConnectWithoutProviderEducationInputSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutProviderEducationInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderEducationInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderEducationInputSchema) ]),
});

export default ProviderCreateOrConnectWithoutProviderEducationInputSchema;
