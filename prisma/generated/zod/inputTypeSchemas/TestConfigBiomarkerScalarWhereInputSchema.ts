import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumBiomarkerOverrideActionFilterSchema } from './EnumBiomarkerOverrideActionFilterSchema';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestConfigBiomarkerScalarWhereInputSchema: z.ZodType<Prisma.TestConfigBiomarkerScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema), z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema), z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  hgncId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  action: z.union([ z.lazy(() => EnumBiomarkerOverrideActionFilterSchema), z.lazy(() => BiomarkerOverrideActionSchema) ]).optional(),
  transcriptReference: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  reportTier: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isReportable: z.union([ z.lazy(() => BoolNullableFilterSchema), z.boolean() ]).optional().nullable(),
  displayOrder: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestConfigBiomarkerScalarWhereInputSchema;
