import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutLabOrdersInputSchema } from './OrganizationCreateWithoutLabOrdersInputSchema';
import { OrganizationUncheckedCreateWithoutLabOrdersInputSchema } from './OrganizationUncheckedCreateWithoutLabOrdersInputSchema';

export const OrganizationCreateOrConnectWithoutLabOrdersInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutLabOrdersInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutLabOrdersInputSchema;
