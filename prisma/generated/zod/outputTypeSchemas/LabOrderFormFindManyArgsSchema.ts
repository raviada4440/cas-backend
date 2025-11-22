import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFormIncludeSchema } from '../inputTypeSchemas/LabOrderFormIncludeSchema'
import { LabOrderFormWhereInputSchema } from '../inputTypeSchemas/LabOrderFormWhereInputSchema'
import { LabOrderFormOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderFormOrderByWithRelationInputSchema'
import { LabOrderFormWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderFormWhereUniqueInputSchema'
import { LabOrderFormScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderFormScalarFieldEnumSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { TestCatalogVersionOrderFormArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormArgsSchema"
import { OrderFormTemplateArgsSchema } from "../outputTypeSchemas/OrderFormTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderFormSelectSchema: z.ZodType<Prisma.LabOrderFormSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  versionOrderFormId: z.boolean().optional(),
  orderFormTemplateId: z.boolean().optional(),
  displayOrder: z.boolean().optional(),
  sectionName: z.boolean().optional(),
  templateName: z.boolean().optional(),
  formSchema: z.boolean().optional(),
  layoutSchema: z.boolean().optional(),
  responses: z.boolean().optional(),
  isCompleted: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  versionOrderForm: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => OrderFormTemplateArgsSchema)]).optional(),
}).strict()

export const LabOrderFormFindManyArgsSchema: z.ZodType<Prisma.LabOrderFormFindManyArgs> = z.object({
  select: LabOrderFormSelectSchema.optional(),
  include: z.lazy(() => LabOrderFormIncludeSchema).optional(),
  where: LabOrderFormWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderFormOrderByWithRelationInputSchema.array(), LabOrderFormOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderFormWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabOrderFormScalarFieldEnumSchema, LabOrderFormScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LabOrderFormFindManyArgsSchema;
