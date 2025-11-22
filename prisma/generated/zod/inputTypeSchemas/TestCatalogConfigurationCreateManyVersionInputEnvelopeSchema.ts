import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateManyVersionInputSchema } from './TestCatalogConfigurationCreateManyVersionInputSchema';

export const TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogConfigurationCreateManyVersionInputSchema), z.lazy(() => TestCatalogConfigurationCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema;
