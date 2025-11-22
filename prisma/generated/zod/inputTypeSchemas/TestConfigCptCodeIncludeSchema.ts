import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"

export const TestConfigCptCodeIncludeSchema: z.ZodType<Prisma.TestConfigCptCodeInclude> = z.object({
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
}).strict();

export default TestConfigCptCodeIncludeSchema;
