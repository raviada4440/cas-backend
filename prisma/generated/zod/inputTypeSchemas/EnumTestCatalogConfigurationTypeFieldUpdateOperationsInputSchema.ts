import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';

export const EnumTestCatalogConfigurationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTestCatalogConfigurationTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TestCatalogConfigurationTypeSchema).optional(),
});

export default EnumTestCatalogConfigurationTypeFieldUpdateOperationsInputSchema;
