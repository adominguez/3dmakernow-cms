import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Submenu from '../components/Submenu'
import ProductDetailValoration from '../components/ProductDetailValoration';
import CustomSection from '../components/CustomSection'
import ProductDetailImage from '../components/ProductDetailImage'
import FeatureTabs from '../components/FeatureTabs'
import {convertedKeyProperties, imageCarouselSettings} from '../utils/utils'
import AdvantagesDisadvantajes from '../components/AdvantagesDisadvantajes'
import { CarouselImage } from '../components/CarouselImages'
import { UpgradesToPrint } from '../components/UpgradesToPrint'


export const PrinterPageTemplate = (props) => {
  const {
    pageTitle,
    productsImages,
    title,
    initialValuation,
    amazonLink,
    aliexpressLink,
    customLinks,
    customSections,
    properties,
    whereBuy,
    featuredimage,
    advantagesDisadvantajes,
    prints,
    upgradesToPrint,
    finalValuation,
    callToAction
  } = props;
  
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
        convertedKeyProperties(upgradesToPrint) && convertedKeyProperties(upgradesToPrint).length ?
          <CustomSection title={upgradesToPrint.title || 'Mejoras para imprimir'} sectionContent={upgradesToPrint.sectionContent} backgroundColor="Claro" showBorder>
            {
              upgradesToPrint?.upgrades && upgradesToPrint.upgrades.length ?
                <UpgradesToPrint upgrades={upgradesToPrint.upgrades} className="my-3" />
              : null
            }
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
            <ProductDetailImage featuredimage={featuredimage} content={callToAction.actionText} amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
          </CustomSection>
        : null
      }
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
  const { title, metaTitle, metaDescription, pageTitle, productsImages, featuredimage, initialValuation, amazonLink, aliexpressLink, customSections, customLinks, properties, whereBuy, advantagesDisadvantajes, prints, upgradesToPrint, finalValuation, callToAction } = post.frontmatter;
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
        whereBuy={whereBuy}
        featuredimage={featuredimage}
        advantagesDisadvantajes={advantagesDisadvantajes}
        prints={prints}
        upgradesToPrint={upgradesToPrint}
        finalValuation={finalValuation}
        callToAction={callToAction}
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
      }
    }
  }
`
