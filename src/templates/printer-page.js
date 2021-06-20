import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PrinterPageTemplate = (props) => {
  const {
    content,
    contentComponent,
    helmet,
  } = props;
  const PostContent = contentComponent || Content
  return (
    <section className="flex justify-center w-full">
      {helmet || ''}
      <PostContent className="w-full" content={content} />
    </section>
  )
}

PrinterPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  helmet: PropTypes.object,
}

const PrinterPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { title, seoTitle, seoDescription } = post.frontmatter;
  return (
    <Layout>
      <PrinterPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={"Descripción a cambiar"}
        helmet={
          <Helmet titleTemplate={seoTitle}>
            <title>{seoTitle}</title>
            <meta
              name="description"
              content={seoDescription}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={title}
      />
    </Layout>
  )
}

PrinterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PrinterPage

export const pageQuery = graphql`
  query PrinterByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title,
        seoDescription,
        seoTitle
      }
    }
  }
`
