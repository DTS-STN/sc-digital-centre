import BenefitCard from '../components/molecules/BenefitCard'
import NoBenefitCard from '../components/molecules/NoBenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import { LayoutContainer } from '@dts-stn/decd-design-system'
import Greeting from '../components/molecules/Greeting'
import {
  SUBMITTED_CPP,
  ACTIVE_CPP,
  SUBMITTED_CPPD,
  ACTIVE_CPPD,
  INACTIVE_CPPD,
  SUBMITTED_OAS,
  ACTIVE_OAS,
  SUBMITTED_EI,
  ACTIVE_EI,
  INACTIVE_EI,
  ACTIVE_SEB,
} from '../contents/DashboardBenefitCardConstants'
import {
  NO_BENEFIT_CPP,
  NO_BENEFIT_GIS,
  NO_BENEFIT_OAS,
  NO_BENEFIT_EI,
} from '../contents/DashboardNoBenefitCardConstants'
import {
  SUBMITTED_CPP_ESTIMATE_TASKS,
  SUBMITTED_CPP_CHANGE_TASKS,
  ACTIVE_CPP_PAYMENT_TASKS,
  ACTIVE_CPP_CHANGE_TASKS,
  INACTIVE_CPP_TASKS,
  SUBMITTED_CPPD_TASKS,
  ACTIVE_CPPD_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_TASKS,
  SUBMITTED_EI_TASKS,
  ACTIVE_EI_COMMON_TASKS,
  ACTIVE_EI_PAYMENT_TASKS,
  ACTIVE_EI_DOCS_TASKS,
  INACTIVE_EI_TASKS,
  NO_BENEFIT_CPP_TASKS,
  NO_BENEFIT_GIS_TASKS,
  NO_BENEFIT_OAS_TASKS,
  NO_BENEFIT_EI_TASKS,
  ACTIVE_SEB_TASKS,
} from '../contents/DashboardBenefitTasksConstants'
import {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_EI,
  APPLICATION_CARD_CPP,
  APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25,
  APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS,
  APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR,
  APPLICATION_CARD_CPP_PENSION_SHARING,
  APPLICATION_CARD_CPP_CREADIT_SPLIT,
  APPLICATION_CARD_CPP_CHILD_REARING_PROVISION,
  APPLICATION_CARD_CPP_DEATH_BENEFIT,
} from '../contents/DashboardBenefitApplicationCards'
import DSHeader from '../components/molecules/DSHeader'
import DSFooter from '../components/molecules/DSFooter'
import UniversalBenefit from '../objects/UniversalBenefit'
import BenefitSummaries, { SummaryTypes } from '../objects/BenefitSummaries'

export default function Dashboard(props) {
  return (
    <>
      <DSHeader locale="en" />
      <LayoutContainer>
        <div className="col-span-12 mb-8">
          <Greeting locale="en" name="Mary" />
          <BenefitCard
            locale="en"
            benefit={SUBMITTED_CPP}
            tasks={[SUBMITTED_CPP_ESTIMATE_TASKS, SUBMITTED_CPP_CHANGE_TASKS]}
            taskGroups={true}
          />
          <BenefitCard
            locale="en"
            benefit={ACTIVE_CPP}
            tasks={[ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS]}
            taskGroups={true}
            activeCppApi={props.activeCppProps}
          />
          <BenefitCard
            locale="en"
            benefit={SUBMITTED_OAS}
            tasks={SUBMITTED_OAS_TASKS}
          />
          <BenefitCard
            locale="en"
            benefit={ACTIVE_OAS}
            tasks={ACTIVE_OAS_TASKS}
          />
          <BenefitCard
            locale="en"
            benefit={SUBMITTED_EI}
            tasks={SUBMITTED_EI_TASKS}
          />
          <BenefitCard
            locale="en"
            benefit={ACTIVE_EI}
            tasks={[
              ACTIVE_EI_COMMON_TASKS,
              ACTIVE_EI_PAYMENT_TASKS,
              ACTIVE_EI_DOCS_TASKS,
            ]}
            taskGroups={true}
            activeEiApi={props.activeEiProps}
          />
          <BenefitCard
            locale="en"
            benefit={INACTIVE_EI}
            tasks={INACTIVE_EI_TASKS}
          />
          <BenefitCard
            locale="en"
            benefit={SUBMITTED_CPPD}
            tasks={SUBMITTED_CPPD_TASKS}
          />
          <BenefitCard
            locale="en"
            benefit={ACTIVE_CPPD}
            tasks={ACTIVE_CPPD_TASKS}
          />
          <BenefitCard
            locale="en"
            benefit={INACTIVE_CPPD}
            tasks={INACTIVE_CPP_TASKS}
          />
          <BenefitCard
            locale="en"
            benefit={ACTIVE_SEB}
            tasks={[ACTIVE_SEB_TASKS]}
            taskGroups={true}
          />

          {/* application or "advertising" cards */}
          {props.advertisingCards.map((value, index) => {
            return (
              <div key={index}>
                <BenefitApplicationCard
                  locale="en"
                  benefitApplication={value}
                />
              </div>
            )
          })}

          <NoBenefitCard
            locale="en"
            benefit={NO_BENEFIT_CPP}
            tasks={NO_BENEFIT_CPP_TASKS}
          />
          <NoBenefitCard
            locale="en"
            benefit={NO_BENEFIT_EI}
            tasks={NO_BENEFIT_EI_TASKS}
          />
          <NoBenefitCard
            locale="en"
            benefit={NO_BENEFIT_GIS}
            tasks={NO_BENEFIT_GIS_TASKS}
          />
          <NoBenefitCard
            locale="en"
            benefit={NO_BENEFIT_OAS}
            tasks={NO_BENEFIT_OAS_TASKS}
          />
        </div>
      </LayoutContainer>
      <DSFooter />
    </>
  )
}

