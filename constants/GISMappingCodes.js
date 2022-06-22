import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const GISTypes = {
  GISBeneficial: TypeCodes.GISRetirement,
}

export const GISStatus = {
  Active: StatusCodes.inPayment,
  Inactive: StatusCodes.inactive,
  Received: StatusCodes.applicationReceived,
  Decision: StatusCodes.decisionSent,
  Hold: StatusCodes.paymentHold,
}
