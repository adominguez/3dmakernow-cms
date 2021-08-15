import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'
import CMS from 'netlify-cms-app'

CMS.registerPreviewStyle('../../css/index.css');

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const { name, title, description } = entry.getIn(['data', 'seopage']) || {}
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      name={name}
      description={description}
      tags={tags && tags.toJS()}
      title={title}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
