import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationWhereUniqueInputSchema } from './ProviderEducationWhereUniqueInputSchema';
import { ProviderEducationUpdateWithoutProviderInputSchema } from './ProviderEducationUpdateWithoutProviderInputSchema';
import { ProviderEducationUncheckedUpdateWithoutProviderInputSchema } from './ProviderEducationUncheckedUpdateWithoutProviderInputSchema';
import { ProviderEducationCreateWithoutProviderInputSchema } from './ProviderEducationCreateWithoutProviderInputSchema';
import { ProviderEducationUncheckedCreateWithoutProviderInputSchema } from './ProviderEducationUncheckedCreateWithoutProviderInputSchema';

export const ProviderEducationUpsertWithWhereUniqueWithoutProviderInputSchema: z.ZodType<Prisma.ProviderEducationUpsertWithWhereUniqueWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderEducationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProviderEducationUpdateWithoutProviderInputSchema), z.lazy(() => ProviderEducationUncheckedUpdateWithoutProviderInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderEducationCreateWithoutProviderInputSchema), z.lazy(() => ProviderEducationUncheckedCreateWithoutProviderInputSchema) ]),
});

export default ProviderEducationUpsertWithWhereUniqueWithoutProviderInputSchema;
