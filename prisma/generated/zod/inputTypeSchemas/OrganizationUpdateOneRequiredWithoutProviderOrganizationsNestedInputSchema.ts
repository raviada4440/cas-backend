import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutProviderOrganizationsInputSchema } from './OrganizationCreateWithoutProviderOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema';
import { OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema } from './OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema';
import { OrganizationUpsertWithoutProviderOrganizationsInputSchema } from './OrganizationUpsertWithoutProviderOrganizationsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema } from './OrganizationUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema';
import { OrganizationUpdateWithoutProviderOrganizationsInputSchema } from './OrganizationUpdateWithoutProviderOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema';

export const OrganizationUpdateOneRequiredWithoutProviderOrganizationsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutProviderOrganizationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutProviderOrganizationsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutProviderOrganizationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUpdateWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema) ]).optional(),
});

export default OrganizationUpdateOneRequiredWithoutProviderOrganizationsNestedInputSchema;
