import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestIncludeSchema } from '../inputTypeSchemas/LabOrderTestIncludeSchema'
import { LabOrderTestCreateInputSchema } from '../inputTypeSchemas/LabOrderTestCreateInputSchema'
import { LabOrderTestUncheckedCreateInputSchema } from '../inputTypeSchemas/LabOrderTestUncheckedCreateInputSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderTestSelectSchema: z.ZodType<Prisma.LabOrderTestSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  testId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const LabOrderTestCreateArgsSchema: z.ZodType<Prisma.LabOrderTestCreateArgs> = z.object({
  select: LabOrderTestSelectSchema.optional(),
  include: z.lazy(() => LabOrderTestIncludeSchema).optional(),
  data: z.union([ LabOrderTestCreateInputSchema, LabOrderTestUncheckedCreateInputSchema ]),
}).strict();

export default LabOrderTestCreateArgsSchema;
