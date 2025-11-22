import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderUpdateWithoutUserAttributeInputSchema } from './ProviderUpdateWithoutUserAttributeInputSchema';
import { ProviderUncheckedUpdateWithoutUserAttributeInputSchema } from './ProviderUncheckedUpdateWithoutUserAttributeInputSchema';

export const ProviderUpdateToOneWithWhereWithoutUserAttributeInputSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutUserAttributeInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProviderUpdateWithoutUserAttributeInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutUserAttributeInputSchema) ]),
});

export default ProviderUpdateToOneWithWhereWithoutUserAttributeInputSchema;
