import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutProviderOrganizationsInputSchema } from './OrganizationCreateWithoutProviderOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema';
import { OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema } from './OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutProviderOrganizationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutProviderOrganizationsInputSchema;
