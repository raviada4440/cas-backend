import { z } from 'zod';
import { ApprovalStatusSchema } from '../inputTypeSchemas/ApprovalStatusSchema'
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'

/////////////////////////////////////////
// TEST CATALOG APPROVAL SCHEMA
/////////////////////////////////////////

export const TestCatalogApprovalSchema = z.object({
  status: ApprovalStatusSchema,
  id: z.string(),
  versionId: z.string().nullable(),
  testConfigurationId: z.string().nullable(),
  workflowStep: z.number(),
  stepName: z.string(),
  requiredRole: z.string().nullable(),
  comments: z.string().nullable(),
  approvedBy: z.string().nullable(),
  approvedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogApproval = z.infer<typeof TestCatalogApprovalSchema>

/////////////////////////////////////////
// TEST CATALOG APPROVAL PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogApprovalPartialSchema = TestCatalogApprovalSchema.partial()

export type TestCatalogApprovalPartial = z.infer<typeof TestCatalogApprovalPartialSchema>

/////////////////////////////////////////
// TEST CATALOG APPROVAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogApprovalRelations = {
  version?: TestCatalogVersionWithRelations | null;
  configuration?: TestCatalogConfigurationWithRelations | null;
};

export type TestCatalogApprovalWithRelations = z.infer<typeof TestCatalogApprovalSchema> & TestCatalogApprovalRelations

export const TestCatalogApprovalWithRelationsSchema: z.ZodType<TestCatalogApprovalWithRelations> = TestCatalogApprovalSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema).nullable(),
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// TEST CATALOG APPROVAL PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogApprovalPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations | null;
  configuration?: TestCatalogConfigurationPartialWithRelations | null;
};

export type TestCatalogApprovalPartialWithRelations = z.infer<typeof TestCatalogApprovalPartialSchema> & TestCatalogApprovalPartialRelations

export const TestCatalogApprovalPartialWithRelationsSchema: z.ZodType<TestCatalogApprovalPartialWithRelations> = TestCatalogApprovalPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).nullable(),
})).partial()

export type TestCatalogApprovalWithPartialRelations = z.infer<typeof TestCatalogApprovalSchema> & TestCatalogApprovalPartialRelations

export const TestCatalogApprovalWithPartialRelationsSchema: z.ZodType<TestCatalogApprovalWithPartialRelations> = TestCatalogApprovalSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).nullable(),
}).partial())

export default TestCatalogApprovalSchema;
