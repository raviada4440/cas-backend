import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutSpecimenManifestEntriesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutSpecimenManifestEntriesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutSpecimenManifestEntriesInputSchema;
