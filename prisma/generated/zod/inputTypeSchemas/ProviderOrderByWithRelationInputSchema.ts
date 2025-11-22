import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderOrderByRelationAggregateInputSchema } from './LabOrderOrderByRelationAggregateInputSchema';
import { UserAttributeOrderByWithRelationInputSchema } from './UserAttributeOrderByWithRelationInputSchema';
import { ProviderEducationOrderByRelationAggregateInputSchema } from './ProviderEducationOrderByRelationAggregateInputSchema';
import { ProviderFavoriteTestOrderByRelationAggregateInputSchema } from './ProviderFavoriteTestOrderByRelationAggregateInputSchema';
import { ProviderOrganizationOrderByRelationAggregateInputSchema } from './ProviderOrganizationOrderByRelationAggregateInputSchema';

export const ProviderOrderByWithRelationInputSchema: z.ZodType<Prisma.ProviderOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  href: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  npi: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  credentials: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specialty: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  aboutme: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  providerType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  affiliation: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  proceduresAndResearch: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specialInterests: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAttributeId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  orderingProviderLabOrders: z.lazy(() => LabOrderOrderByRelationAggregateInputSchema).optional(),
  treatingProviderLabOrders: z.lazy(() => LabOrderOrderByRelationAggregateInputSchema).optional(),
  userAttribute: z.lazy(() => UserAttributeOrderByWithRelationInputSchema).optional(),
  providerEducation: z.lazy(() => ProviderEducationOrderByRelationAggregateInputSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestOrderByRelationAggregateInputSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationOrderByRelationAggregateInputSchema).optional(),
});

export default ProviderOrderByWithRelationInputSchema;
