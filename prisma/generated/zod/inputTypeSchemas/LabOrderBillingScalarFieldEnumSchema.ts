import { z } from 'zod';

export const LabOrderBillingScalarFieldEnumSchema = z.enum(['id','labOrderId','billToId','healthPlanId','patientStatus','sponsoredTestCouponCode','billingType','insuranceProvider','policyNumber','planName','groupNumber','benefitsId','insuredName','relationToPatient','insuredDob','insuredPhone','insurerState','referralAuthNumber','copayAmount','deductibleAmount','createdAt','updatedAt']);

export default LabOrderBillingScalarFieldEnumSchema;
