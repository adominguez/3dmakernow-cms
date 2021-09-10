import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { sliderSettings } from '../utils/utils'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../components/slick.css"

class PrinterRoll extends React.Component {
  render() {
    const { data, maxProducts, type = 'slider', settings = sliderSettings } = this.props
    const { edges: reviews } = data.allMarkdownRemark

    return (
      <>
        {type === 'slider' ? (
          <Slider {...settings} >
            {reviews &&
              reviews.slice(0, maxProducts || reviews.length).map(({ node: post }) => (

                <article className="w-full p-2" key={post.id}>
                  <Link className={`flex-col overflow-hidden border-2 border-gray-300 rounded-md flex group hover:border-primary-300 focus:ring-2 focus:ring-primary-500 outline-none centered-flex bg-white`} to={post.fields.slug}>
                    <div className="relative items-center flex-grow overflow-hidden flex-2 centered-flex">
                      {post.frontmatter.featuredimage ?
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `${post.frontmatter.title}`,
                          }}
                        /> : ''}
                      <div className="w-full p-1 text-center">
                        <h3 className={`leading-tight text-lg truncate-2-lines text-primary-500`} title={post.frontmatter.pageTitle}>{post.frontmatter.pageTitle}</h3>
                        <p className="mt-2 overflow-auto text-sm font-light leading-tight max-h-20 text-blueGray-600">{post.frontmatter.metaDescription}</p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
          </Slider>
        ) : ''}
        {type === 'list' ?
          <ul className="flex flex-wrap px-4">
            {reviews && reviews.slice(0, maxProducts || reviews.length).map(({ node: post }) => (
              <li className="flex flex-col w-full px-10 py-10 md:px-16 lg:px-28 md:flex-row">
                <div className="relative items-center flex-grow overflow-hidden">
                  {post.frontmatter.featuredimage ?
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `${post.frontmatter.title}`,
                      }}
                    /> : ''}
                </div>
                <div className="flex flex-col justify-center flex-1 p-1">
                  <h3 className={`leading-tight truncate-2-lines p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500`} title={post.frontmatter.pageTitle}>{post.frontmatter.pageTitle}</h3>
                  <p className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">{post.frontmatter.metaDescription}</p>
                  <Link className="flex justify-center p-2 my-4 text-lg text-white rounded-full bg-primary-500 hover:bg-primary-700 focus:bg-primary-700" to={post.fields.slug}>review {post.frontmatter.title}</Link>
                  {
                    post.frontmatter.links ?
                      post.frontmatter.links.amazonLink ?
                        <Link to={post.frontmatter.links.amazonLink} className="p-2 m-2 text-lg text-center text-gray-800 bg-orange-300 rounded-full hover:bg-orange-400 focus:bg-orange-400">
                          Comprar en Amazon
                        </Link>
                      : null + 
                      post.frontmatter.links.aliexpressLink ?
                        <Link to={post.frontmatter.links.aliexpressLink} className="p-2 m-2 text-lg text-center text-gray-100 rounded-full bg-rose-600 hover:bg-rose-700 focus:bg-rose-700">
                          Comprar en Aliexpress
                        </Link>
                      : null
                    : null
                  }
                </div>
              </li>
            ))}
          </ul>
          : ''}
      </>
    )
  }
}

PrinterRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ maxProducts, type }) => (
  <StaticQuery
    query={graphql`
      query PrinterRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "printer-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                metaDescription
                pageTitle
                links {
                  amazonLink
                  aliexpressLink
                }
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PrinterRoll data={data} count={count} maxProducts={maxProducts} type={type} />}
  />
)
