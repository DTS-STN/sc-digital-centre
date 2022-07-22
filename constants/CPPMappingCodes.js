import { ProgramCodes } from './ProgramCodes'
import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const CPPPrograms = {
  2: ProgramCodes.CPP,
  32295: ProgramCodes.CPPD,
}

export const CPPTypes = {
  1: TypeCodes.CPPRetirement,
  16: TypeCodes.CPPSurvivor,
  Death: TypeCodes.CPPDeath,
  Child: TypeCodes.CPPChild,
}

//this will need proper logic
export const CPPStatus = {
  COMPLETE: StatusCodes.inPayment,
  Paid: StatusCodes.paid,
  Inactive: StatusCodes.inactive,
  Received: StatusCodes.applicationReceived,
  Decision: StatusCodes.decisionSent,
  Hold: StatusCodes.paymentHold,
}
