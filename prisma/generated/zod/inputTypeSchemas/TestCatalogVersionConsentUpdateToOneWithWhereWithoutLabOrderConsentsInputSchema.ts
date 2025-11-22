import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';
import { TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema';

export const TestCatalogVersionConsentUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateToOneWithWhereWithoutLabOrderConsentsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema;
