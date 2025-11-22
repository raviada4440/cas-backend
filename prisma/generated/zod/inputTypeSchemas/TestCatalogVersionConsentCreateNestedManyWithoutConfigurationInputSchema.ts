import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema';
import { TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema } from './TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';

export const TestCatalogVersionConsentCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionConsentCreateNestedManyWithoutConfigurationInputSchema;
