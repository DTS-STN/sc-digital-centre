import React from 'react'
import PropTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import propTypes from 'prop-types'

const BenefitDetailPart = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <div id={props.id}>
      <h4 className="font-medium text-large inline">{props.title}</h4>
      <a
        href={props.editLink}
        className="float-right font-medium text-sm underline text-link-blue-default hover:text-link-blue-hover"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={'/edit.svg'} alt="" className="w-6 h-6 pb-1  pr-2 inline" />
        {t.edit}
      </a>
      <p>
        <a
          href={props.editLink}
          className="font-medium text-base underline text-link-blue-default hover:text-link-blue-hover"
        >
          {props.content ?? props.children}
        </a>
      </p>
    </div>
  )
}

BenefitDetailPart.PropTypes = {
  id: propTypes.string.isRequired,
  editLink: propTypes.string.isRequired,
  content: propTypes.string,
  children: propTypes.object,
}

export default BenefitDetailPart
