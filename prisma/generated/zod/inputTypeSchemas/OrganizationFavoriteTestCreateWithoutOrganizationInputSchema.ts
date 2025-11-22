import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema';

export const OrganizationFavoriteTestCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateWithoutOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  parentId: z.string().optional().nullable(),
  parentName: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema).optional(),
});

export default OrganizationFavoriteTestCreateWithoutOrganizationInputSchema;
