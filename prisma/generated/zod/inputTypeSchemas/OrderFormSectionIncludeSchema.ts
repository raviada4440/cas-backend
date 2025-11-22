import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { OrderFormTemplateFindManyArgsSchema } from "../outputTypeSchemas/OrderFormTemplateFindManyArgsSchema"
import { OrderFormSectionCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderFormSectionCountOutputTypeArgsSchema"

export const OrderFormSectionIncludeSchema: z.ZodType<Prisma.OrderFormSectionInclude> = z.object({
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  templates: z.union([z.boolean(),z.lazy(() => OrderFormTemplateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderFormSectionCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default OrderFormSectionIncludeSchema;
