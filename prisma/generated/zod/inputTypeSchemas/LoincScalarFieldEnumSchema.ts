import { z } from 'zod';

export const LoincScalarFieldEnumSchema = z.enum(['loincNum','component','property','timeAspct','system','scaleTyp','methodTyp','class','versionLastChanged','chngType','definitionDescription','status','consumerName','classtype','formula','exmplAnswers','surveyQuestText','surveyQuestSrc','unitsrequired','relatednames2','shortname','orderObs','hl7FieldSubfieldId','externalCopyrightNotice','exampleUnits','longCommonName','exampleUcumUnits','statusReason','statusText','changeReasonPublic','commonTestRank','commonOrderRank','hl7AttachmentStructure','externalCopyrightLink','panelType','askAtOrderEntry','associatedObservations','versionFirstReleased','validHl7AttachmentRequest','displayName','createdAt','updatedAt']);

export default LoincScalarFieldEnumSchema;
