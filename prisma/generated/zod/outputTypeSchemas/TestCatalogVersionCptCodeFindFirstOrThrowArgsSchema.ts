import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeIncludeSchema'
import { TestCatalogVersionCptCodeWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereInputSchema'
import { TestCatalogVersionCptCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeOrderByWithRelationInputSchema'
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereUniqueInputSchema'
import { TestCatalogVersionCptCodeScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeScalarFieldEnumSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogVersionCptCodeSelectSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  cptCode: z.boolean().optional(),
  modifier: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
}).strict()

export const TestCatalogVersionCptCodeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeFindFirstOrThrowArgs> = z.object({
  select: TestCatalogVersionCptCodeSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionCptCodeIncludeSchema).optional(),
  where: TestCatalogVersionCptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionCptCodeOrderByWithRelationInputSchema.array(), TestCatalogVersionCptCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionCptCodeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogVersionCptCodeScalarFieldEnumSchema, TestCatalogVersionCptCodeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestCatalogVersionCptCodeFindFirstOrThrowArgsSchema;
