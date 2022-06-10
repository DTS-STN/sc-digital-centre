import { toHaveNoViolations } from 'jest-axe'
import { MapEICard } from './mapBenefits'
import EIMockData from '../../mockdata/userDefault/ei.json'
import { StatusCodes } from '../../constants/StatusCodes'
import { SummaryTypes } from '../../constants/SummaryTypes'

expect.extend(toHaveNoViolations)

describe('maps EI', () => {
  it('Application Received status', () => {
    const mappedData = MapEICard(EIMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
    expect(mappedData.taskHeadingKey).toBeTruthy()
    expect(mappedData.taskGroups).toHaveLength(4)
  })

  it('In Payment status', () => {
    const mappedData = MapEICard(EIMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
    expect(mappedData.summaries).toHaveLength(3)
    expect(mappedData.taskHeadingKey).toBeTruthy()
    expect(mappedData.taskGroups).toHaveLength(4)
  })

  it('Benefit Update status', () => {
    const mappedData = MapEICard(EIMockData[2])
    expect(mappedData.statusCode).toBe(StatusCodes.benefitUpdate)
    expect(mappedData.summaries).toHaveLength(3)
    expect(mappedData.taskHeadingKey).toBeTruthy()
    expect(mappedData.taskGroups).toHaveLength(4)
  })

  it('Exhausted status', () => {
    const mappedData = MapEICard(EIMockData[3])
    expect(mappedData.statusCode).toBe(StatusCodes.exhausted)
    expect(mappedData.summaries).toHaveLength(2)
    expect(mappedData.taskHeadingKey).toBeTruthy()
    expect(mappedData.taskGroups).toHaveLength(4)
  })

  it('Inactive status', () => {
    const mappedData = MapEICard(EIMockData[4])
    expect(mappedData.statusCode).toBe(StatusCodes.inactive)
    expect(mappedData.summaries).toBeFalsy()
    expect(mappedData.taskHeadingKey).toBeTruthy()
    expect(mappedData.taskGroups).toHaveLength(1)
  })

  it('calculates estimatedDecisionDate', () => {
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
    const mappedData = MapEICard({
      enmBenefitType: 1,
      claimStatusCode: 3435,
      nextRptDueDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})
