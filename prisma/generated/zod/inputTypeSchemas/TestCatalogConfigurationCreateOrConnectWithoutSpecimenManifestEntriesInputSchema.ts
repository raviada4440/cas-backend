import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema;
