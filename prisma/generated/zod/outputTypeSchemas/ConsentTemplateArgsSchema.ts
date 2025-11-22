import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateSelectSchema } from '../inputTypeSchemas/ConsentTemplateSelectSchema';
import { ConsentTemplateIncludeSchema } from '../inputTypeSchemas/ConsentTemplateIncludeSchema';

export const ConsentTemplateArgsSchema: z.ZodType<Prisma.ConsentTemplateDefaultArgs> = z.object({
  select: z.lazy(() => ConsentTemplateSelectSchema).optional(),
  include: z.lazy(() => ConsentTemplateIncludeSchema).optional(),
}).strict();

export default ConsentTemplateArgsSchema;
