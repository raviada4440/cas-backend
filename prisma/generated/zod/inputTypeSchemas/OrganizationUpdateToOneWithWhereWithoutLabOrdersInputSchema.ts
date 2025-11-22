import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutLabOrdersInputSchema } from './OrganizationUpdateWithoutLabOrdersInputSchema';
import { OrganizationUncheckedUpdateWithoutLabOrdersInputSchema } from './OrganizationUncheckedUpdateWithoutLabOrdersInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutLabOrdersInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutLabOrdersInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutLabOrdersInputSchema;
