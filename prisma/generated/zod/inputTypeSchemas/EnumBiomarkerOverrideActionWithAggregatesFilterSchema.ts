import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';
import { NestedEnumBiomarkerOverrideActionWithAggregatesFilterSchema } from './NestedEnumBiomarkerOverrideActionWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBiomarkerOverrideActionFilterSchema } from './NestedEnumBiomarkerOverrideActionFilterSchema';

export const EnumBiomarkerOverrideActionWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBiomarkerOverrideActionWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => BiomarkerOverrideActionSchema).optional(),
  in: z.lazy(() => BiomarkerOverrideActionSchema).array().optional(),
  notIn: z.lazy(() => BiomarkerOverrideActionSchema).array().optional(),
  not: z.union([ z.lazy(() => BiomarkerOverrideActionSchema), z.lazy(() => NestedEnumBiomarkerOverrideActionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBiomarkerOverrideActionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBiomarkerOverrideActionFilterSchema).optional(),
});

export default EnumBiomarkerOverrideActionWithAggregatesFilterSchema;
