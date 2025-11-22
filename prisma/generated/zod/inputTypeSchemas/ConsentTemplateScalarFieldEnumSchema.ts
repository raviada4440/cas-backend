import { z } from 'zod';

export const ConsentTemplateScalarFieldEnumSchema = z.enum(['id','name','description','consentType','isRequired','title','content','legalText','formSchema','status','version','effectiveDate','retiredDate','organizationId','isGlobal','createdBy','createdAt','updatedAt']);

export default ConsentTemplateScalarFieldEnumSchema;
