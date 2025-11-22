import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierWhereInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereInputSchema'
import { ExternalIdentifierOrderByWithRelationInputSchema } from '../inputTypeSchemas/ExternalIdentifierOrderByWithRelationInputSchema'
import { ExternalIdentifierWhereUniqueInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereUniqueInputSchema'
import { ExternalIdentifierScalarFieldEnumSchema } from '../inputTypeSchemas/ExternalIdentifierScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExternalIdentifierSelectSchema: z.ZodType<Prisma.ExternalIdentifierSelect> = z.object({
  id: z.boolean().optional(),
  resourceType: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  system: z.boolean().optional(),
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ExternalIdentifierFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExternalIdentifierFindFirstOrThrowArgs> = z.object({
  select: ExternalIdentifierSelectSchema.optional(),
  where: ExternalIdentifierWhereInputSchema.optional(), 
  orderBy: z.union([ ExternalIdentifierOrderByWithRelationInputSchema.array(), ExternalIdentifierOrderByWithRelationInputSchema ]).optional(),
  cursor: ExternalIdentifierWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExternalIdentifierScalarFieldEnumSchema, ExternalIdentifierScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ExternalIdentifierFindFirstOrThrowArgsSchema;
