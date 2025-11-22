import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';

export const NestedEnumBiomarkerOverrideActionFilterSchema: z.ZodType<Prisma.NestedEnumBiomarkerOverrideActionFilter> = z.strictObject({
  equals: z.lazy(() => BiomarkerOverrideActionSchema).optional(),
  in: z.lazy(() => BiomarkerOverrideActionSchema).array().optional(),
  notIn: z.lazy(() => BiomarkerOverrideActionSchema).array().optional(),
  not: z.union([ z.lazy(() => BiomarkerOverrideActionSchema), z.lazy(() => NestedEnumBiomarkerOverrideActionFilterSchema) ]).optional(),
});

export default NestedEnumBiomarkerOverrideActionFilterSchema;
