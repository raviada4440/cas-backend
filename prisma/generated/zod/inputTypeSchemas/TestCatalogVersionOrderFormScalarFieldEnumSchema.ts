import { z } from 'zod';

export const TestCatalogVersionOrderFormScalarFieldEnumSchema = z.enum(['id','versionId','configurationId','orderFormTemplateId','displayOrder','customTitle','isRequired','isVisible','createdBy','createdAt','updatedAt']);

export default TestCatalogVersionOrderFormScalarFieldEnumSchema;
