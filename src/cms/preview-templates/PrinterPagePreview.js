import React from 'react'
import PropTypes from 'prop-types'
import { PrinterPageTemplate } from '../../templates/printer-page'
import CMS from 'netlify-cms-app'

CMS.registerPreviewStyle('../../css/index.css');

const PrinterPagePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  debugger
  return (
    <PrinterPageTemplate
      content={widgetFor('body')}
      description={'description to change'}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
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
