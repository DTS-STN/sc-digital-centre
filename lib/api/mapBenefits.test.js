import { toHaveNoViolations } from 'jest-axe'
import { MapEICard } from './mapBenefits'
import EIMockData from '../../mockdata/userDefault/ei.json'

expect.extend(toHaveNoViolations)

describe('maps EI', () => {
  it('Application Received data corectly', () => {
    const mockedData = MapEICard(EIMockData[0])
  })

  it('In Payment data corectly', () => {
    const mockedData = MapEICard(EIMockData[1])
  })

  it('Benefit Update data corectly', () => {
    const mockedData = MapEICard(EIMockData[2])
  })

  it('Exhausted data corectly', () => {
    const mockedData = MapEICard(EIMockData[3])
  })

  it('Inactive data corectly', () => {
    const mockedData = MapEICard(EIMockData[4])
  })
})
