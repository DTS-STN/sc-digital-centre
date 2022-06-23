import { ProgramCodes } from './ProgramCodes'
import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const OASGISPrograms = {
  oas: ProgramCodes.OAS,
  gis: ProgramCodes.GIS,
}
export const OASGISTypes = {
  OASBeneficial: TypeCodes.OASRetirement,
  GISBeneficial: TypeCodes.GISRetirement,
}

export const OASGISStatus = {
  Active: StatusCodes.inPayment,
  Inactive: StatusCodes.inactive,
  Received: StatusCodes.applicationReceived,
  Decision: StatusCodes.decisionSent,
  Hold: StatusCodes.paymentHold,
}
