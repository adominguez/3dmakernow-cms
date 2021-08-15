import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Submenu from '../components/Submenu'
import ProductDetailValoration from '../components/ProductDetailValoration';
import CustomSection from '../components/CustomSection'
import FeatureTabs from '../components/FeatureTabs'
import {convertedKeyProperties} from '../utils/utils'


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
    customSections,
    properties
  } = props;
  const PostContent = contentComponent || Content
  
  return (
    <>
      <Submenu title={title} />
      <ProductDetailValoration pageTitle={pageTitle} initialValuation={initialValuation} productsImages={productsImages} amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
      {
        customSections && customSections.length ?
          customSections.map(({sectionContent, title, showBorder, backgroundColor}, key) => (
            <CustomSection key={key} title={title} sectionContent={sectionContent} showBorder={showBorder} backgroundColor={backgroundColor} />
          ))
        : null
      }
      {
        convertedKeyProperties(properties) && convertedKeyProperties(properties).length ?
          <FeatureTabs properties={properties} />
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
  const { title, metaTitle, metaDescription, pageTitle, productsImages, featuredimage, initialValuation, amazonLink, aliexpressLink, customSections, customLinks, properties } = post.frontmatter;
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
        initialValuation={initialValuation}
        amazonLink={amazonLink}
        aliexpressLink={aliexpressLink}
        customLinks={customLinks}
        customSections={customSections}
        properties={properties}
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
        customLinks {
          link
          store
        }
        customSections {
          sectionContent
          showBorder
          title
        }
        properties {
          content {
            content
          }
          electricity {
            input
            voltage
          }
          feature {
            BedTemperature
            axisPrecision
            bedLevel
            extrusor
            extrusorNumber
            extrusorTemperature
            filamentDiameter
            layerResolution
            materials
            nozzleDiameterList
            printerVolume
            printerSpeed
            technology
          }
          sectionContent
          software {
            conectivity
            display
            firmware
            inputFormat
            slicer
          }
          title
          unboxing {
            printerSize
            printerWeight
            unboxingSize
            unboxingWeight
          }
        }
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
        amazonLink
        aliexpressLink
        initialValuation
      }
    }
  }
`
