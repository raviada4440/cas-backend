import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationWhereUniqueInputSchema } from './ProviderEducationWhereUniqueInputSchema';
import { ProviderEducationUpdateWithoutProviderInputSchema } from './ProviderEducationUpdateWithoutProviderInputSchema';
import { ProviderEducationUncheckedUpdateWithoutProviderInputSchema } from './ProviderEducationUncheckedUpdateWithoutProviderInputSchema';

export const ProviderEducationUpdateWithWhereUniqueWithoutProviderInputSchema: z.ZodType<Prisma.ProviderEducationUpdateWithWhereUniqueWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderEducationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProviderEducationUpdateWithoutProviderInputSchema), z.lazy(() => ProviderEducationUncheckedUpdateWithoutProviderInputSchema) ]),
});

export default ProviderEducationUpdateWithWhereUniqueWithoutProviderInputSchema;
