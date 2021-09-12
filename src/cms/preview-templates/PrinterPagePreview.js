import React from 'react'
import PropTypes from 'prop-types'
import { PrinterPageTemplate } from '../../templates/printer-page'
import CMS from 'netlify-cms-app'

CMS.registerPreviewStyle('../../css/index.css');

const PrinterPagePreview = ({ entry, widgetFor }) => {
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
    upgradesToPrint,
    finalValuation,
    callToAction,
    productsImages,
    submenu,
    comparation,
    productsList,
    faqs
  } = entry.getIn(['data']).toJSON();
  const tags = entry.getIn(['data', 'tags']);

  return (
    <PrinterPageTemplate
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
      upgradesToPrint={upgradesToPrint}
      finalValuation={finalValuation}
      callToAction={callToAction}
      submenu={submenu}
      comparation={comparation}
      faqs={faqs}
      productsList={productsList}
    />
  )
}

PrinterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PrinterPagePreview
