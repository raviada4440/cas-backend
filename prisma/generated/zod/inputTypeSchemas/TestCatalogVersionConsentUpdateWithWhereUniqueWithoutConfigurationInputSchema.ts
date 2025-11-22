import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUpdateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema';

export const TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConfigurationInputSchema;
