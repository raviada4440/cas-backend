import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionStatusSchema } from './TestCatalogVersionStatusSchema';

export const EnumTestCatalogVersionStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTestCatalogVersionStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TestCatalogVersionStatusSchema).optional(),
});

export default EnumTestCatalogVersionStatusFieldUpdateOperationsInputSchema;