export async function getStaticProps() {
  const currentBenefits = [] // to be retrieved by API

  // tests - uncomment to hide a card with conditions
  // currentBenefits.push({ program: 'cpp', type: 'retirement', status: 'active' })
  // currentBenefits.push({ program: 'cpp', type: 'retirement', status: 'pending' })
  // currentBenefits.push({ program: 'cpp', type: 'disability', status: 'active' })
  // currentBenefits.push({ program: 'cpp', type: 'disability', status: 'pending' })
  // currentBenefits.push({ program: 'oas', status: 'active' })
  // currentBenefits.push({ program: 'oas', status: 'pending' })
  // currentBenefits.push({ program: 'gis', status: 'active' })
  // currentBenefits.push({ program: 'gis', status: 'pending' })

  const activeCpp = await getActiveCpp()
  const activeEi = await getActiveEi()
  currentBenefits.push(ConvertCPPBenefitToUniversal(activeCpp))
  currentBenefits.push(ConvertEIBenefitToUniversal(activeEi))

  return {
    props: {
      advertisingCards: BuildAdvertisingCards(currentBenefits),
      activeCppProps: activeCpp,
      activeEiProps: activeEi,
    },
  }
}

function ConvertCPPBenefitToUniversal(cppBenefit) {
  let nextPayment = cppBenefit.lastPaymentDate
  if (cppBenefit.PaymentProcessType == 'Monthly') {
    nextPayment = new Date(nextPayment.setMonth(nextPayment.getMonth() + 1))
  }
  let benefit = new UniversalBenefit(
    cppBenefit.benefitCode,
    cppBenefit.programCode,
    cppBenefit.benefitType,
    [
      new BenefitSummaries(SummaryTypes.PaymentAmount, cppBenefit.netAmount),
      new BenefitSummaries(SummaryTypes.NextPayment, nextPayment),
      new BenefitSummaries(SummaryTypes.LatestStatus, null, null),
    ]
  )
  return benefit
}

function ConvertEIBenefitToUniversal(eiBenefit) {
  let benefit = new UniversalBenefit(
    eiBenefit.programCode,
    eiBenefit.claimStatusCode,
    eiBenefit.enmBenefitType,
    [
      new BenefitSummaries(SummaryTypes.PaymentAmount, eiBenefit.netAmount),
      new BenefitSummaries(SummaryTypes.NextReport, eiBenefit.nextRptDueDate),
      new BenefitSummaries(
        SummaryTypes.LatestStatus,
        eiBenefit.publishDate,
        eiBenefit.messageData
      ),
    ]
  )
  return benefit
}

async function getActiveCpp() {
  try {
    const res = await fetch(process.env.CPP_ACTIVE_BENEFIT_URL, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
      }),
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

async function getActiveEi() {
  try {
    const res = await fetch(process.env.EI_ACTIVE_BENEFIT_URL, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
      }),
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

function BuildAdvertisingCards(currentBenefits) {
  // the order of these matters
  // words to be replaced with codes
  const advertisingCards = []
  advertisingCards.push(APPLICATION_CARD_EI)
  if (
    CheckAllBenefitsForAdvertising(
      currentBenefits,
      ['pending', 'active'],
      'cpp',
      'retirement'
    )
  ) {
    advertisingCards.push(APPLICATION_CARD_CPP)
  }
  if (
    CheckAllBenefitsForAdvertising(
      currentBenefits,
      ['pending', 'active'],
      'oas'
    )
  ) {
    advertisingCards.push(APPLICATION_CARD_OAS)
  }
  if (
    CheckAllBenefitsForAdvertising(
      currentBenefits,
      ['pending', 'active'],
      'gis'
    )
  ) {
    advertisingCards.push(APPLICATION_CARD_GIS)
  }
  if (
    CheckAllBenefitsForAdvertising(
      currentBenefits,
      ['pending', 'active'],
      'cpp',
      'disability'
    )
  ) {
    advertisingCards.push(APPLICATION_CARD_CPPD)
  }
  advertisingCards.push(APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25)
  advertisingCards.push(
    APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS
  )
  advertisingCards.push(
    APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR
  )
  advertisingCards.push(APPLICATION_CARD_CPP_PENSION_SHARING)
  advertisingCards.push(APPLICATION_CARD_CPP_CREADIT_SPLIT)
  advertisingCards.push(APPLICATION_CARD_CPP_CHILD_REARING_PROVISION)
  advertisingCards.push(APPLICATION_CARD_CPP_DEATH_BENEFIT)

  return advertisingCards
}

/// return: the benefit can be advertised
/// benefit: the benefit to be checked
/// program: the program to match to
/// type: the type to match to
/// status: status' that the advertising card can't be shown with
function CheckAllBenefitsForAdvertising(benefits, status, program, type) {
  var matchingBenefit
  if (typeof type === 'undefined')
    //overloaded function handling
    matchingBenefit = benefits.find((b) => b.program == program)
  else
    matchingBenefit = benefits.find(
      (b) => b.program == program && b.type == type
    )

  if (matchingBenefit == null) return true
  //check if there is a status to evaluate
  //if (typeof status === 'undefined' || status.length == 0) return false
  //evaluate for a matching status
  return !status.find((s) => s == matchingBenefit.status)
}
