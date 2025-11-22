import { z } from 'zod';

export const TestCatalogConfigurationScalarFieldEnumSchema = z.enum(['id','testId','versionId','configurationName','versionNumber','customerId','organizationId','type','dimension','dimensionValue','operationalCode','status','isDefault','isActive','customTestName','customDescription','customTurnAroundTime','customPricing','customInstructions','customSpecimenRequirements','customCollectionMethod','effectiveDate','expirationDate','lastActivatedAt','lastDeactivatedAt','requiresConsent','consentTemplateIds','customConsentText','requiresApproval','approvalWorkflowId','approvedBy','approvedAt','createdBy','createdAt','updatedAt']);

export default TestCatalogConfigurationScalarFieldEnumSchema;
