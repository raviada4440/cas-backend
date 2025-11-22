import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { TestCatalogVersionOrderFormArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormArgsSchema"
import { OrderFormTemplateArgsSchema } from "../outputTypeSchemas/OrderFormTemplateArgsSchema"

export const LabOrderFormIncludeSchema: z.ZodType<Prisma.LabOrderFormInclude> = z.object({
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  versionOrderForm: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => OrderFormTemplateArgsSchema)]).optional(),
}).strict();

export default LabOrderFormIncludeSchema;
