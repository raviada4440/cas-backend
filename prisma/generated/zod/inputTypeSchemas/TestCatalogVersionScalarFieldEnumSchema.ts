import { z } from 'zod';

export const TestCatalogVersionScalarFieldEnumSchema = z.enum(['id','testId','versionNumber','status','effectiveDate','retiredDate','changeReason','changeNotes','href','testName','alternativeName','alternativeName1','alternativeName2','alternativeName3','alternativeName4','alternativeName5','testIncludes','methodology','testDescription','diseases','probes','clinicalSignificance','diseaseIndications','testUsage','testLimitations','isNewYorkApproved','levelOfService','turnAroundTime','referenceRanges','setupSchedule','testCategory','testSubCategory','specialNotes','patientResources','providerResources','patientResourcesUrl','providerResourcesUrl','additionalNotes','isFDAApproved','createdBy','createdAt','updatedAt']);

export default TestCatalogVersionScalarFieldEnumSchema;
