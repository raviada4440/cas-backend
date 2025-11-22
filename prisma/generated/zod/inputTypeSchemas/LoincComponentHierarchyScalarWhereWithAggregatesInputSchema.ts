import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const LoincComponentHierarchyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LoincComponentHierarchyScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema), z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema), z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  sequence: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  codeText: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  component: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  property: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  timing: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  scale: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export default LoincComponentHierarchyScalarWhereWithAggregatesInputSchema;
