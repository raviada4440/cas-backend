import { z } from 'zod';

export const LabOrderSpecimenScalarFieldEnumSchema = z.enum(['id','labOrderId','specimenType','specimenCount','collectedDate','collectedTime','specimenId','bodySite','tumorType','fixative','fixativeDuration','coldIschemicTime','patientAddress1','patientAddress2','patientCity','patientState','patientZip','pscLab','pscLocation','pscAppointmentAt','pscAppointmentTime','createdAt','updatedAt']);

export default LabOrderSpecimenScalarFieldEnumSchema;
