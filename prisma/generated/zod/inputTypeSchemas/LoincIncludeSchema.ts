import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderLoincFindManyArgsSchema"
import { TestCatalogVersionResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionResultLoincFindManyArgsSchema"
import { TestConfigOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigOrderLoincFindManyArgsSchema"
import { TestConfigResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigResultLoincFindManyArgsSchema"
import { LoincCountOutputTypeArgsSchema } from "../outputTypeSchemas/LoincCountOutputTypeArgsSchema"

export const LoincIncludeSchema: z.ZodType<Prisma.LoincInclude> = z.object({
  testOrderLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderLoincFindManyArgsSchema)]).optional(),
  testResultLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionResultLoincFindManyArgsSchema)]).optional(),
  configOrderLoincs: z.union([z.boolean(),z.lazy(() => TestConfigOrderLoincFindManyArgsSchema)]).optional(),
  configResultLoincs: z.union([z.boolean(),z.lazy(() => TestConfigResultLoincFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LoincCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default LoincIncludeSchema;
