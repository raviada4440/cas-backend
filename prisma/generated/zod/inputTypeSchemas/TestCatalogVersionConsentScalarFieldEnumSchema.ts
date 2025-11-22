import { z } from 'zod';

export const TestCatalogVersionConsentScalarFieldEnumSchema = z.enum(['id','versionId','configurationId','consentTemplateId','isRequired','displayOrder','customTitle','customContent','conditionalLogic','dependsOnConsent','createdBy','createdAt','updatedAt']);

export default TestCatalogVersionConsentScalarFieldEnumSchema;
