import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationCreateWithoutOrganizationInputSchema } from './ProviderOrganizationCreateWithoutOrganizationInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema';
import { ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema } from './ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema';
import { ProviderOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './ProviderOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema } from './ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './ProviderOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { ProviderOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema } from './ProviderOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema';
import { ProviderOrganizationScalarWhereInputSchema } from './ProviderOrganizationScalarWhereInputSchema';

export const ProviderOrganizationUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.ProviderOrganizationUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationCreateWithoutOrganizationInputSchema).array(), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProviderOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProviderOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProviderOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProviderOrganizationScalarWhereInputSchema), z.lazy(() => ProviderOrganizationScalarWhereInputSchema).array() ]).optional(),
});

export default ProviderOrganizationUpdateManyWithoutOrganizationNestedInputSchema;
