import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';
import { TestCatalogVersionSpecimenCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema;
