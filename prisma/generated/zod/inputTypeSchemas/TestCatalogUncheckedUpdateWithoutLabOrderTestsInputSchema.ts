import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { EnumTestCatalogStatusFieldUpdateOperationsInputSchema } from './EnumTestCatalogStatusFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUncheckedUpdateManyWithoutTestNestedInputSchema } from './TestCatalogVersionUncheckedUpdateManyWithoutTestNestedInputSchema';
import { TestCatalogConfigurationUncheckedUpdateManyWithoutTestNestedInputSchema } from './TestCatalogConfigurationUncheckedUpdateManyWithoutTestNestedInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema } from './OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema';
import { ProviderFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema } from './ProviderFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema';
import { SponsoredTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema } from './SponsoredTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema';
import { TestCatalogAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema } from './TestCatalogAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema';
import { ConsentAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema } from './ConsentAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema';
import { TestGeneUncheckedUpdateManyWithoutTestCatalogNestedInputSchema } from './TestGeneUncheckedUpdateManyWithoutTestCatalogNestedInputSchema';

export const TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateWithoutLabOrderTestsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  labId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  labTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specialNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testSubCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => TestCatalogStatusSchema), z.lazy(() => EnumTestCatalogStatusFieldUpdateOperationsInputSchema) ]).optional(),
  defaultVersionId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  currentVersion: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  versions: z.lazy(() => TestCatalogVersionUncheckedUpdateManyWithoutTestNestedInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationUncheckedUpdateManyWithoutTestNestedInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  auditLogs: z.lazy(() => TestCatalogAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema).optional(),
  testGenes: z.lazy(() => TestGeneUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
});

export default TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema;
