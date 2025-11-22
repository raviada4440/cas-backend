import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { UserAttributeArgsSchema } from "../outputTypeSchemas/UserAttributeArgsSchema"
import { ProviderEducationFindManyArgsSchema } from "../outputTypeSchemas/ProviderEducationFindManyArgsSchema"
import { ProviderFavoriteTestFindManyArgsSchema } from "../outputTypeSchemas/ProviderFavoriteTestFindManyArgsSchema"
import { ProviderOrganizationFindManyArgsSchema } from "../outputTypeSchemas/ProviderOrganizationFindManyArgsSchema"
import { ProviderCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProviderCountOutputTypeArgsSchema"

export const ProviderIncludeSchema: z.ZodType<Prisma.ProviderInclude> = z.object({
  orderingProviderLabOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  treatingProviderLabOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  userAttribute: z.union([z.boolean(),z.lazy(() => UserAttributeArgsSchema)]).optional(),
  providerEducation: z.union([z.boolean(),z.lazy(() => ProviderEducationFindManyArgsSchema)]).optional(),
  providerFavoriteTests: z.union([z.boolean(),z.lazy(() => ProviderFavoriteTestFindManyArgsSchema)]).optional(),
  providerOrganizations: z.union([z.boolean(),z.lazy(() => ProviderOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProviderCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default ProviderIncludeSchema;
