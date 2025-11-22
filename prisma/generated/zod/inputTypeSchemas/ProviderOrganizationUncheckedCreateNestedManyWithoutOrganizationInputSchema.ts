import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationCreateWithoutOrganizationInputSchema } from './ProviderOrganizationCreateWithoutOrganizationInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema';
import { ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema } from './ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema';
import { ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema } from './ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';

export const ProviderOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.ProviderOrganizationUncheckedCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationCreateWithoutOrganizationInputSchema).array(), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProviderOrganizationWhereUniqueInputSchema), z.lazy(() => ProviderOrganizationWhereUniqueInputSchema).array() ]).optional(),
});

export default ProviderOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema;
