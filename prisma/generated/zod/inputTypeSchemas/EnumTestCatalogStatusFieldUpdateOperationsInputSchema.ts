import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';

export const EnumTestCatalogStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTestCatalogStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TestCatalogStatusSchema).optional(),
});

export default EnumTestCatalogStatusFieldUpdateOperationsInputSchema;
