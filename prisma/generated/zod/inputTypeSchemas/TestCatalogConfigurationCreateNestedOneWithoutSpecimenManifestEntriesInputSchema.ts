import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutSpecimenManifestEntriesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutSpecimenManifestEntriesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutSpecimenManifestEntriesInputSchema;
