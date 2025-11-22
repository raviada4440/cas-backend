import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';

export const NullableEnumTestCatalogCollectionMethodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumTestCatalogCollectionMethodFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TestCatalogCollectionMethodSchema).optional().nullable(),
});

export default NullableEnumTestCatalogCollectionMethodFieldUpdateOperationsInputSchema;
