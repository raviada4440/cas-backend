import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderUpdateWithoutProviderEducationInputSchema } from './ProviderUpdateWithoutProviderEducationInputSchema';
import { ProviderUncheckedUpdateWithoutProviderEducationInputSchema } from './ProviderUncheckedUpdateWithoutProviderEducationInputSchema';
import { ProviderCreateWithoutProviderEducationInputSchema } from './ProviderCreateWithoutProviderEducationInputSchema';
import { ProviderUncheckedCreateWithoutProviderEducationInputSchema } from './ProviderUncheckedCreateWithoutProviderEducationInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderUpsertWithoutProviderEducationInputSchema: z.ZodType<Prisma.ProviderUpsertWithoutProviderEducationInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProviderUpdateWithoutProviderEducationInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderEducationInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderEducationInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderEducationInputSchema) ]),
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
});

export default ProviderUpsertWithoutProviderEducationInputSchema;
