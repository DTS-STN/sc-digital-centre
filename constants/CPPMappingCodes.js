import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const CPPTypes = [
  {
    value: 'Beneficial',
    type: TypeCodes.CPPRetirement,
  },
  {
    value: 'Survivor',
    type: TypeCodes.CPPSurvivor,
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
