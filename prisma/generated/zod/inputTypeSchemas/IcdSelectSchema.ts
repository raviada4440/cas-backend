import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdFindManyArgsSchema } from "../outputTypeSchemas/LabOrderIcdFindManyArgsSchema"
import { IcdCountOutputTypeArgsSchema } from "../outputTypeSchemas/IcdCountOutputTypeArgsSchema"

export const IcdSelectSchema: z.ZodType<Prisma.IcdSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  alias1: z.boolean().optional(),
  alias2: z.boolean().optional(),
  alias3: z.boolean().optional(),
  alias4: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrderIcds: z.union([z.boolean(),z.lazy(() => LabOrderIcdFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IcdCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default IcdSelectSchema;
