import { z } from 'zod';

export const OrderFormSectionScalarFieldEnumSchema = z.enum(['id','name','description','sortOrder','isActive','organizationId','createdBy','createdAt','updatedAt']);

export default OrderFormSectionScalarFieldEnumSchema;
