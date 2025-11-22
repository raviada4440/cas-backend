import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutUserIdentitiesInputSchema } from './OrganizationCreateWithoutUserIdentitiesInputSchema';
import { OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema } from './OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema';

export const OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutUserIdentitiesInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema;
