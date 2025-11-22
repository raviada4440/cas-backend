import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithoutVersionInputSchema } from './TestCatalogVersionConsentUpdateWithoutVersionInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogVersionConsentUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateWithWhereUniqueWithoutVersionInputSchema;
