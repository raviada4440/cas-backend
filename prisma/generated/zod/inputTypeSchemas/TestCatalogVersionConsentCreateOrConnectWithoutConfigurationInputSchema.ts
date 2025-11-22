import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema';

export const TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema;
