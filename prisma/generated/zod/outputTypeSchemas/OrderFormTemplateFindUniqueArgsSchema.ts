import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateIncludeSchema } from '../inputTypeSchemas/OrderFormTemplateIncludeSchema'
import { OrderFormTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/OrderFormTemplateWhereUniqueInputSchema'
import { OrderFormSectionArgsSchema } from "../outputTypeSchemas/OrderFormSectionArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { TestCatalogVersionOrderFormFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormFindManyArgsSchema"
import { LabOrderFormFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFormFindManyArgsSchema"
import { OrderFormTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderFormTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderFormTemplateSelectSchema: z.ZodType<Prisma.OrderFormTemplateSelect> = z.object({
  id: z.boolean().optional(),
  orderFormSectionId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  version: z.boolean().optional(),
  effectiveDate: z.boolean().optional(),
  retiredDate: z.boolean().optional(),
  formSchema: z.boolean().optional(),
  layoutSchema: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  isGlobal: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  section: z.union([z.boolean(),z.lazy(() => OrderFormSectionArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  assignments: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormFindManyArgsSchema)]).optional(),
  labOrderForms: z.union([z.boolean(),z.lazy(() => LabOrderFormFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderFormTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderFormTemplateFindUniqueArgsSchema: z.ZodType<Prisma.OrderFormTemplateFindUniqueArgs> = z.object({
  select: OrderFormTemplateSelectSchema.optional(),
  include: z.lazy(() => OrderFormTemplateIncludeSchema).optional(),
  where: OrderFormTemplateWhereUniqueInputSchema, 
}).strict();

export default OrderFormTemplateFindUniqueArgsSchema;
