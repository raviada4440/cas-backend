import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema } from './OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUpdateManyWithWhereWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUpdateManyWithWhereWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestScalarWhereInputSchema } from './OrganizationFavoriteTestScalarWhereInputSchema';

export const OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganizationFavoriteTestUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema), z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema).array() ]).optional(),
});

export default OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationNestedInputSchema;
