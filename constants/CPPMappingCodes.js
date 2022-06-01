import { ProgramCodes } from './ProgramCodes'
import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const CPPPrograms = [
  {
    value: 32294,
    program: ProgramCodes.CPP,
  },
  {
    value: 32295,
    program: ProgramCodes.CPPD,
  },
]

export const CPPTypes = [
  {
    value: 'Beneficial',
    type: TypeCodes.CPPRetirement,
  },
]

export const CPPStatus = [
  {
    value: 'Active',
    status: StatusCodes.inPayment,
  },
  {
    value: 'Inactive',
    status: StatusCodes.inactive,
  },
  {
    value: 'Recived',
    status: StatusCodes.applicationReceived,
  },
  {
    value: 'Decision',
    status: StatusCodes.decisionSent,
  },
  {
    value: 'Hold',
    status: StatusCodes.paymentHold,
  },
]
