import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LoincComponentHierarchyCreateManyInputSchema: z.ZodType<Prisma.LoincComponentHierarchyCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  parentId: z.string(),
  level: z.number(),
  code: z.string(),
  sequence: z.string(),
  codeText: z.string(),
  component: z.string(),
  property: z.string(),
  timing: z.string(),
  scale: z.string(),
  method: z.string(),
});

export default LoincComponentHierarchyCreateManyInputSchema;
