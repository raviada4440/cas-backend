import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeIncludeSchema'
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereUniqueInputSchema'
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

export const TestCatalogVersionCptCodeFindUniqueArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeFindUniqueArgs> = z.object({
  select: TestCatalogVersionCptCodeSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionCptCodeIncludeSchema).optional(),
  where: TestCatalogVersionCptCodeWhereUniqueInputSchema, 
}).strict();

export default TestCatalogVersionCptCodeFindUniqueArgsSchema;
