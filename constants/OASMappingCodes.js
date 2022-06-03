import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const OASTypes = [
  {
    value: 'OASBeneficial',
    type: TypeCodes.OASBeneficial,
  },
]

export const OASStatus = [
  {
    value: 'Active',
    status: StatusCodes.inPayment,
  },
  {
    value: 'Inactive',
    status: StatusCodes.inactive,
  },
  {
    value: 'Received',
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
