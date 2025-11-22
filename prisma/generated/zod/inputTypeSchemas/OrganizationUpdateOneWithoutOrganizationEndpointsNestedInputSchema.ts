import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationCreateWithoutOrganizationEndpointsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema';
import { OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema } from './OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema';
import { OrganizationUpsertWithoutOrganizationEndpointsInputSchema } from './OrganizationUpsertWithoutOrganizationEndpointsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutOrganizationEndpointsInputSchema } from './OrganizationUpdateToOneWithWhereWithoutOrganizationEndpointsInputSchema';
import { OrganizationUpdateWithoutOrganizationEndpointsInputSchema } from './OrganizationUpdateWithoutOrganizationEndpointsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema } from './OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema';

export const OrganizationUpdateOneWithoutOrganizationEndpointsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutOrganizationEndpointsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutOrganizationEndpointsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUpdateWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema) ]).optional(),
});

export default OrganizationUpdateOneWithoutOrganizationEndpointsNestedInputSchema;
