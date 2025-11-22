import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutLabOrdersInputSchema } from './OrganizationCreateWithoutLabOrdersInputSchema';
import { OrganizationUncheckedCreateWithoutLabOrdersInputSchema } from './OrganizationUncheckedCreateWithoutLabOrdersInputSchema';
import { OrganizationCreateOrConnectWithoutLabOrdersInputSchema } from './OrganizationCreateOrConnectWithoutLabOrdersInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutLabOrdersInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutLabOrdersInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutLabOrdersInputSchema;
