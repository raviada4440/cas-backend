import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutLabOrdersInputSchema } from './OrganizationUpdateWithoutLabOrdersInputSchema';
import { OrganizationUncheckedUpdateWithoutLabOrdersInputSchema } from './OrganizationUncheckedUpdateWithoutLabOrdersInputSchema';
import { OrganizationCreateWithoutLabOrdersInputSchema } from './OrganizationCreateWithoutLabOrdersInputSchema';
import { OrganizationUncheckedCreateWithoutLabOrdersInputSchema } from './OrganizationUncheckedCreateWithoutLabOrdersInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutLabOrdersInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutLabOrdersInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutLabOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutLabOrdersInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutLabOrdersInputSchema;
