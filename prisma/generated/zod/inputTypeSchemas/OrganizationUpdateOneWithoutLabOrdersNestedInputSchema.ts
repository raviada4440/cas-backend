import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutLabOrdersInputSchema } from './OrganizationCreateWithoutLabOrdersInputSchema';
import { OrganizationUncheckedCreateWithoutLabOrdersInputSchema } from './OrganizationUncheckedCreateWithoutLabOrdersInputSchema';
import { OrganizationCreateOrConnectWithoutLabOrdersInputSchema } from './OrganizationCreateOrConnectWithoutLabOrdersInputSchema';
import { OrganizationUpsertWithoutLabOrdersInputSchema } from './OrganizationUpsertWithoutLabOrdersInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutLabOrdersInputSchema } from './OrganizationUpdateToOneWithWhereWithoutLabOrdersInputSchema';
import { OrganizationUpdateWithoutLabOrdersInputSchema } from './OrganizationUpdateWithoutLabOrdersInputSchema';
import { OrganizationUncheckedUpdateWithoutLabOrdersInputSchema } from './OrganizationUncheckedUpdateWithoutLabOrdersInputSchema';

export const OrganizationUpdateOneWithoutLabOrdersNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutLabOrdersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutLabOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUpdateWithoutLabOrdersInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutLabOrdersInputSchema) ]).optional(),
});

export default OrganizationUpdateOneWithoutLabOrdersNestedInputSchema;
