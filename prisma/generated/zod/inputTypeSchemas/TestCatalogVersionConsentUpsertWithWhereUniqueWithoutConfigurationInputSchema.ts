import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUpdateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema';

export const TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConfigurationInputSchema;
