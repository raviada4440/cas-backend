import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationCreateWithoutOrganizationInputSchema } from './ProviderOrganizationCreateWithoutOrganizationInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema';

export const ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.ProviderOrganizationCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default ProviderOrganizationCreateOrConnectWithoutOrganizationInputSchema;
