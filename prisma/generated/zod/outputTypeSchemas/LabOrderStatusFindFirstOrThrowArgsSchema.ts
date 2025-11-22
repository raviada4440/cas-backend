import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusIncludeSchema } from '../inputTypeSchemas/LabOrderStatusIncludeSchema'
import { LabOrderStatusWhereInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereInputSchema'
import { LabOrderStatusOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderStatusOrderByWithRelationInputSchema'
import { LabOrderStatusWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereUniqueInputSchema'
import { LabOrderStatusScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderStatusScalarFieldEnumSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderStatusSelectSchema: z.ZodType<Prisma.LabOrderStatusSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  status: z.boolean().optional(),
  statusDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict()

export const LabOrderStatusFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LabOrderStatusFindFirstOrThrowArgs> = z.object({
  select: LabOrderStatusSelectSchema.optional(),
  include: z.lazy(() => LabOrderStatusIncludeSchema).optional(),
  where: LabOrderStatusWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderStatusOrderByWithRelationInputSchema.array(), LabOrderStatusOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderStatusWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabOrderStatusScalarFieldEnumSchema, LabOrderStatusScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LabOrderStatusFindFirstOrThrowArgsSchema;
