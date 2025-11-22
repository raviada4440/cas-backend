import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationCreateWithoutOrderFormTemplatesInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema';
import { OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema } from './OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutOrderFormTemplatesInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrderFormTemplatesInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutOrderFormTemplatesInputSchema;
