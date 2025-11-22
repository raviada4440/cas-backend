import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';

export const TestCatalogVersionConsentCreateNestedOneWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateNestedOneWithoutLabOrderConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionConsentCreateNestedOneWithoutLabOrderConsentsInputSchema;
