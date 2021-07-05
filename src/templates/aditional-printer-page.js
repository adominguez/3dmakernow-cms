import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AditionalPrinterPageTemplate = (props) => {
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

AditionalPrinterPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  helmet: PropTypes.object,
}

const PrinterPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { title, metaTitle, metaDescription } = post.frontmatter;
  return (
    <Layout>
      <AditionalPrinterPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={"Descripción a cambiar"}
        helmet={
          <Helmet titleTemplate={metaTitle}>
            <title>{metaTitle}</title>
            <meta
              name="description"
              content={metaDescription}
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
  query AditionalPrinterByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title,
        metaDescription,
        metaTitle
      }
    }
  }
`
