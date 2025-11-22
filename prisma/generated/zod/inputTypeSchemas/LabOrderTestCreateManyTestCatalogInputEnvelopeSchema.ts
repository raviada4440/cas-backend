import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestCreateManyTestCatalogInputSchema } from './LabOrderTestCreateManyTestCatalogInputSchema';

export const LabOrderTestCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.LabOrderTestCreateManyTestCatalogInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderTestCreateManyTestCatalogInputSchema), z.lazy(() => LabOrderTestCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderTestCreateManyTestCatalogInputEnvelopeSchema;
