import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IcdCountOutputTypeSelectSchema: z.ZodType<Prisma.IcdCountOutputTypeSelect> = z.object({
  labOrderIcds: z.boolean().optional(),
}).strict();

export default IcdCountOutputTypeSelectSchema;
