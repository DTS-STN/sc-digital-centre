import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const OASTypes = {
  OASBeneficial: TypeCodes.OASBeneficial,
}

export const OASStatus = {
  Active: StatusCodes.inPayment,
  Inactive: StatusCodes.inactive,
  Received: StatusCodes.applicationReceived,
  Decision: StatusCodes.decisionSent,
  Hold: StatusCodes.paymentHold,
}
