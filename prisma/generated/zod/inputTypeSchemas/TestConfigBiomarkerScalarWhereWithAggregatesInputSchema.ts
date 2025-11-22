import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumBiomarkerOverrideActionWithAggregatesFilterSchema } from './EnumBiomarkerOverrideActionWithAggregatesFilterSchema';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TestConfigBiomarkerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestConfigBiomarkerScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestConfigBiomarkerScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigBiomarkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigBiomarkerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigBiomarkerScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigBiomarkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  hgncId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  action: z.union([ z.lazy(() => EnumBiomarkerOverrideActionWithAggregatesFilterSchema), z.lazy(() => BiomarkerOverrideActionSchema) ]).optional(),
  transcriptReference: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  reportTier: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  isReportable: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean() ]).optional().nullable(),
  displayOrder: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default TestConfigBiomarkerScalarWhereWithAggregatesInputSchema;
