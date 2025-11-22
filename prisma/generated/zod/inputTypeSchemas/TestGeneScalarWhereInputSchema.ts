import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestGeneScalarWhereInputSchema: z.ZodType<Prisma.TestGeneScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestGeneScalarWhereInputSchema), z.lazy(() => TestGeneScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestGeneScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestGeneScalarWhereInputSchema), z.lazy(() => TestGeneScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  testId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  gene: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  transcriptReference: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestGeneScalarWhereInputSchema;
