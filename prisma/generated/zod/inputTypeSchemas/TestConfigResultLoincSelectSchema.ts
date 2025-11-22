import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { LoincArgsSchema } from "../outputTypeSchemas/LoincArgsSchema"

export const TestConfigResultLoincSelectSchema: z.ZodType<Prisma.TestConfigResultLoincSelect> = z.object({
  id: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  resultCode: z.boolean().optional(),
  resultCodeName: z.boolean().optional(),
  uom: z.boolean().optional(),
  loincCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  loinc: z.union([z.boolean(),z.lazy(() => LoincArgsSchema)]).optional(),
}).strict()

export default TestConfigResultLoincSelectSchema;
