import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentCreateWithoutVersionInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';

export const TestCatalogVersionConsentCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionConsentCreateNestedManyWithoutVersionInputSchema;
