import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenCountOutputTypeSelectSchema } from './TestCatalogVersionSpecimenCountOutputTypeSelectSchema';

export const TestCatalogVersionSpecimenCountOutputTypeArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionSpecimenCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TestCatalogVersionSpecimenCountOutputTypeSelectSchema;
