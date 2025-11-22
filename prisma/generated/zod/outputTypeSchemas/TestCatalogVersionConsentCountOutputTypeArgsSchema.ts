import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentCountOutputTypeSelectSchema } from './TestCatalogVersionConsentCountOutputTypeSelectSchema';

export const TestCatalogVersionConsentCountOutputTypeArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionConsentCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TestCatalogVersionConsentCountOutputTypeSelectSchema;
