import React from 'react'
import PropTypes from 'prop-types'
import { PrinterPageTemplate } from '../../templates/printer-page'
import CMS from 'netlify-cms-app'

CMS.registerPreviewStyle('../../css/index.css');

const PrinterPagePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  const pageTitle = entry.getIn(['data', 'pageTitle']);
  const title = entry.getIn(['data', 'title']);
  const productsImages = entry.getIn([ 'data'] ).toJS().productsImages;
  const initialValuation = entry.getIn(['data', 'initialValuation']);
  const amazonLink = entry.getIn(['data', 'amazonLink']);
  const aliexpressLink = entry.getIn(['data', 'aliexpressLink']);
  const customLinks = entry.getIn([ 'data'] ).toJS().customLinks;
  const customSections = entry.getIn([ 'data'] ).toJS().customSections;
  return (
    <PrinterPageTemplate
      content={widgetFor('body')}
      description={'description to change'}
      tags={tags && tags.toJS()}
      title={title}
      pageTitle={pageTitle}
      productsImages={productsImages}
      initialValuation={initialValuation}
      amazonLink={amazonLink}
      aliexpressLink={aliexpressLink}
      customLinks={customLinks}
      customSections={customSections}
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
