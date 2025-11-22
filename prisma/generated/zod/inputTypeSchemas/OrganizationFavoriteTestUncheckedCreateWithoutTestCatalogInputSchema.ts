import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInput> = z.strictObject({
  id: z.string().optional(),
  organizationId: z.string().optional().nullable(),
  parentId: z.string().optional().nullable(),
  parentName: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema;
