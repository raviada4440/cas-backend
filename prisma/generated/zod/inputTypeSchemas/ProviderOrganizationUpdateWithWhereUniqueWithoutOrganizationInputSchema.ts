import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationUpdateWithoutOrganizationInputSchema } from './ProviderOrganizationUpdateWithoutOrganizationInputSchema';
import { ProviderOrganizationUncheckedUpdateWithoutOrganizationInputSchema } from './ProviderOrganizationUncheckedUpdateWithoutOrganizationInputSchema';

export const ProviderOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.ProviderOrganizationUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProviderOrganizationUpdateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default ProviderOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema;
