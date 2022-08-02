import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import UniversalBenefitCard from './UniversalBenefitCard'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { StatusCodes } from '../../constants/StatusCodes'
import { TypeCodes } from '../../constants/ProgramTypeCodes'
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
      callout={{ label: 'label', text: 'text' }}
    />
  )

  it('renders', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('loads apply with no summaries', () => {
    const applyForProgramText = 'Apply for Program Text'
    render(
      <UniversalBenefitCard
        summaries={[]}
        applyForProgram={applyForProgramText}
        locale="en"
        program="ei"
        summary=""
        benefitUniqueId="test-id"
        taskGroups={[]}
        callout={{ label: '', text: '' }}
        statusBadge={{ srDescription: '', status: '', color: 'bg-gray-medium' }}
        taskHeading=""
      />
    )
    expect(screen.getByText(applyForProgramText)).toBeInTheDocument()
  })

  it('loads and maps summaries', () => {
    const summaryTitleText = 'Summary title text'
    render(
      <UniversalBenefitCard
        summaries={[{ title: summaryTitleText, value: '' }]}
        locale="en"
        program="ei"
        summary=""
        benefitUniqueId="test-id"
        taskGroups={[]}
        callout={{ label: '', text: '' }}
        statusBadge={{ srDescription: '', status: '', color: 'bg-gray-medium' }}
        taskHeading=""
      />
    )
    expect(screen.getByText(summaryTitleText)).toBeInTheDocument()
  })
})
