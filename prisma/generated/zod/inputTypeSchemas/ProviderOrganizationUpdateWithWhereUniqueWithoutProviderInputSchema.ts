import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationUpdateWithoutProviderInputSchema } from './ProviderOrganizationUpdateWithoutProviderInputSchema';
import { ProviderOrganizationUncheckedUpdateWithoutProviderInputSchema } from './ProviderOrganizationUncheckedUpdateWithoutProviderInputSchema';

export const ProviderOrganizationUpdateWithWhereUniqueWithoutProviderInputSchema: z.ZodType<Prisma.ProviderOrganizationUpdateWithWhereUniqueWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProviderOrganizationUpdateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUncheckedUpdateWithoutProviderInputSchema) ]),
});

export default ProviderOrganizationUpdateWithWhereUniqueWithoutProviderInputSchema;
