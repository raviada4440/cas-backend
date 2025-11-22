import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithoutVersionInputSchema } from './TestCatalogVersionConsentUpdateWithoutVersionInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogVersionConsentCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentCreateWithoutVersionInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionConsentUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionConsentUpsertWithWhereUniqueWithoutVersionInputSchema;
