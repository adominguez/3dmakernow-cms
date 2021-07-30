import React from 'react'
import ProductActionPrice from './ProductActionPrice';
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
      breakpoint: 600,
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

const ProductsList = ({ productsList = [], type = 'grid' }) => {

  const renderContent = item => {
    const { DetailPageURL, ImageUrl, Title } = item;
    return (
      <a href={DetailPageURL} target="_blank" rel="nofollow noopener noreferrer" className={`flex p-4 ${type === 'carousel' ? 'flex-wrap justify-around' : ''} ${type === 'list' ? 'border-0 hover:bg-primary-100' : 'border rounded-md'} hover:border-primary-800 hover:cursor-pointer focus:outline-none focus:bg-primary-100 focus:border-primary-800`}>
        <img src={ImageUrl} loading="lazy" alt={Title} className="flex-shrink-0 object-cover object-center rounded-lg" />
        <div className="px-2 overflow-auto">
          <div className="text-gray-700 truncate-2-lines">{Title}</div>
          <ProductActionPrice product={item} />
        </div>
      </a>
    )
  }

  const renderItem = (item, index) => {
    const { ASIN } = item;
    return (
      <li key={ASIN} className="w-full p-2 xl:w-1/4 lg:w-1/3 md:w-1/2">
        {renderContent(item, index)}
      </li>
    )
  }

  const renderCarouselItem = (item, index) => {
    const { ASIN } = item;
    return (
      <div key={ASIN} className="p-2">
        {renderContent(item, index)}
      </div>
    )
  }

  const renderItemList = (item, index) => {
    const { ASIN } = item;
    return (
      <li key={ASIN} className={`w-full ${index === productsList.length - 1 ? 'border-0' : 'border-b-2 border-primary-500' }`}>
        {renderContent(item, index)}
      </li>
    )
  }

  return (
    <>
      {
        productsList?.length && type === 'grid' ?
          <ul className="flex flex-wrap px-4">
            {productsList.map((item, index) => renderItem(item, index))}
          </ul>
        : null
      }
      {
        productsList?.length && type === 'carousel' ?
          <Slider {...settings} >
            {productsList.map((item, index) => (renderCarouselItem(item, index)))}
          </Slider>
        : null
      }
      {
        productsList?.length && type === 'list' ?
          <ul className="flex flex-wrap px-4">
            {productsList.map((item, index) => renderItemList(item, index))}
          </ul>
        : null
      }
    </>)
}

export default ProductsList
