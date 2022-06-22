import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const OASTypes = {
  OASBeneficial: TypeCodes.OASRetirement,
}

export const OASStatus = {
  Active: StatusCodes.inPayment,
  Inactive: StatusCodes.inactive,
  Received: StatusCodes.applicationReceived,
  Decision: StatusCodes.decisionSent,
  Hold: StatusCodes.paymentHold,
}
