import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema';

export const TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema) ]),
});

export default TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema;
