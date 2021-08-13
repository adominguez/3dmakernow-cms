import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Submenu from '../components/Submenu'
import ProductDetailValoration from '../components/ProductDetailValoration';
import CustomSection from '../components/CustomSection'


export const PrinterPageTemplate = (props) => {
  const {
    content,
    contentComponent,
    pageTitle,
    productsImages,
    title,
    initialValuation,
    amazonLink,
    aliexpressLink,
    customLinks,
    customSections
  } = props;
  const PostContent = contentComponent || Content
  
  return (
    <>
      <Submenu title={title} />
      <ProductDetailValoration pageTitle={pageTitle} initialValuation={initialValuation} productsImages={productsImages} amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
      {
        customSections && customSections.length ?
          customSections.map(({sectionContent, title, showBorder}) => (
            <CustomSection title={title} sectionContent={sectionContent} showBorder={showBorder} />
          ))
        : null
      }
      <section className="flex justify-center w-full">
        <PostContent className="w-full" content={content} />
      </section>
    </>
  )
}

PrinterPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  pageTitle: PropTypes.string,
  productsImages: PropTypes.array,
}

const PrinterPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, metaTitle, metaDescription, pageTitle, productsImages, featuredimage } = post.frontmatter;
  debugger
  return (
    <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
      <PrinterPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={"Descripción a cambiar"}
        tags={post.frontmatter.tags}
        pageTitle={pageTitle}
        productsImages={productsImages}
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
        title
        templateKey
        date(formatString: "MMMM DD, YYYY")
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          absolutePath
        }
        metaDescription
        description
        pageTitle
        productsImages {
          alt
          src {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        metaTitle
      }
    }
  }
`
