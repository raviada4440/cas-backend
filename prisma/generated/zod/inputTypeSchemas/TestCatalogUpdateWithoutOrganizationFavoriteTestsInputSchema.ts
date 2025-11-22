import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { EnumTestCatalogStatusFieldUpdateOperationsInputSchema } from './EnumTestCatalogStatusFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUpdateManyWithoutTestNestedInputSchema } from './TestCatalogVersionUpdateManyWithoutTestNestedInputSchema';
import { TestCatalogVersionUpdateOneWithoutDefaultForTestsNestedInputSchema } from './TestCatalogVersionUpdateOneWithoutDefaultForTestsNestedInputSchema';
import { TestCatalogConfigurationUpdateManyWithoutTestNestedInputSchema } from './TestCatalogConfigurationUpdateManyWithoutTestNestedInputSchema';
import { LabUpdateOneWithoutTestCatalogsNestedInputSchema } from './LabUpdateOneWithoutTestCatalogsNestedInputSchema';
import { LabOrderTestUpdateManyWithoutTestCatalogNestedInputSchema } from './LabOrderTestUpdateManyWithoutTestCatalogNestedInputSchema';
import { ProviderFavoriteTestUpdateManyWithoutTestCatalogNestedInputSchema } from './ProviderFavoriteTestUpdateManyWithoutTestCatalogNestedInputSchema';
import { SponsoredTestUpdateManyWithoutTestCatalogNestedInputSchema } from './SponsoredTestUpdateManyWithoutTestCatalogNestedInputSchema';
import { TestCatalogAuditLogUpdateManyWithoutTestNestedInputSchema } from './TestCatalogAuditLogUpdateManyWithoutTestNestedInputSchema';
import { ConsentAuditLogUpdateManyWithoutTestNestedInputSchema } from './ConsentAuditLogUpdateManyWithoutTestNestedInputSchema';
import { TestGeneUpdateManyWithoutTestCatalogNestedInputSchema } from './TestGeneUpdateManyWithoutTestCatalogNestedInputSchema';

export const TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  casandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  labTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specialNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testSubCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => TestCatalogStatusSchema), z.lazy(() => EnumTestCatalogStatusFieldUpdateOperationsInputSchema) ]).optional(),
  currentVersion: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  versions: z.lazy(() => TestCatalogVersionUpdateManyWithoutTestNestedInputSchema).optional(),
  defaultVersion: z.lazy(() => TestCatalogVersionUpdateOneWithoutDefaultForTestsNestedInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationUpdateManyWithoutTestNestedInputSchema).optional(),
  lab: z.lazy(() => LabUpdateOneWithoutTestCatalogsNestedInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  auditLogs: z.lazy(() => TestCatalogAuditLogUpdateManyWithoutTestNestedInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogUpdateManyWithoutTestNestedInputSchema).optional(),
  testGenes: z.lazy(() => TestGeneUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
});

export default TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema;
