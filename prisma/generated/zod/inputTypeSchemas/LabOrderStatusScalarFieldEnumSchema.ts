import { z } from 'zod';

export const LabOrderStatusScalarFieldEnumSchema = z.enum(['id','labOrderId','status','statusDate','createdAt','updatedAt']);

export default LabOrderStatusScalarFieldEnumSchema;
