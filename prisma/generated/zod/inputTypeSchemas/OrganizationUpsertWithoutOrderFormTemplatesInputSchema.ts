import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutOrderFormTemplatesInputSchema } from './OrganizationUpdateWithoutOrderFormTemplatesInputSchema';
import { OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema } from './OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema';
import { OrganizationCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationCreateWithoutOrderFormTemplatesInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutOrderFormTemplatesInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutOrderFormTemplatesInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutOrderFormTemplatesInputSchema;
