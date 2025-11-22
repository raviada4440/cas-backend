import { z } from 'zod';
import { AuditActionSchema } from '../inputTypeSchemas/AuditActionSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'

/////////////////////////////////////////
// TEST CATALOG AUDIT LOG SCHEMA
/////////////////////////////////////////

export const TestCatalogAuditLogSchema = z.object({
  action: AuditActionSchema,
  id: z.string(),
  testId: z.string(),
  versionNumber: z.number().nullable(),
  configurationId: z.string().nullable(),
  fieldName: z.string().nullable(),
  oldValue: z.string().nullable(),
  newValue: z.string().nullable(),
  changeReason: z.string().nullable(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  performedBy: z.string().nullable(),
  performedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogAuditLog = z.infer<typeof TestCatalogAuditLogSchema>

/////////////////////////////////////////
// TEST CATALOG AUDIT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogAuditLogPartialSchema = TestCatalogAuditLogSchema.partial()

export type TestCatalogAuditLogPartial = z.infer<typeof TestCatalogAuditLogPartialSchema>

/////////////////////////////////////////
// TEST CATALOG AUDIT LOG RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogAuditLogRelations = {
  test: TestCatalogWithRelations;
};

export type TestCatalogAuditLogWithRelations = z.infer<typeof TestCatalogAuditLogSchema> & TestCatalogAuditLogRelations

export const TestCatalogAuditLogWithRelationsSchema: z.ZodType<TestCatalogAuditLogWithRelations> = TestCatalogAuditLogSchema.merge(z.object({
  test: z.lazy(() => TestCatalogWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CATALOG AUDIT LOG PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogAuditLogPartialRelations = {
  test?: TestCatalogPartialWithRelations;
};

export type TestCatalogAuditLogPartialWithRelations = z.infer<typeof TestCatalogAuditLogPartialSchema> & TestCatalogAuditLogPartialRelations

export const TestCatalogAuditLogPartialWithRelationsSchema: z.ZodType<TestCatalogAuditLogPartialWithRelations> = TestCatalogAuditLogPartialSchema.merge(z.object({
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema),
})).partial()

export type TestCatalogAuditLogWithPartialRelations = z.infer<typeof TestCatalogAuditLogSchema> & TestCatalogAuditLogPartialRelations

export const TestCatalogAuditLogWithPartialRelationsSchema: z.ZodType<TestCatalogAuditLogWithPartialRelations> = TestCatalogAuditLogSchema.merge(z.object({
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema),
}).partial())

export default TestCatalogAuditLogSchema;
