import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestIncludeSchema } from '../inputTypeSchemas/LabOrderTestIncludeSchema'
import { LabOrderTestUpdateInputSchema } from '../inputTypeSchemas/LabOrderTestUpdateInputSchema'
import { LabOrderTestUncheckedUpdateInputSchema } from '../inputTypeSchemas/LabOrderTestUncheckedUpdateInputSchema'
import { LabOrderTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderTestWhereUniqueInputSchema'
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

export const LabOrderTestUpdateArgsSchema: z.ZodType<Prisma.LabOrderTestUpdateArgs> = z.object({
  select: LabOrderTestSelectSchema.optional(),
  include: z.lazy(() => LabOrderTestIncludeSchema).optional(),
  data: z.union([ LabOrderTestUpdateInputSchema, LabOrderTestUncheckedUpdateInputSchema ]),
  where: LabOrderTestWhereUniqueInputSchema, 
}).strict();

export default LabOrderTestUpdateArgsSchema;
