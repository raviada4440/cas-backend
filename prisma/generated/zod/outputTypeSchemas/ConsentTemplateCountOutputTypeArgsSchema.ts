import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateCountOutputTypeSelectSchema } from './ConsentTemplateCountOutputTypeSelectSchema';

export const ConsentTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.ConsentTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ConsentTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ConsentTemplateCountOutputTypeSelectSchema;
