import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointCreateWithoutOrganizationInputSchema } from './OrganizationEndpointCreateWithoutOrganizationInputSchema';
import { OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema';
import { OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema } from './OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema';
import { OrganizationEndpointUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './OrganizationEndpointUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema } from './OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema';
import { OrganizationEndpointWhereUniqueInputSchema } from './OrganizationEndpointWhereUniqueInputSchema';
import { OrganizationEndpointUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './OrganizationEndpointUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { OrganizationEndpointUpdateManyWithWhereWithoutOrganizationInputSchema } from './OrganizationEndpointUpdateManyWithWhereWithoutOrganizationInputSchema';
import { OrganizationEndpointScalarWhereInputSchema } from './OrganizationEndpointScalarWhereInputSchema';

export const OrganizationEndpointUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.OrganizationEndpointUncheckedUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationEndpointCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganizationEndpointUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganizationEndpointWhereUniqueInputSchema), z.lazy(() => OrganizationEndpointWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganizationEndpointWhereUniqueInputSchema), z.lazy(() => OrganizationEndpointWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganizationEndpointWhereUniqueInputSchema), z.lazy(() => OrganizationEndpointWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganizationEndpointWhereUniqueInputSchema), z.lazy(() => OrganizationEndpointWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganizationEndpointUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganizationEndpointUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganizationEndpointScalarWhereInputSchema), z.lazy(() => OrganizationEndpointScalarWhereInputSchema).array() ]).optional(),
});

export default OrganizationEndpointUncheckedUpdateManyWithoutOrganizationNestedInputSchema;
