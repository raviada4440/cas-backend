import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereInputSchema'
import { LoincComponentHierarchyOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyOrderByWithRelationInputSchema'
import { LoincComponentHierarchyWhereUniqueInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereUniqueInputSchema'
import { LoincComponentHierarchyScalarFieldEnumSchema } from '../inputTypeSchemas/LoincComponentHierarchyScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincComponentHierarchySelectSchema: z.ZodType<Prisma.LoincComponentHierarchySelect> = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  level: z.boolean().optional(),
  code: z.boolean().optional(),
  sequence: z.boolean().optional(),
  codeText: z.boolean().optional(),
  component: z.boolean().optional(),
  property: z.boolean().optional(),
  timing: z.boolean().optional(),
  scale: z.boolean().optional(),
  method: z.boolean().optional(),
}).strict()

export const LoincComponentHierarchyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyFindFirstOrThrowArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereInputSchema.optional(), 
  orderBy: z.union([ LoincComponentHierarchyOrderByWithRelationInputSchema.array(), LoincComponentHierarchyOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincComponentHierarchyWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincComponentHierarchyScalarFieldEnumSchema, LoincComponentHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LoincComponentHierarchyFindFirstOrThrowArgsSchema;
