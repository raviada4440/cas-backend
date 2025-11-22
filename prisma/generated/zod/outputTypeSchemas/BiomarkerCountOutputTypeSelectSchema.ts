import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BiomarkerCountOutputTypeSelectSchema: z.ZodType<Prisma.BiomarkerCountOutputTypeSelect> = z.object({
  testBiomarkers: z.boolean().optional(),
  configOverrides: z.boolean().optional(),
}).strict();

export default BiomarkerCountOutputTypeSelectSchema;
