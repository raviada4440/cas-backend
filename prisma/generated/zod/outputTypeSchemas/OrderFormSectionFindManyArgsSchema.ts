import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionIncludeSchema } from '../inputTypeSchemas/OrderFormSectionIncludeSchema'
import { OrderFormSectionWhereInputSchema } from '../inputTypeSchemas/OrderFormSectionWhereInputSchema'
import { OrderFormSectionOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrderFormSectionOrderByWithRelationInputSchema'
import { OrderFormSectionWhereUniqueInputSchema } from '../inputTypeSchemas/OrderFormSectionWhereUniqueInputSchema'
import { OrderFormSectionScalarFieldEnumSchema } from '../inputTypeSchemas/OrderFormSectionScalarFieldEnumSchema'
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { OrderFormTemplateFindManyArgsSchema } from "../outputTypeSchemas/OrderFormTemplateFindManyArgsSchema"
import { OrderFormSectionCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderFormSectionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderFormSectionSelectSchema: z.ZodType<Prisma.OrderFormSectionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  isActive: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  templates: z.union([z.boolean(),z.lazy(() => OrderFormTemplateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderFormSectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderFormSectionFindManyArgsSchema: z.ZodType<Prisma.OrderFormSectionFindManyArgs> = z.object({
  select: OrderFormSectionSelectSchema.optional(),
  include: z.lazy(() => OrderFormSectionIncludeSchema).optional(),
  where: OrderFormSectionWhereInputSchema.optional(), 
  orderBy: z.union([ OrderFormSectionOrderByWithRelationInputSchema.array(), OrderFormSectionOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderFormSectionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderFormSectionScalarFieldEnumSchema, OrderFormSectionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OrderFormSectionFindManyArgsSchema;
