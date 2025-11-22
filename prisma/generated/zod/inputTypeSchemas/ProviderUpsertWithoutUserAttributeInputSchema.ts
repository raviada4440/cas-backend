import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderUpdateWithoutUserAttributeInputSchema } from './ProviderUpdateWithoutUserAttributeInputSchema';
import { ProviderUncheckedUpdateWithoutUserAttributeInputSchema } from './ProviderUncheckedUpdateWithoutUserAttributeInputSchema';
import { ProviderCreateWithoutUserAttributeInputSchema } from './ProviderCreateWithoutUserAttributeInputSchema';
import { ProviderUncheckedCreateWithoutUserAttributeInputSchema } from './ProviderUncheckedCreateWithoutUserAttributeInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderUpsertWithoutUserAttributeInputSchema: z.ZodType<Prisma.ProviderUpsertWithoutUserAttributeInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProviderUpdateWithoutUserAttributeInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutUserAttributeInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderCreateWithoutUserAttributeInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutUserAttributeInputSchema) ]),
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
});

export default ProviderUpsertWithoutUserAttributeInputSchema;
