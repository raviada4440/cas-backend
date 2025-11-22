import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestIncludeSchema } from '../inputTypeSchemas/OrganizationFavoriteTestIncludeSchema'
import { OrganizationFavoriteTestWhereInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereInputSchema'
import { OrganizationFavoriteTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestOrderByWithRelationInputSchema'
import { OrganizationFavoriteTestWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereUniqueInputSchema'
import { OrganizationFavoriteTestScalarFieldEnumSchema } from '../inputTypeSchemas/OrganizationFavoriteTestScalarFieldEnumSchema'
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

export const OrganizationFavoriteTestFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestFindFirstOrThrowArgs> = z.object({
  select: OrganizationFavoriteTestSelectSchema.optional(),
  include: z.lazy(() => OrganizationFavoriteTestIncludeSchema).optional(),
  where: OrganizationFavoriteTestWhereInputSchema.optional(), 
  orderBy: z.union([ OrganizationFavoriteTestOrderByWithRelationInputSchema.array(), OrganizationFavoriteTestOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationFavoriteTestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationFavoriteTestScalarFieldEnumSchema, OrganizationFavoriteTestScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OrganizationFavoriteTestFindFirstOrThrowArgsSchema;
