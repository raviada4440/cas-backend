import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUpsertWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUpsertWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema';

export const TestCatalogConfigurationUpdateOneRequiredWithoutSpecimenManifestEntriesNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneRequiredWithoutSpecimenManifestEntriesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutSpecimenManifestEntriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutSpecimenManifestEntriesInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutSpecimenManifestEntriesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutSpecimenManifestEntriesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutSpecimenManifestEntriesInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneRequiredWithoutSpecimenManifestEntriesNestedInputSchema;
