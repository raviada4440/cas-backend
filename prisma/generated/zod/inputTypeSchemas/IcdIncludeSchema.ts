import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdFindManyArgsSchema } from "../outputTypeSchemas/LabOrderIcdFindManyArgsSchema"
import { IcdCountOutputTypeArgsSchema } from "../outputTypeSchemas/IcdCountOutputTypeArgsSchema"

export const IcdIncludeSchema: z.ZodType<Prisma.IcdInclude> = z.object({
  labOrderIcds: z.union([z.boolean(),z.lazy(() => LabOrderIcdFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IcdCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default IcdIncludeSchema;
