import React from 'react'
import { replaceImgUrl, sliderSettings } from '../utils/utils'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../components/slick.css"

export const CarouselImage = ({ images, className, settings = sliderSettings}) => {
  return (
    <Slider className={className} {...settings} >
      {images && images.length && images.map((item, key) => (
        <img key={key} src={replaceImgUrl(item?.src?.absolutePath ? item?.src?.absolutePath.split('/static')[1] : item?.src)} alt={item.alt} />
      ))}
    </Slider>
  )
}