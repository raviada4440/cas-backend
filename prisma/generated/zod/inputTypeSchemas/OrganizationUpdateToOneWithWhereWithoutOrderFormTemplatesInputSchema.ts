import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutOrderFormTemplatesInputSchema } from './OrganizationUpdateWithoutOrderFormTemplatesInputSchema';
import { OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema } from './OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutOrderFormTemplatesInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrderFormTemplatesInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutOrderFormTemplatesInputSchema;
