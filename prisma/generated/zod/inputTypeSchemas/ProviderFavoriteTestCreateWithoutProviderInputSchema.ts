import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema';

export const ProviderFavoriteTestCreateWithoutProviderInputSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateWithoutProviderInput> = z.strictObject({
  id: z.string().optional(),
  parentId: z.string().optional().nullable(),
  parentName: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema).optional(),
});

export default ProviderFavoriteTestCreateWithoutProviderInputSchema;
