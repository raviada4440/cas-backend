import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestIncludeSchema } from '../inputTypeSchemas/LabOrderTestIncludeSchema'
import { LabOrderTestWhereInputSchema } from '../inputTypeSchemas/LabOrderTestWhereInputSchema'
import { LabOrderTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderTestOrderByWithRelationInputSchema'
import { LabOrderTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderTestWhereUniqueInputSchema'
import { LabOrderTestScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderTestScalarFieldEnumSchema'
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

export const LabOrderTestFindManyArgsSchema: z.ZodType<Prisma.LabOrderTestFindManyArgs> = z.object({
  select: LabOrderTestSelectSchema.optional(),
  include: z.lazy(() => LabOrderTestIncludeSchema).optional(),
  where: LabOrderTestWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderTestOrderByWithRelationInputSchema.array(), LabOrderTestOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderTestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabOrderTestScalarFieldEnumSchema, LabOrderTestScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LabOrderTestFindManyArgsSchema;
