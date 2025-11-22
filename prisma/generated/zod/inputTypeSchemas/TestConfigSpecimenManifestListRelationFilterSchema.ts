import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestWhereInputSchema } from './TestConfigSpecimenManifestWhereInputSchema';

export const TestConfigSpecimenManifestListRelationFilterSchema: z.ZodType<Prisma.TestConfigSpecimenManifestListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestConfigSpecimenManifestWhereInputSchema).optional(),
  some: z.lazy(() => TestConfigSpecimenManifestWhereInputSchema).optional(),
  none: z.lazy(() => TestConfigSpecimenManifestWhereInputSchema).optional(),
});

export default TestConfigSpecimenManifestListRelationFilterSchema;
