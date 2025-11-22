import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"

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

export default TestCatalogVersionCptCodeSelectSchema;
