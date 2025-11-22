import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutLabInputSchema } from './SponsoredTestCreateWithoutLabInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabInputSchema } from './SponsoredTestUncheckedCreateWithoutLabInputSchema';
import { SponsoredTestCreateOrConnectWithoutLabInputSchema } from './SponsoredTestCreateOrConnectWithoutLabInputSchema';
import { SponsoredTestCreateManyLabInputEnvelopeSchema } from './SponsoredTestCreateManyLabInputEnvelopeSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';

export const SponsoredTestUncheckedCreateNestedManyWithoutLabInputSchema: z.ZodType<Prisma.SponsoredTestUncheckedCreateNestedManyWithoutLabInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabInputSchema), z.lazy(() => SponsoredTestCreateWithoutLabInputSchema).array(), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredTestCreateOrConnectWithoutLabInputSchema), z.lazy(() => SponsoredTestCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredTestCreateManyLabInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
});

export default SponsoredTestUncheckedCreateNestedManyWithoutLabInputSchema;
