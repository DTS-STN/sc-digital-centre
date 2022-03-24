import React from 'react'
import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from '../atoms/HorizontalRule'

const PendingBenefitDetails = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <section>
      <div className="flex-col ml-4 my-4 sm:m-8 sm:flex sm:flex-row"></div>
      <HorizontalRule width="w-auto sm:w-full" />
    </section>
  )
}

export default PendingBenefitDetails
