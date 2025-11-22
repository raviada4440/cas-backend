import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationCreateWithoutProviderInputSchema } from './ProviderEducationCreateWithoutProviderInputSchema';
import { ProviderEducationUncheckedCreateWithoutProviderInputSchema } from './ProviderEducationUncheckedCreateWithoutProviderInputSchema';
import { ProviderEducationCreateOrConnectWithoutProviderInputSchema } from './ProviderEducationCreateOrConnectWithoutProviderInputSchema';
import { ProviderEducationCreateManyProviderInputEnvelopeSchema } from './ProviderEducationCreateManyProviderInputEnvelopeSchema';
import { ProviderEducationWhereUniqueInputSchema } from './ProviderEducationWhereUniqueInputSchema';

export const ProviderEducationUncheckedCreateNestedManyWithoutProviderInputSchema: z.ZodType<Prisma.ProviderEducationUncheckedCreateNestedManyWithoutProviderInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderEducationCreateWithoutProviderInputSchema), z.lazy(() => ProviderEducationCreateWithoutProviderInputSchema).array(), z.lazy(() => ProviderEducationUncheckedCreateWithoutProviderInputSchema), z.lazy(() => ProviderEducationUncheckedCreateWithoutProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderEducationCreateOrConnectWithoutProviderInputSchema), z.lazy(() => ProviderEducationCreateOrConnectWithoutProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderEducationCreateManyProviderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProviderEducationWhereUniqueInputSchema), z.lazy(() => ProviderEducationWhereUniqueInputSchema).array() ]).optional(),
});

export default ProviderEducationUncheckedCreateNestedManyWithoutProviderInputSchema;
