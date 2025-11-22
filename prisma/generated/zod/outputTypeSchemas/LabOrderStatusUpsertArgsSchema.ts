import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusIncludeSchema } from '../inputTypeSchemas/LabOrderStatusIncludeSchema'
import { LabOrderStatusWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereUniqueInputSchema'
import { LabOrderStatusCreateInputSchema } from '../inputTypeSchemas/LabOrderStatusCreateInputSchema'
import { LabOrderStatusUncheckedCreateInputSchema } from '../inputTypeSchemas/LabOrderStatusUncheckedCreateInputSchema'
import { LabOrderStatusUpdateInputSchema } from '../inputTypeSchemas/LabOrderStatusUpdateInputSchema'
import { LabOrderStatusUncheckedUpdateInputSchema } from '../inputTypeSchemas/LabOrderStatusUncheckedUpdateInputSchema'
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

export const LabOrderStatusUpsertArgsSchema: z.ZodType<Prisma.LabOrderStatusUpsertArgs> = z.object({
  select: LabOrderStatusSelectSchema.optional(),
  include: z.lazy(() => LabOrderStatusIncludeSchema).optional(),
  where: LabOrderStatusWhereUniqueInputSchema, 
  create: z.union([ LabOrderStatusCreateInputSchema, LabOrderStatusUncheckedCreateInputSchema ]),
  update: z.union([ LabOrderStatusUpdateInputSchema, LabOrderStatusUncheckedUpdateInputSchema ]),
}).strict();

export default LabOrderStatusUpsertArgsSchema;
