import React from 'react'
import PropTypes from 'prop-types'
import { MaterialPageTemplate } from '../../templates/material-page'
import CMS from 'netlify-cms-app'

CMS.registerPreviewStyle('../../css/index.css')

const MaterialPagePreview = ({ entry, widgetFor }) => {
  const {
    pageTitle,
    title,
    links,
    customSections,
    initialValuation,
    properties,
    whereBuy,
    featuredimage,
    advantagesDisadvantajes,
    prints,
    finalValuation,
    callToAction,
    productsImages,
    comparation,
    faqs,
  } = entry.getIn(['data']).toJSON()
  const tags = entry.getIn(['data', 'tags'])

  return (
    <MaterialPageTemplate
      description={'description to change'}
      tags={tags && tags.toJS()}
      title={title}
      pageTitle={pageTitle}
      productsImages={productsImages}
      initialValuation={initialValuation}
      links={links}
      customSections={customSections}
      properties={properties}
      whereBuy={whereBuy}
      featuredimage={featuredimage}
      advantagesDisadvantajes={advantagesDisadvantajes}
      prints={prints}
      finalValuation={finalValuation}
      callToAction={callToAction}
      comparation={comparation}
      faqs={faqs}
    />
  )
}

MaterialPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MaterialPagePreview
