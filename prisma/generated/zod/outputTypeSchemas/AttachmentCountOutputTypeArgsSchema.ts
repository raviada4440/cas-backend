import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCountOutputTypeSelectSchema } from './AttachmentCountOutputTypeSelectSchema';

export const AttachmentCountOutputTypeArgsSchema: z.ZodType<Prisma.AttachmentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AttachmentCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AttachmentCountOutputTypeSelectSchema;
