import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateNestedOneWithoutProviderFavoriteTestsInputSchema } from './ProviderCreateNestedOneWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema';

export const ProviderFavoriteTestCreateInputSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateInput> = z.strictObject({
  id: z.string().optional(),
  parentId: z.string().optional().nullable(),
  parentName: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutProviderFavoriteTestsInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema).optional(),
});

export default ProviderFavoriteTestCreateInputSchema;
