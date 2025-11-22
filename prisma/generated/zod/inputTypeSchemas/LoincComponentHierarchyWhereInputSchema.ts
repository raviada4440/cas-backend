import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const LoincComponentHierarchyWhereInputSchema: z.ZodType<Prisma.LoincComponentHierarchyWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LoincComponentHierarchyWhereInputSchema), z.lazy(() => LoincComponentHierarchyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincComponentHierarchyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincComponentHierarchyWhereInputSchema), z.lazy(() => LoincComponentHierarchyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  level: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sequence: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  codeText: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  component: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  property: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  timing: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  scale: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export default LoincComponentHierarchyWhereInputSchema;
