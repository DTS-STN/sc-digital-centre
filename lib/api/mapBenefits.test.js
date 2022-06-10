import { toHaveNoViolations } from 'jest-axe'
import { MapEICard } from './mapBenefits'
import EIMockData from '../../mockdata/userDefault/ei.json'

expect.extend(toHaveNoViolations)

describe('maps EI', () => {
  it('In Payment data corectly', () => {
    const mockedData = MapEICard(EIMockData[0])
  })

  it('Benefit Update data corectly', () => {})

  it('Application Received data corectly', () => {})

  it('Exhausted data corectly', () => {})

  it('Inactive data corectly', () => {})
})
