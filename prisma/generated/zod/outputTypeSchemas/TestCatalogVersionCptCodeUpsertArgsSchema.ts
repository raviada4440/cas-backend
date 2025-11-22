import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeIncludeSchema'
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereUniqueInputSchema'
import { TestCatalogVersionCptCodeCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeCreateInputSchema'
import { TestCatalogVersionCptCodeUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeUncheckedCreateInputSchema'
import { TestCatalogVersionCptCodeUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeUpdateInputSchema'
import { TestCatalogVersionCptCodeUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeUncheckedUpdateInputSchema'
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

export const TestCatalogVersionCptCodeUpsertArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeUpsertArgs> = z.object({
  select: TestCatalogVersionCptCodeSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionCptCodeIncludeSchema).optional(),
  where: TestCatalogVersionCptCodeWhereUniqueInputSchema, 
  create: z.union([ TestCatalogVersionCptCodeCreateInputSchema, TestCatalogVersionCptCodeUncheckedCreateInputSchema ]),
  update: z.union([ TestCatalogVersionCptCodeUpdateInputSchema, TestCatalogVersionCptCodeUncheckedUpdateInputSchema ]),
}).strict();

export default TestCatalogVersionCptCodeUpsertArgsSchema;
