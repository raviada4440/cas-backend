ALTER TABLE IF EXISTS public."OrganizationEndpoint"
    ADD COLUMN "authorizationEndpoint" character varying(512);

ALTER TABLE IF EXISTS public."OrganizationEndpoint"
    ADD COLUMN "tokenEndpoint" character varying(512);