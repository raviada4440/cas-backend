import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationUpdateWithoutOrganizationInputSchema } from './ProviderOrganizationUpdateWithoutOrganizationInputSchema';
import { ProviderOrganizationUncheckedUpdateWithoutOrganizationInputSchema } from './ProviderOrganizationUncheckedUpdateWithoutOrganizationInputSchema';
import { ProviderOrganizationCreateWithoutOrganizationInputSchema } from './ProviderOrganizationCreateWithoutOrganizationInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema';

export const ProviderOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.ProviderOrganizationUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProviderOrganizationUpdateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default ProviderOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema;
