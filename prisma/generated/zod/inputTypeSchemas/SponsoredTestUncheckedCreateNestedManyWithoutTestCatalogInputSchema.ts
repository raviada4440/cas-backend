import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutTestCatalogInputSchema } from './SponsoredTestCreateWithoutTestCatalogInputSchema';
import { SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema';
import { SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema } from './SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema';
import { SponsoredTestCreateManyTestCatalogInputEnvelopeSchema } from './SponsoredTestCreateManyTestCatalogInputEnvelopeSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';

export const SponsoredTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.SponsoredTestUncheckedCreateNestedManyWithoutTestCatalogInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
});

export default SponsoredTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema;
