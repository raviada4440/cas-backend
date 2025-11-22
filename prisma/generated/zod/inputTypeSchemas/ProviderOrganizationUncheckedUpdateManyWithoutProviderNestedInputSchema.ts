import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationCreateWithoutProviderInputSchema } from './ProviderOrganizationCreateWithoutProviderInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutProviderInputSchema } from './ProviderOrganizationUncheckedCreateWithoutProviderInputSchema';
import { ProviderOrganizationCreateOrConnectWithoutProviderInputSchema } from './ProviderOrganizationCreateOrConnectWithoutProviderInputSchema';
import { ProviderOrganizationUpsertWithWhereUniqueWithoutProviderInputSchema } from './ProviderOrganizationUpsertWithWhereUniqueWithoutProviderInputSchema';
import { ProviderOrganizationCreateManyProviderInputEnvelopeSchema } from './ProviderOrganizationCreateManyProviderInputEnvelopeSchema';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationUpdateWithWhereUniqueWithoutProviderInputSchema } from './ProviderOrganizationUpdateWithWhereUniqueWithoutProviderInputSchema';
import { ProviderOrganizationUpdateManyWithWhereWithoutProviderInputSchema } from './ProviderOrganizationUpdateManyWithWhereWithoutProviderInputSchema';
import { ProviderOrganizationScalarWhereInputSchema } from './ProviderOrganizationScalarWhereInputSchema';

export const ProviderOrganizationUncheckedUpdateManyWithoutProviderNestedInputSchema: z.ZodType<Prisma.ProviderOrganizationUncheckedUpdateManyWithoutProviderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationCreateWithoutProviderInputSchema).array(), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderOrganizationCreateOrConnectWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationCreateOrConnectWithoutProviderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProviderOrganizationUpsertWithWhereUniqueWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUpsertWithWhereUniqueWithoutProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderOrganizationCreateManyProviderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProviderOrganizationUpdateWithWhereUniqueWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUpdateWithWhereUniqueWithoutProviderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProviderOrganizationUpdateManyWithWhereWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUpdateManyWithWhereWithoutProviderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProviderOrganizationScalarWhereInputSchema), z.lazy(() => ProviderOrganizationScalarWhereInputSchema).array() ]).optional(),
});

export default ProviderOrganizationUncheckedUpdateManyWithoutProviderNestedInputSchema;
