import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TestCatalogVersionSpecimenCountOutputTypeSelectSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCountOutputTypeSelect> = z.object({
  variantManifests: z.boolean().optional(),
}).strict();

export default TestCatalogVersionSpecimenCountOutputTypeSelectSchema;
