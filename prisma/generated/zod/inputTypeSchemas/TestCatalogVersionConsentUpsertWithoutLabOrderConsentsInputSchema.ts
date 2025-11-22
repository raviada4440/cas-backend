import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';

export const TestCatalogVersionConsentUpsertWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpsertWithoutLabOrderConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional(),
});

export default TestCatalogVersionConsentUpsertWithoutLabOrderConsentsInputSchema;
