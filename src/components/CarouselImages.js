import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { replaceImgUrl } from '../utils/utils'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../components/slick.css"

export const CarouselImage = ({ images, className, settings = {
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
}}) => {
  return (
    <Slider className={className} {...settings} >
      {images && images.length && images.map((item, key) => (
        <img key={key} src={replaceImgUrl(item?.src?.absolutePath ? item?.src?.absolutePath.split('/static')[1] : item?.src)} alt={item.alt} />
      ))}
    </Slider>
  )
}