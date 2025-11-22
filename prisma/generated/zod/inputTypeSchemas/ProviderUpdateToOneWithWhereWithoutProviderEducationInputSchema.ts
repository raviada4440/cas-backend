import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderUpdateWithoutProviderEducationInputSchema } from './ProviderUpdateWithoutProviderEducationInputSchema';
import { ProviderUncheckedUpdateWithoutProviderEducationInputSchema } from './ProviderUncheckedUpdateWithoutProviderEducationInputSchema';

export const ProviderUpdateToOneWithWhereWithoutProviderEducationInputSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutProviderEducationInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProviderUpdateWithoutProviderEducationInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderEducationInputSchema) ]),
});

export default ProviderUpdateToOneWithWhereWithoutProviderEducationInputSchema;
