import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateManyTestInputSchema } from './TestCatalogConfigurationCreateManyTestInputSchema';

export const TestCatalogConfigurationCreateManyTestInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateManyTestInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogConfigurationCreateManyTestInputSchema), z.lazy(() => TestCatalogConfigurationCreateManyTestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogConfigurationCreateManyTestInputEnvelopeSchema;
