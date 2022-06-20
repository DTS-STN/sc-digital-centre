import { render } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import UniversalBenefitCard from './UniversalBenefitCard'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { StatusCodes } from '../../constants/StatusCodes'
import { TypeCodes } from '../../constants/ProgramTypeCodes'
import { MapBenefit } from '../../lib/api/mapBenefits'
import { TASK_GROUPS } from '../../contents/BenefitTasksGroups'

expect.extend(toHaveNoViolations)

describe('UniversalBenefitCard', () => {
  const tasksGroups = TASK_GROUPS[ProgramCodes.CPP][StatusCodes.inPayment]['en']

  const { container } = render(
    <UniversalBenefitCard
      locale="en"
      program="CPP"
      summary="summary"
      benefitUniqueId={`${ProgramCodes.CPP}-${TypeCodes.CPPRetirement}-${StatusCodes.inPayment}`}
      statusBadge={{
        status: 'In Payment',
        color: 'bg-green-medium',
        srDescription: 'status',
      }}
      taskHeading={tasksGroups.taskHeadingKey}
      taskGroups={tasksGroups.tasksGroups}
    />
  )

  it('renders', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
