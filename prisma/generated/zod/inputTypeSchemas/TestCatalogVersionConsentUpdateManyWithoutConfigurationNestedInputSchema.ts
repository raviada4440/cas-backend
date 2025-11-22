import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema } from './TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentScalarWhereInputSchema } from './TestCatalogVersionConsentScalarWhereInputSchema';

export const TestCatalogVersionConsentUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema), z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionConsentUpdateManyWithoutConfigurationNestedInputSchema;
