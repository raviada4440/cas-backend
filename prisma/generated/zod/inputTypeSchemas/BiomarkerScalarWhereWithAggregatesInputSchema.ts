import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BiomarkerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BiomarkerScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BiomarkerScalarWhereWithAggregatesInputSchema), z.lazy(() => BiomarkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BiomarkerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BiomarkerScalarWhereWithAggregatesInputSchema), z.lazy(() => BiomarkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  hgncId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  hgncStatus: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  hgncApprovedSymbol: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  hgncApprovedName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default BiomarkerScalarWhereWithAggregatesInputSchema;
