-- Increase labCode length from 2 to 3 characters
ALTER TABLE "Lab"
  ALTER COLUMN "labCode" TYPE varchar(3);

