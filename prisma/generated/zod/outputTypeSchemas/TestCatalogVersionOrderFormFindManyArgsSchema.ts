import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormIncludeSchema'
import { TestCatalogVersionOrderFormWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereInputSchema'
import { TestCatalogVersionOrderFormOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormOrderByWithRelationInputSchema'
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereUniqueInputSchema'
import { TestCatalogVersionOrderFormScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormScalarFieldEnumSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { OrderFormTemplateArgsSchema } from "../outputTypeSchemas/OrderFormTemplateArgsSchema"
import { LabOrderFormFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFormFindManyArgsSchema"
import { TestCatalogVersionOrderFormCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogVersionOrderFormSelectSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  orderFormTemplateId: z.boolean().optional(),
  displayOrder: z.boolean().optional(),
  customTitle: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => OrderFormTemplateArgsSchema)]).optional(),
  labOrderForms: z.union([z.boolean(),z.lazy(() => LabOrderFormFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestCatalogVersionOrderFormFindManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormFindManyArgs> = z.object({
  select: TestCatalogVersionOrderFormSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionOrderFormIncludeSchema).optional(),
  where: TestCatalogVersionOrderFormWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderFormOrderByWithRelationInputSchema.array(), TestCatalogVersionOrderFormOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionOrderFormWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogVersionOrderFormScalarFieldEnumSchema, TestCatalogVersionOrderFormScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestCatalogVersionOrderFormFindManyArgsSchema;
