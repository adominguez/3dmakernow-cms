import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ProductDetailValoration from '../components/ProductDetailValoration';
import CustomSection from '../components/CustomSection'
import ProductDetailImage from '../components/ProductDetailImage'
import FeatureTabs from '../components/FeatureTabs'
import {convertedKeyProperties, imageCarouselSettings} from '../utils/utils'
import AdvantagesDisadvantajes from '../components/AdvantagesDisadvantajes'
import { CarouselImage } from '../components/CarouselImages'
import { splitStaticUrl } from '../utils/utils'
import CompareProducts from '../components/compareProducts'
import Faqs from '../components/faqs'


export const MaterialPageTemplate = (props) => {
  const {
    pageTitle,
    productsImages,
    title,
    initialValuation,
    links: {
      amazonLink,
      aliexpressLink,
      customLinks,
    } = {},
    customSections,
    properties,
    whereBuy,
    featuredimage,
    advantagesDisadvantajes,
    prints,
    finalValuation,
    callToAction,
    comparation,
    faqs,
    faqs: {
      showFaqs,
      asks
    } = {}
  } = props;
  
  return (
    <>
      {
        pageTitle || initialValuation ?
          <ProductDetailValoration pageTitle={pageTitle} initialValuation={initialValuation} productsImages={productsImages} amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
        : null
      }
      {
        customSections && customSections.length ?
          customSections.map(({sectionContent, title, showBorder, backgroundColor}, key) => (
            <CustomSection key={key} title={title} sectionContent={sectionContent} showBorder={showBorder} backgroundColor={backgroundColor} />
          ))
        : null
      }
      {
        comparation?.showComparation ?
          <CustomSection title={comparation.title || 'Comparativa de impresoras'} sectionContent={comparation.sectionContent} backgroundColor="Claro" showBorder={true}>
            <CompareProducts compareProducts={comparation?.compareProducts} />
          </CustomSection>
        : null
      }
      {
        convertedKeyProperties(properties) && convertedKeyProperties(properties).length ?
          <FeatureTabs properties={properties} />
        : null
      }
      {
        convertedKeyProperties(whereBuy) && convertedKeyProperties(whereBuy).length ?
          <CustomSection title={whereBuy.title || '¿Dónde comprar?'} sectionContent={whereBuy.sectionContent} backgroundColor="Claro">
            <ProductDetailImage featuredimage={featuredimage} title={title} content={whereBuy.whereBuyText} amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
          </CustomSection>
        : null
      }
      {
        convertedKeyProperties(advantagesDisadvantajes) && convertedKeyProperties(advantagesDisadvantajes).length ?
          <CustomSection title={advantagesDisadvantajes.title || 'Ventajas y desventajas'} sectionContent={advantagesDisadvantajes.sectionContent} backgroundColor="Oscuro">
            <AdvantagesDisadvantajes advantagesDisadvantajes={advantagesDisadvantajes} />
          </CustomSection>
        : null
      }
      {
        convertedKeyProperties(prints) && convertedKeyProperties(prints).length ?
          <CustomSection title={prints.title || 'Impresiones realizadas'} sectionContent={prints.sectionContent} backgroundColor="Claro" showBorder>
              {
                prints?.printImage && prints.printImage.length ?
                <CarouselImage className="my-3" images={prints.printImage} settings={imageCarouselSettings} />
                : null
              }
            </CustomSection>
          : null
      }
      {
        showFaqs ?
          <CustomSection title={faqs.title || 'Preguntas frecuentes'} sectionContent={faqs.sectionContent} backgroundColor="Claro" showBorder>
            <Faqs asks={asks} />
          </CustomSection>
        : null
      }
      {
        convertedKeyProperties(finalValuation) && convertedKeyProperties(finalValuation).length ?
          <CustomSection title={finalValuation.title || 'Conclusión final'} sectionContent={finalValuation.sectionContent} backgroundColor="Medio" showBorder />
        : null
      }
      {
        convertedKeyProperties(callToAction) && convertedKeyProperties(callToAction).length ?
          <CustomSection title={callToAction.title} backgroundColor="Claro">
            <ProductDetailImage featuredimage={featuredimage} title={title} content={callToAction.actionText} amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
          </CustomSection>
        : null
      }
    </>
  )
}

MaterialPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  pageTitle: PropTypes.string,
  productsImages: PropTypes.array,
}

const MaterialPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, metaTitle, metaDescription, pageTitle, productsImages, featuredimage, initialValuation, links, customSections, properties, whereBuy, advantagesDisadvantajes, prints, finalValuation, callToAction, comparation } = post.frontmatter;
  return (
    <Layout metaTitle={metaTitle} metaDescription={metaDescription} featuredimage={splitStaticUrl(featuredimage.absolutePath).slice(1)}>
      <MaterialPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={"Descripción a cambiar"}
        tags={post.frontmatter.tags}
        pageTitle={pageTitle}
        productsImages={productsImages}
        title={title}
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
      />
    </Layout>
  )
}

MaterialPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default MaterialPage

export const pageQuery = graphql`
  query MaterialByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        templateKey
        date(formatString: "MMMM DD, YYYY")
        featuredpost
        links {
          amazonLink
          aliexpressLink
          customLinks {
            link
            store
          }
        }
        customSections {
          sectionContent
          showBorder
          title
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
        initialValuation
        whereBuy {
          sectionContent
          title
          whereBuyText
        }
        advantagesDisadvantajes {
          advantages {
            text
          }
          disadvantages {
            text
          }
          sectionContent
          title
        }
        prints {
          sectionContent
          title
          printImage {
            alt
            src {
              absolutePath
            }
          }
        }
        finalValuation {
          sectionContent
          title
        }
        comparation {
          compareProducts {
            products {
              id
              image
              link
              name
              propertiesValues
            }
            properties
          }
          sectionContent
          showComparation
          title
        }
        callToAction {
          actionText
        }
      }
    }
  }
`