import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"

export const TestConfigCptCodeSelectSchema: z.ZodType<Prisma.TestConfigCptCodeSelect> = z.object({
  id: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  cptCode: z.boolean().optional(),
  modifier: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
}).strict()

export default TestConfigCptCodeSelectSchema;
