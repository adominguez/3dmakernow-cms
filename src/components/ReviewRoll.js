import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery, withPrefix } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../components/slick.css"

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

class ReviewRoll extends React.Component {
  render() {
    const { data, maxProducts, type = 'slider' } = this.props
    const { edges: reviews } = data.allMarkdownRemark

    return (
      type === 'slider' ? (
        <Slider {...settings} >
          {reviews &&
            reviews.slice(0, maxProducts || reviews.length).map(({ node: post }) => (

              <div className="w-full p-2" key={post.id}>
                <Link className={`flex-col overflow-hidden border-2 border-gray-300 rounded-md flex max-h-96 group hover:border-primary-300 focus:ring-2 focus:ring-primary-500 outline-none centered-flex bg-white`} to={post.fields.slug}>
                  <div className="relative items-center flex-grow overflow-hidden flex-2 centered-flex">
                    {post.frontmatter.featuredimage ?
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `${post.frontmatter.title}`,
                        }}
                      /> : ''}
                    <div className="w-full p-1 text-center">
                      <h3 className={`leading-tight font-medium truncate-2-lines text-primary-500`} title={post.frontmatter.title}>{post.frontmatter.title}</h3>
                      <p className="mt-2 overflow-auto text-sm font-light leading-tight max-h-10 text-blueGray-600">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Slider>
      ) : ''
    )
  }
}

ReviewRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  maxProducts: PropTypes.number,
  type: PropTypes.string,
}

export default ({maxProducts, type}) => (
  <StaticQuery
    query={graphql`
      query ReviewRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "review-page" } } }
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
    render={(data, count) => <ReviewRoll data={data} count={count} maxProducts={maxProducts} type={type} />}
  />
)
