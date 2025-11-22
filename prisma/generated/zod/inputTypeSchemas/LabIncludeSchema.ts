import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestFindManyArgsSchema } from "../outputTypeSchemas/SponsoredTestFindManyArgsSchema"
import { TestCatalogFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogFindManyArgsSchema"
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { LabCountOutputTypeArgsSchema } from "../outputTypeSchemas/LabCountOutputTypeArgsSchema"

export const LabIncludeSchema: z.ZodType<Prisma.LabInclude> = z.object({
  sponsoredTests: z.union([z.boolean(),z.lazy(() => SponsoredTestFindManyArgsSchema)]).optional(),
  testCatalogs: z.union([z.boolean(),z.lazy(() => TestCatalogFindManyArgsSchema)]).optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LabCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default LabIncludeSchema;
