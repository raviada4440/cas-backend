export enum ErrorCodeEnum {
  NoContentCanBeModified = 1000,

  PostNotFound = 10000,
  PostExist = 10001,
  CategoryNotFound = 10002,
  CategoryCannotDeleted = 10003,
  CategoryAlreadyExists = 10004,

  UserNotFound = 30000,
  UserExist = 30001,

  LabNotFound = 40000,
  BiomarkerNotFound = 40010,
  IcdNotFound = 40020,
  CptNotFound = 40030,
  LoincNotFound = 40040,
  TestNotFound = 41000,
  TestVersionNotFound = 41010,
  TestConfigurationNotFound = 41020,
  OrderFormSectionNotFound = 41100,
  OrderFormTemplateNotFound = 41110,
  LabOrderNotFound = 42000,
  PatientNotFound = 42010,
  ProviderNotFound = 42020,
  OrganizationNotFound = 42030,
  OrganizationEndpointNotFound = 42040,
}

type ErrorDescriptor = {
  key: string
  status: number
}

export const ErrorCode = Object.freeze<Record<ErrorCodeEnum, ErrorDescriptor>>({
  [ErrorCodeEnum.NoContentCanBeModified]: { key: 'errors.no_content_can_be_modified', status: 400 },
  [ErrorCodeEnum.PostNotFound]: { key: 'errors.post_not_found', status: 404 },
  [ErrorCodeEnum.PostExist]: { key: 'errors.post_exist', status: 400 },
  [ErrorCodeEnum.CategoryNotFound]: { key: 'errors.category_not_found', status: 404 },
  [ErrorCodeEnum.CategoryCannotDeleted]: {
    key: 'errors.category_cannot_deleted',
    status: 400,
  },
  [ErrorCodeEnum.CategoryAlreadyExists]: { key: 'errors.category_already_exists', status: 400 },
  [ErrorCodeEnum.UserNotFound]: { key: 'errors.user_not_found', status: 404 },
  [ErrorCodeEnum.UserExist]: { key: 'errors.user_exist', status: 400 },
  [ErrorCodeEnum.LabNotFound]: { key: 'errors.lab_not_found', status: 404 },
  [ErrorCodeEnum.BiomarkerNotFound]: { key: 'errors.biomarker_not_found', status: 404 },
  [ErrorCodeEnum.IcdNotFound]: { key: 'errors.icd_not_found', status: 404 },
  [ErrorCodeEnum.CptNotFound]: { key: 'errors.cpt_not_found', status: 404 },
  [ErrorCodeEnum.LoincNotFound]: { key: 'errors.loinc_not_found', status: 404 },
  [ErrorCodeEnum.TestNotFound]: { key: 'errors.test_not_found', status: 404 },
  [ErrorCodeEnum.TestVersionNotFound]: { key: 'errors.test_version_not_found', status: 404 },
  [ErrorCodeEnum.TestConfigurationNotFound]: {
    key: 'errors.test_configuration_not_found',
    status: 404,
  },
  [ErrorCodeEnum.OrderFormSectionNotFound]: {
    key: 'errors.order_form_section_not_found',
    status: 404,
  },
  [ErrorCodeEnum.OrderFormTemplateNotFound]: {
    key: 'errors.order_form_template_not_found',
    status: 404,
  },
  [ErrorCodeEnum.LabOrderNotFound]: { key: 'errors.lab_order_not_found', status: 404 },
  [ErrorCodeEnum.PatientNotFound]: { key: 'errors.patient_not_found', status: 404 },
  [ErrorCodeEnum.ProviderNotFound]: { key: 'errors.provider_not_found', status: 404 },
  [ErrorCodeEnum.OrganizationNotFound]: { key: 'errors.organization_not_found', status: 404 },
  [ErrorCodeEnum.OrganizationEndpointNotFound]: {
    key: 'errors.organization_endpoint_not_found',
    status: 404,
  },
})
