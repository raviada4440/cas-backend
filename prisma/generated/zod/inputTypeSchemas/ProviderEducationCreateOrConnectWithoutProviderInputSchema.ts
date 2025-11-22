import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationWhereUniqueInputSchema } from './ProviderEducationWhereUniqueInputSchema';
import { ProviderEducationCreateWithoutProviderInputSchema } from './ProviderEducationCreateWithoutProviderInputSchema';
import { ProviderEducationUncheckedCreateWithoutProviderInputSchema } from './ProviderEducationUncheckedCreateWithoutProviderInputSchema';

export const ProviderEducationCreateOrConnectWithoutProviderInputSchema: z.ZodType<Prisma.ProviderEducationCreateOrConnectWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderEducationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderEducationCreateWithoutProviderInputSchema), z.lazy(() => ProviderEducationUncheckedCreateWithoutProviderInputSchema) ]),
});

export default ProviderEducationCreateOrConnectWithoutProviderInputSchema;
