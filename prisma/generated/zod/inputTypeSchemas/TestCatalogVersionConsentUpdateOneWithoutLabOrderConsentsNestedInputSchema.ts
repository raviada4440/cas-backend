import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUpsertWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUpsertWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema';

export const TestCatalogVersionConsentUpdateOneWithoutLabOrderConsentsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateOneWithoutLabOrderConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutLabOrderConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutLabOrderConsentsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionConsentUpsertWithoutLabOrderConsentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionConsentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionConsentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateWithoutLabOrderConsentsInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutLabOrderConsentsInputSchema) ]).optional(),
});

export default TestCatalogVersionConsentUpdateOneWithoutLabOrderConsentsNestedInputSchema;
