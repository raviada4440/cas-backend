import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationCreateWithoutOrderFormTemplatesInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema';
import { OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema } from './OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema';
import { OrganizationUpsertWithoutOrderFormTemplatesInputSchema } from './OrganizationUpsertWithoutOrderFormTemplatesInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutOrderFormTemplatesInputSchema } from './OrganizationUpdateToOneWithWhereWithoutOrderFormTemplatesInputSchema';
import { OrganizationUpdateWithoutOrderFormTemplatesInputSchema } from './OrganizationUpdateWithoutOrderFormTemplatesInputSchema';
import { OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema } from './OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema';

export const OrganizationUpdateOneWithoutOrderFormTemplatesNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutOrderFormTemplatesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrderFormTemplatesInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutOrderFormTemplatesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUpdateWithoutOrderFormTemplatesInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrderFormTemplatesInputSchema) ]).optional(),
});

export default OrganizationUpdateOneWithoutOrderFormTemplatesNestedInputSchema;
