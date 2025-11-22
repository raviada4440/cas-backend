import { z } from 'zod';

export const ApprovalStatusSchema = z.enum(['PENDING','APPROVED','REJECTED']);

export type ApprovalStatusType = `${z.infer<typeof ApprovalStatusSchema>}`

export default ApprovalStatusSchema;
