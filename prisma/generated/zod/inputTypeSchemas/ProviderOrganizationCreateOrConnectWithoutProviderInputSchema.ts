import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationCreateWithoutProviderInputSchema } from './ProviderOrganizationCreateWithoutProviderInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutProviderInputSchema } from './ProviderOrganizationUncheckedCreateWithoutProviderInputSchema';

export const ProviderOrganizationCreateOrConnectWithoutProviderInputSchema: z.ZodType<Prisma.ProviderOrganizationCreateOrConnectWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutProviderInputSchema) ]),
});

export default ProviderOrganizationCreateOrConnectWithoutProviderInputSchema;
