import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionOrderByRelationAggregateInputSchema } from './TestCatalogVersionOrderByRelationAggregateInputSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';
import { TestCatalogConfigurationOrderByRelationAggregateInputSchema } from './TestCatalogConfigurationOrderByRelationAggregateInputSchema';
import { LabOrderByWithRelationInputSchema } from './LabOrderByWithRelationInputSchema';
import { LabOrderTestOrderByRelationAggregateInputSchema } from './LabOrderTestOrderByRelationAggregateInputSchema';
import { OrganizationFavoriteTestOrderByRelationAggregateInputSchema } from './OrganizationFavoriteTestOrderByRelationAggregateInputSchema';
import { ProviderFavoriteTestOrderByRelationAggregateInputSchema } from './ProviderFavoriteTestOrderByRelationAggregateInputSchema';
import { SponsoredTestOrderByRelationAggregateInputSchema } from './SponsoredTestOrderByRelationAggregateInputSchema';
import { TestCatalogAuditLogOrderByRelationAggregateInputSchema } from './TestCatalogAuditLogOrderByRelationAggregateInputSchema';
import { ConsentAuditLogOrderByRelationAggregateInputSchema } from './ConsentAuditLogOrderByRelationAggregateInputSchema';
import { TestGeneOrderByRelationAggregateInputSchema } from './TestGeneOrderByRelationAggregateInputSchema';

export const TestCatalogOrderByWithRelationInputSchema: z.ZodType<Prisma.TestCatalogOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  casandraTestId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specialNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testSubCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  defaultVersionId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  currentVersion: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  versions: z.lazy(() => TestCatalogVersionOrderByRelationAggregateInputSchema).optional(),
  defaultVersion: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationOrderByRelationAggregateInputSchema).optional(),
  lab: z.lazy(() => LabOrderByWithRelationInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestOrderByRelationAggregateInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestOrderByRelationAggregateInputSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestOrderByRelationAggregateInputSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestOrderByRelationAggregateInputSchema).optional(),
  auditLogs: z.lazy(() => TestCatalogAuditLogOrderByRelationAggregateInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogOrderByRelationAggregateInputSchema).optional(),
  testGenes: z.lazy(() => TestGeneOrderByRelationAggregateInputSchema).optional(),
});

export default TestCatalogOrderByWithRelationInputSchema;
