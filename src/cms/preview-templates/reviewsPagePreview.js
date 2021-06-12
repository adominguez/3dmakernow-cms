import React from 'react'
import PropTypes from 'prop-types'
import { ReviewPageTemplate } from '../../templates/review-page'
import CMS from 'netlify-cms-app'

CMS.registerPreviewStyle('../../css/index.css');

const ReviewPagePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <ReviewPageTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      productsList={entry.getIn(['data', 'productsList'])}
    />
  )
}

ReviewPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ReviewPagePreview
