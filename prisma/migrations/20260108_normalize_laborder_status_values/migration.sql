-- Normalize LabOrderStatus.status to canonical enum-friendly values

UPDATE "LabOrderStatus" SET status = 'DRAFT' WHERE status ILIKE 'draft';
UPDATE "LabOrderStatus" SET status = 'SUBMITTED' WHERE status ILIKE 'submitted';
UPDATE "LabOrderStatus" SET status = 'PENDING_REVIEW' WHERE status ILIKE 'pending review';
UPDATE "LabOrderStatus" SET status = 'PRIOR_AUTH_PENDING' WHERE status ILIKE 'pa pending';
UPDATE "LabOrderStatus" SET status = 'PRIOR_AUTH_APPROVED' WHERE status ILIKE 'approved';
UPDATE "LabOrderStatus" SET status = 'SPECIMEN_SHIPPED' WHERE status ILIKE 'specimen shipped';
UPDATE "LabOrderStatus" SET status = 'SPECIMEN_IN_TRANSIT' WHERE status ILIKE 'in progress';
UPDATE "LabOrderStatus" SET status = 'CANCELLED' WHERE status ILIKE 'cancelled';
UPDATE "LabOrderStatus" SET status = 'WET_LAB_COMPLETED' WHERE status ILIKE 'completed';
UPDATE "LabOrderStatus" SET status = 'RESULTED' WHERE status ILIKE 'resulted';

