import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormIncludeSchema'
import { TestCatalogVersionOrderFormUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormUpdateInputSchema'
import { TestCatalogVersionOrderFormUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormUncheckedUpdateInputSchema'
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereUniqueInputSchema'
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

export const TestCatalogVersionOrderFormUpdateArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateArgs> = z.object({
  select: TestCatalogVersionOrderFormSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionOrderFormIncludeSchema).optional(),
  data: z.union([ TestCatalogVersionOrderFormUpdateInputSchema, TestCatalogVersionOrderFormUncheckedUpdateInputSchema ]),
  where: TestCatalogVersionOrderFormWhereUniqueInputSchema, 
}).strict();

export default TestCatalogVersionOrderFormUpdateArgsSchema;
