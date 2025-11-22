import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestIncludeSchema } from '../inputTypeSchemas/OrganizationFavoriteTestIncludeSchema'
import { OrganizationFavoriteTestWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereUniqueInputSchema'
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrganizationFavoriteTestSelectSchema: z.ZodType<Prisma.OrganizationFavoriteTestSelect> = z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  parentName: z.boolean().optional(),
  level: z.boolean().optional(),
  testId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const OrganizationFavoriteTestDeleteArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestDeleteArgs> = z.object({
  select: OrganizationFavoriteTestSelectSchema.optional(),
  include: z.lazy(() => OrganizationFavoriteTestIncludeSchema).optional(),
  where: OrganizationFavoriteTestWhereUniqueInputSchema, 
}).strict();

export default OrganizationFavoriteTestDeleteArgsSchema;
