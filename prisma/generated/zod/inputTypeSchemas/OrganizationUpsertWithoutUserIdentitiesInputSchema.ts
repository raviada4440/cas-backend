import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutUserIdentitiesInputSchema } from './OrganizationUpdateWithoutUserIdentitiesInputSchema';
import { OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema } from './OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema';
import { OrganizationCreateWithoutUserIdentitiesInputSchema } from './OrganizationCreateWithoutUserIdentitiesInputSchema';
import { OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema } from './OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutUserIdentitiesInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutUserIdentitiesInputSchema;
