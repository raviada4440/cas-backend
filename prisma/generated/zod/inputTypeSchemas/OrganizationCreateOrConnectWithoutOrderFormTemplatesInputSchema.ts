import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationCreateWithoutOrderFormTemplatesInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema';

export const OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrderFormTemplatesInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema;
