import { StatusCodes } from '../constants/StatusCodes'

export default function MapCallout(status, type, t) {
  let label
  let text
  switch (status) {
    case StatusCodes.inactive:
      label = t.status
      text = t.DurationReached
      break
    case StatusCodes.exhausted:
    case StatusCodes.applicationReceived:
    case StatusCodes.decisionSent:
      label = t.status
      text = t.NotActive
      break
    case StatusCodes.paymentHold:
    case StatusCodes.inPayment:
    case StatusCodes.benefitUpdate:
    case StatusCodes.paid:
      label = t.activeBenefit
      text = t[type]
      break
    case StatusCodes.activeAgreement:
      label = t.status
      text = t[type]
    default:
      break
  }
  return { label, text }
}
