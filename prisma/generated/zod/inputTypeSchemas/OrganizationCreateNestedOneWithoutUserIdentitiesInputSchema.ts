import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutUserIdentitiesInputSchema } from './OrganizationCreateWithoutUserIdentitiesInputSchema';
import { OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema } from './OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema';
import { OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema } from './OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutUserIdentitiesInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema;
