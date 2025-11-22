import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema';

export const OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateWithoutTestCatalogInput> = z.strictObject({
  id: z.string().optional(),
  parentId: z.string().optional().nullable(),
  parentName: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema).optional(),
});

export default OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema;
