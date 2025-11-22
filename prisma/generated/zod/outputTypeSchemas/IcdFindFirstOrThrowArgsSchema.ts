import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdIncludeSchema } from '../inputTypeSchemas/IcdIncludeSchema'
import { IcdWhereInputSchema } from '../inputTypeSchemas/IcdWhereInputSchema'
import { IcdOrderByWithRelationInputSchema } from '../inputTypeSchemas/IcdOrderByWithRelationInputSchema'
import { IcdWhereUniqueInputSchema } from '../inputTypeSchemas/IcdWhereUniqueInputSchema'
import { IcdScalarFieldEnumSchema } from '../inputTypeSchemas/IcdScalarFieldEnumSchema'
import { LabOrderIcdFindManyArgsSchema } from "../outputTypeSchemas/LabOrderIcdFindManyArgsSchema"
import { IcdCountOutputTypeArgsSchema } from "../outputTypeSchemas/IcdCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IcdSelectSchema: z.ZodType<Prisma.IcdSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  alias1: z.boolean().optional(),
  alias2: z.boolean().optional(),
  alias3: z.boolean().optional(),
  alias4: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrderIcds: z.union([z.boolean(),z.lazy(() => LabOrderIcdFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IcdCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const IcdFindFirstOrThrowArgsSchema: z.ZodType<Prisma.IcdFindFirstOrThrowArgs> = z.object({
  select: IcdSelectSchema.optional(),
  include: z.lazy(() => IcdIncludeSchema).optional(),
  where: IcdWhereInputSchema.optional(), 
  orderBy: z.union([ IcdOrderByWithRelationInputSchema.array(), IcdOrderByWithRelationInputSchema ]).optional(),
  cursor: IcdWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IcdScalarFieldEnumSchema, IcdScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default IcdFindFirstOrThrowArgsSchema;
