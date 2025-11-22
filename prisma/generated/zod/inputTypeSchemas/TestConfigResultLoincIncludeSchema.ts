import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { LoincArgsSchema } from "../outputTypeSchemas/LoincArgsSchema"

export const TestConfigResultLoincIncludeSchema: z.ZodType<Prisma.TestConfigResultLoincInclude> = z.object({
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  loinc: z.union([z.boolean(),z.lazy(() => LoincArgsSchema)]).optional(),
}).strict();

export default TestConfigResultLoincIncludeSchema;
