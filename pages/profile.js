import ProfileInfo from '../components/molecules/ProfileInfo'
import Link from 'next/link'
import en from '../locales/en'
import fr from '../locales/fr'
import { useState } from 'react'
import ViewMoreLessButton from '../components/atoms/ViewMoreLessButton'

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
    <>
      <h1 className="py-4 text-4xl font-bold text-gray-darker border-b border-red-400">
        {t.profileSettings}
      </h1>
      <span className="text-lg">{t.updateProfile}</span>

      {benefitInformations.map((benefitInfo) => {
        return (
          <>
            <h2 className="text-3xl py-2 font-bold">{benefitInfo.benefit}</h2>
            <div className="py-2 mb-4 border-b border-gray-500">
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
                className="pl-0 md:pl-0"
              />
            </div>
          </>
        )
      })}

      <div className="mt-10">
        <h2 className="text-3xl font-bold">Looking for security settings?</h2>
        <ul className="list-disc ml-8 text-lg">
          <Link href={'/security-settings'} passHref>
            <li>
              <a className="underline text-blue-600 cursor-pointer hover:text-blue-800 visited:text-purple-600">
                Manage your security settings
              </a>
            </li>
          </Link>
        </ul>
      </div>

      <Link href="/dashboard" passHref>
        <button className="font-normal text-center font-display w-fit text-base bg-gray-lighter p-2 px-4 rounded-md text-blue-default my-10">
          {t.backToDashboard}
        </button>
      </Link>
    </>
  )
}

export async function getStaticProps({ locale }) {
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
