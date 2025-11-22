import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationCreateWithoutProviderInputSchema } from './ProviderOrganizationCreateWithoutProviderInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutProviderInputSchema } from './ProviderOrganizationUncheckedCreateWithoutProviderInputSchema';
import { ProviderOrganizationCreateOrConnectWithoutProviderInputSchema } from './ProviderOrganizationCreateOrConnectWithoutProviderInputSchema';
import { ProviderOrganizationCreateManyProviderInputEnvelopeSchema } from './ProviderOrganizationCreateManyProviderInputEnvelopeSchema';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';

export const ProviderOrganizationCreateNestedManyWithoutProviderInputSchema: z.ZodType<Prisma.ProviderOrganizationCreateNestedManyWithoutProviderInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationCreateWithoutProviderInputSchema).array(), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderOrganizationCreateOrConnectWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationCreateOrConnectWithoutProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderOrganizationCreateManyProviderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
});

export default ProviderOrganizationCreateNestedManyWithoutProviderInputSchema;
