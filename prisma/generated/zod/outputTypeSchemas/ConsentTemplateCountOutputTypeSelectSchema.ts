import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ConsentTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.ConsentTemplateCountOutputTypeSelect> = z.object({
  versionConsents: z.boolean().optional(),
  labOrderConsents: z.boolean().optional(),
  auditLogs: z.boolean().optional(),
}).strict();

export default ConsentTemplateCountOutputTypeSelectSchema;
