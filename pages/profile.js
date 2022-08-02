import { Heading, Link } from '@dts-stn/service-canada-design-system'
import ProfileInfo from '../components/molecules/ProfileInfo'
import ViewMoreLessButton from '../components/atoms/ViewMoreLessButton'
import ActionButton from '../components/atoms/ActionButton'
import HorizontalRule from '../components/atoms/HorizontalRule'
import en from '../locales/en'
import fr from '../locales/fr'
import { useState } from 'react'
import { AuthIsDisabled, AuthIsValid, Redirect } from '../lib/auth'

export default function Profile(props) {
  const t = props.locale === 'en' ? en : fr
  const fakeFieldsEI = [
    {
      title: 'Address',
      fields: ['123 Main street', 'Montreal (Quebec)', 'A1A 1A1'],
      editLink: '#',
    },
    {
      title: 'Province of residence',
      fields: ['Ontario'],
      editLink: '#',
    },
    {
      title: 'Deposit Details',
      fields: ['Scotiabank', 'XXXXXXX-123'],
      editLink: '#',
    },
    {
      title: 'Phone',
      fields: ['XXX - XXX - 1234'],
      editLink: '#',
    },
  ]
  const fakeFieldsEI2 = [
    {
      title: 'Language of correspondence',
      fields: ['English'],
      editLink: '#',
    },
    {
      title: 'Alert me',
      fields: [
        'Receive email notifications when new information about your claim is available',
        'Registered',
      ],
      editLink: '#',
    },
  ]

  const fakeFieldsCPP = [
    {
      title: 'Address',
      fields: ['123 Main street', 'Montreal, Quebec', '1A1-1A1'],
      editLink: '#',
    },
    {
      title: 'Deposit Details',
      fields: ['Scotiabank', 'XXXXXXX-123'],
      editLink: '#',
    },
    {
      title: 'Phone',
      fields: ['XXX - XXX - 1234'],
      editLink: '#',
    },
    {
      title: 'Preferences',
      fields: ['Give consent to communicate on my behalf'],
      editLink: '#',
    },
  ]
  const fakeFieldsOAS = [
    {
      title: 'Address',
      fields: ['123 Main street', 'Montreal, Quebec', '1A1-1A1'],
      editLink: '#',
    },
    {
      title: 'Deposit Details',
      fields: ['Scotiabank', 'XXXXXXX-123'],
      editLink: '#',
    },
    {
      title: 'Phone',
      fields: ['XXX - XXX - 1234'],
      editLink: '#',
    },
    {
      title: 'Preferences',
      fields: ['Give consent to communicate on my behalf'],
      editLink: '#',
    },
  ]

  const [viewCPPFields, setViewCPPFields] = useState(false)
  const [viewEIFields, setViewEIFields] = useState(false)
  const [viewOASFields, setViewOASFields] = useState(false)

  const benefitInformations = [
    {
      show: viewCPPFields,
      setShow: setViewCPPFields,
      fields: fakeFieldsCPP,
      benefit: t.cpp,
    },
    {
      show: viewEIFields,
      setShow: setViewEIFields,
      fields: [...fakeFieldsEI, ...fakeFieldsEI2],
      benefit: t.ei,
    },
    {
      show: viewOASFields,
      setShow: setViewOASFields,
      fields: fakeFieldsOAS,
      benefit: t.oas,
    },
  ]
  return (
    <div className="pb-20">
      <Heading id="profile-page-heading" title={t.profileSettings} />
      <span className="text-lg pb-5 block">{t.updateProfile}</span>

      {benefitInformations.map((benefitInfo, index) => {
        return (
          <div key={index}>
            <h2 className="text-3xl pt-12 font-bold">{benefitInfo.benefit}</h2>
            <div className="pb-16 pt-2">
              {benefitInfo.show ? (
                <ProfileInfo
                  fields={benefitInfo.fields}
                  locale={props.locale}
                  editText={t.edit}
                />
              ) : null}
              <ViewMoreLessButton
                expanded={benefitInfo.show}
                icon={benefitInfo.show}
                onClick={() => benefitInfo.setShow(!benefitInfo.show)}
                caption={!benefitInfo.show ? t.viewSettings : t.viewLess}
                id={'view-more-less-' + index}
                className="pt-6"
                iconStyle="pl-0 pr-3"
              />
            </div>
            <HorizontalRule />
          </div>
        )
      })}

      <div className="mt-10">
        <h2 className="text-3xl font-bold">{t.lookingForSecuritySettings}</h2>
        <ul className="list-disc list-inside mb-10 ml-5 text-gray-darker">
          <li>
            <Link
              id="security-link"
              text={t.manageSecuritySettings}
              href={'/security-settings'}
            />
          </li>
        </ul>
      </div>

      <ActionButton
        id="back-to-dashboard-link"
        href="/dashboard"
        text={t.backToDashboard}
        secondary
      />
    </div>
  )
}

export async function getServerSideProps({ locale, req }) {
  if (!AuthIsDisabled() && !(await AuthIsValid(req))) return Redirect()

  const t = locale === 'en' ? en : fr

  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }

  const breadCrumbItems = [
    {
      link: t.url_myBenefitsAndServices,
      text: t.myBenefitsAndServices,
    },
  ]

  return {
    props: {
      locale,
      metadata,
      isAuth: true,
      breadCrumbItems,
    },
  }
}
