import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutSpecimenManifestEntriesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutSpecimenManifestEntriesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutSpecimenManifestEntriesInputSchema;
