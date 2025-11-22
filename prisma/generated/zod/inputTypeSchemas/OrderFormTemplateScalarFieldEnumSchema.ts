import { z } from 'zod';

export const OrderFormTemplateScalarFieldEnumSchema = z.enum(['id','orderFormSectionId','name','description','status','version','effectiveDate','retiredDate','formSchema','layoutSchema','organizationId','isGlobal','createdBy','createdAt','updatedAt']);

export default OrderFormTemplateScalarFieldEnumSchema;
