import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabIncludeSchema } from '../inputTypeSchemas/LabIncludeSchema'
import { LabCreateInputSchema } from '../inputTypeSchemas/LabCreateInputSchema'
import { LabUncheckedCreateInputSchema } from '../inputTypeSchemas/LabUncheckedCreateInputSchema'
import { SponsoredTestFindManyArgsSchema } from "../outputTypeSchemas/SponsoredTestFindManyArgsSchema"
import { TestCatalogFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogFindManyArgsSchema"
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { LabCountOutputTypeArgsSchema } from "../outputTypeSchemas/LabCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabSelectSchema: z.ZodType<Prisma.LabSelect> = z.object({
  id: z.boolean().optional(),
  labName: z.boolean().optional(),
  labCode: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zip: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sponsoredTests: z.union([z.boolean(),z.lazy(() => SponsoredTestFindManyArgsSchema)]).optional(),
  testCatalogs: z.union([z.boolean(),z.lazy(() => TestCatalogFindManyArgsSchema)]).optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LabCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LabCreateArgsSchema: z.ZodType<Prisma.LabCreateArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: z.lazy(() => LabIncludeSchema).optional(),
  data: z.union([ LabCreateInputSchema, LabUncheckedCreateInputSchema ]),
}).strict();

export default LabCreateArgsSchema;
