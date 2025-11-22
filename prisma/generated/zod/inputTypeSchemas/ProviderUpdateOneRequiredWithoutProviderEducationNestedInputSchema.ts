import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutProviderEducationInputSchema } from './ProviderCreateWithoutProviderEducationInputSchema';
import { ProviderUncheckedCreateWithoutProviderEducationInputSchema } from './ProviderUncheckedCreateWithoutProviderEducationInputSchema';
import { ProviderCreateOrConnectWithoutProviderEducationInputSchema } from './ProviderCreateOrConnectWithoutProviderEducationInputSchema';
import { ProviderUpsertWithoutProviderEducationInputSchema } from './ProviderUpsertWithoutProviderEducationInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderUpdateToOneWithWhereWithoutProviderEducationInputSchema } from './ProviderUpdateToOneWithWhereWithoutProviderEducationInputSchema';
import { ProviderUpdateWithoutProviderEducationInputSchema } from './ProviderUpdateWithoutProviderEducationInputSchema';
import { ProviderUncheckedUpdateWithoutProviderEducationInputSchema } from './ProviderUncheckedUpdateWithoutProviderEducationInputSchema';

export const ProviderUpdateOneRequiredWithoutProviderEducationNestedInputSchema: z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutProviderEducationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderEducationInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderEducationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutProviderEducationInputSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutProviderEducationInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProviderUpdateToOneWithWhereWithoutProviderEducationInputSchema), z.lazy(() => ProviderUpdateWithoutProviderEducationInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderEducationInputSchema) ]).optional(),
});

export default ProviderUpdateOneRequiredWithoutProviderEducationNestedInputSchema;
