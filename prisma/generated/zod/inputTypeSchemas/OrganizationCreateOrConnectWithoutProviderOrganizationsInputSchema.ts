import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutProviderOrganizationsInputSchema } from './OrganizationCreateWithoutProviderOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema';

export const OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutProviderOrganizationsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema;
