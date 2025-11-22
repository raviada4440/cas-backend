import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutUserIdentitiesInputSchema } from './OrganizationUpdateWithoutUserIdentitiesInputSchema';
import { OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema } from './OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutUserIdentitiesInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutUserIdentitiesInputSchema;
