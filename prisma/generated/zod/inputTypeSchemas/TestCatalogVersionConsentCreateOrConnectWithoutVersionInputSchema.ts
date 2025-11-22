import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentCreateWithoutVersionInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema;
