import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerWhereInputSchema } from './TestConfigBiomarkerWhereInputSchema';

export const TestConfigBiomarkerListRelationFilterSchema: z.ZodType<Prisma.TestConfigBiomarkerListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestConfigBiomarkerWhereInputSchema).optional(),
  some: z.lazy(() => TestConfigBiomarkerWhereInputSchema).optional(),
  none: z.lazy(() => TestConfigBiomarkerWhereInputSchema).optional(),
});

export default TestConfigBiomarkerListRelationFilterSchema;
