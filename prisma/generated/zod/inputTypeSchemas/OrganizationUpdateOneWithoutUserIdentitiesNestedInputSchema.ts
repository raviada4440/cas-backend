import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutUserIdentitiesInputSchema } from './OrganizationCreateWithoutUserIdentitiesInputSchema';
import { OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema } from './OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema';
import { OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema } from './OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema';
import { OrganizationUpsertWithoutUserIdentitiesInputSchema } from './OrganizationUpsertWithoutUserIdentitiesInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutUserIdentitiesInputSchema } from './OrganizationUpdateToOneWithWhereWithoutUserIdentitiesInputSchema';
import { OrganizationUpdateWithoutUserIdentitiesInputSchema } from './OrganizationUpdateWithoutUserIdentitiesInputSchema';
import { OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema } from './OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema';

export const OrganizationUpdateOneWithoutUserIdentitiesNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutUserIdentitiesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUserIdentitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUserIdentitiesInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutUserIdentitiesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUpdateWithoutUserIdentitiesInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutUserIdentitiesInputSchema) ]).optional(),
});

export default OrganizationUpdateOneWithoutUserIdentitiesNestedInputSchema;
