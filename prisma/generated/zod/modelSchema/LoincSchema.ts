import { z } from 'zod';
import { TestCatalogVersionOrderLoincWithRelationsSchema, TestCatalogVersionOrderLoincPartialWithRelationsSchema } from './TestCatalogVersionOrderLoincSchema'
import type { TestCatalogVersionOrderLoincWithRelations, TestCatalogVersionOrderLoincPartialWithRelations } from './TestCatalogVersionOrderLoincSchema'
import { TestCatalogVersionResultLoincWithRelationsSchema, TestCatalogVersionResultLoincPartialWithRelationsSchema } from './TestCatalogVersionResultLoincSchema'
import type { TestCatalogVersionResultLoincWithRelations, TestCatalogVersionResultLoincPartialWithRelations } from './TestCatalogVersionResultLoincSchema'
import { TestConfigOrderLoincWithRelationsSchema, TestConfigOrderLoincPartialWithRelationsSchema } from './TestConfigOrderLoincSchema'
import type { TestConfigOrderLoincWithRelations, TestConfigOrderLoincPartialWithRelations } from './TestConfigOrderLoincSchema'
import { TestConfigResultLoincWithRelationsSchema, TestConfigResultLoincPartialWithRelationsSchema } from './TestConfigResultLoincSchema'
import type { TestConfigResultLoincWithRelations, TestConfigResultLoincPartialWithRelations } from './TestConfigResultLoincSchema'

/////////////////////////////////////////
// LOINC SCHEMA
/////////////////////////////////////////

export const LoincSchema = z.object({
  loincNum: z.string(),
  component: z.string().nullable(),
  property: z.string().nullable(),
  timeAspct: z.string().nullable(),
  system: z.string().nullable(),
  scaleTyp: z.string().nullable(),
  methodTyp: z.string().nullable(),
  class: z.string().nullable(),
  versionLastChanged: z.string().nullable(),
  chngType: z.string().nullable(),
  definitionDescription: z.string().nullable(),
  status: z.string().nullable(),
  consumerName: z.string().nullable(),
  classtype: z.number().nullable(),
  formula: z.string().nullable(),
  exmplAnswers: z.string().nullable(),
  surveyQuestText: z.string().nullable(),
  surveyQuestSrc: z.string().nullable(),
  unitsrequired: z.string().nullable(),
  relatednames2: z.string().nullable(),
  shortname: z.string().nullable(),
  orderObs: z.string().nullable(),
  hl7FieldSubfieldId: z.string().nullable(),
  externalCopyrightNotice: z.string().nullable(),
  exampleUnits: z.string().nullable(),
  longCommonName: z.string().nullable(),
  exampleUcumUnits: z.string().nullable(),
  statusReason: z.string().nullable(),
  statusText: z.string().nullable(),
  changeReasonPublic: z.string().nullable(),
  commonTestRank: z.number().nullable(),
  commonOrderRank: z.number().nullable(),
  hl7AttachmentStructure: z.string().nullable(),
  externalCopyrightLink: z.string().nullable(),
  panelType: z.string().nullable(),
  askAtOrderEntry: z.string().nullable(),
  associatedObservations: z.string().nullable(),
  versionFirstReleased: z.string().nullable(),
  validHl7AttachmentRequest: z.string().nullable(),
  displayName: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Loinc = z.infer<typeof LoincSchema>

/////////////////////////////////////////
// LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const LoincPartialSchema = LoincSchema.partial()

export type LoincPartial = z.infer<typeof LoincPartialSchema>

/////////////////////////////////////////
// LOINC RELATION SCHEMA
/////////////////////////////////////////

export type LoincRelations = {
  testOrderLoincs: TestCatalogVersionOrderLoincWithRelations[];
  testResultLoincs: TestCatalogVersionResultLoincWithRelations[];
  configOrderLoincs: TestConfigOrderLoincWithRelations[];
  configResultLoincs: TestConfigResultLoincWithRelations[];
};

export type LoincWithRelations = z.infer<typeof LoincSchema> & LoincRelations

export const LoincWithRelationsSchema: z.ZodType<LoincWithRelations> = LoincSchema.merge(z.object({
  testOrderLoincs: z.lazy(() => TestCatalogVersionOrderLoincWithRelationsSchema).array(),
  testResultLoincs: z.lazy(() => TestCatalogVersionResultLoincWithRelationsSchema).array(),
  configOrderLoincs: z.lazy(() => TestConfigOrderLoincWithRelationsSchema).array(),
  configResultLoincs: z.lazy(() => TestConfigResultLoincWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// LOINC PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LoincPartialRelations = {
  testOrderLoincs?: TestCatalogVersionOrderLoincPartialWithRelations[];
  testResultLoincs?: TestCatalogVersionResultLoincPartialWithRelations[];
  configOrderLoincs?: TestConfigOrderLoincPartialWithRelations[];
  configResultLoincs?: TestConfigResultLoincPartialWithRelations[];
};

export type LoincPartialWithRelations = z.infer<typeof LoincPartialSchema> & LoincPartialRelations

export const LoincPartialWithRelationsSchema: z.ZodType<LoincPartialWithRelations> = LoincPartialSchema.merge(z.object({
  testOrderLoincs: z.lazy(() => TestCatalogVersionOrderLoincPartialWithRelationsSchema).array(),
  testResultLoincs: z.lazy(() => TestCatalogVersionResultLoincPartialWithRelationsSchema).array(),
  configOrderLoincs: z.lazy(() => TestConfigOrderLoincPartialWithRelationsSchema).array(),
  configResultLoincs: z.lazy(() => TestConfigResultLoincPartialWithRelationsSchema).array(),
})).partial()

export type LoincWithPartialRelations = z.infer<typeof LoincSchema> & LoincPartialRelations

export const LoincWithPartialRelationsSchema: z.ZodType<LoincWithPartialRelations> = LoincSchema.merge(z.object({
  testOrderLoincs: z.lazy(() => TestCatalogVersionOrderLoincPartialWithRelationsSchema).array(),
  testResultLoincs: z.lazy(() => TestCatalogVersionResultLoincPartialWithRelationsSchema).array(),
  configOrderLoincs: z.lazy(() => TestConfigOrderLoincPartialWithRelationsSchema).array(),
  configResultLoincs: z.lazy(() => TestConfigResultLoincPartialWithRelationsSchema).array(),
}).partial())

export default LoincSchema;
