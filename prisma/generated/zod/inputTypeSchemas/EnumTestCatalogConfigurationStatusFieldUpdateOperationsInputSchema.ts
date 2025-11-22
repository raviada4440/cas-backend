import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';

export const EnumTestCatalogConfigurationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTestCatalogConfigurationStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TestCatalogConfigurationStatusSchema).optional(),
});

export default EnumTestCatalogConfigurationStatusFieldUpdateOperationsInputSchema;
