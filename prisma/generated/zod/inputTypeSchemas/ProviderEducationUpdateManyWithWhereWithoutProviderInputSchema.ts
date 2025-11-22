import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationScalarWhereInputSchema } from './ProviderEducationScalarWhereInputSchema';
import { ProviderEducationUpdateManyMutationInputSchema } from './ProviderEducationUpdateManyMutationInputSchema';
import { ProviderEducationUncheckedUpdateManyWithoutProviderInputSchema } from './ProviderEducationUncheckedUpdateManyWithoutProviderInputSchema';

export const ProviderEducationUpdateManyWithWhereWithoutProviderInputSchema: z.ZodType<Prisma.ProviderEducationUpdateManyWithWhereWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderEducationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProviderEducationUpdateManyMutationInputSchema), z.lazy(() => ProviderEducationUncheckedUpdateManyWithoutProviderInputSchema) ]),
});

export default ProviderEducationUpdateManyWithWhereWithoutProviderInputSchema;
