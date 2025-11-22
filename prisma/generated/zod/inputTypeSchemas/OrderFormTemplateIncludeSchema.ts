import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionArgsSchema } from "../outputTypeSchemas/OrderFormSectionArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { TestCatalogVersionOrderFormFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormFindManyArgsSchema"
import { LabOrderFormFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFormFindManyArgsSchema"
import { OrderFormTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderFormTemplateCountOutputTypeArgsSchema"

export const OrderFormTemplateIncludeSchema: z.ZodType<Prisma.OrderFormTemplateInclude> = z.object({
  section: z.union([z.boolean(),z.lazy(() => OrderFormSectionArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  assignments: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormFindManyArgsSchema)]).optional(),
  labOrderForms: z.union([z.boolean(),z.lazy(() => LabOrderFormFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderFormTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default OrderFormTemplateIncludeSchema;
