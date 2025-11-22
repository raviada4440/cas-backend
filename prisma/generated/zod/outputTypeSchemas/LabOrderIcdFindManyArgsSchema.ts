import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdIncludeSchema } from '../inputTypeSchemas/LabOrderIcdIncludeSchema'
import { LabOrderIcdWhereInputSchema } from '../inputTypeSchemas/LabOrderIcdWhereInputSchema'
import { LabOrderIcdOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderIcdOrderByWithRelationInputSchema'
import { LabOrderIcdWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderIcdWhereUniqueInputSchema'
import { LabOrderIcdScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderIcdScalarFieldEnumSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { IcdArgsSchema } from "../outputTypeSchemas/IcdArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderIcdSelectSchema: z.ZodType<Prisma.LabOrderIcdSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  icdId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  icd: z.union([z.boolean(),z.lazy(() => IcdArgsSchema)]).optional(),
}).strict()

export const LabOrderIcdFindManyArgsSchema: z.ZodType<Prisma.LabOrderIcdFindManyArgs> = z.object({
  select: LabOrderIcdSelectSchema.optional(),
  include: z.lazy(() => LabOrderIcdIncludeSchema).optional(),
  where: LabOrderIcdWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderIcdOrderByWithRelationInputSchema.array(), LabOrderIcdOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderIcdWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabOrderIcdScalarFieldEnumSchema, LabOrderIcdScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LabOrderIcdFindManyArgsSchema;
