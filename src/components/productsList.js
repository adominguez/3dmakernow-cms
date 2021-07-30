import React, { useState } from 'react'
import ProductActionPrice from './ProductActionPrice';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../components/slick.css"
import { orderProducts } from '../utils/utils';

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

const ProductsList = ({ productsList = [], type = 'grid', showToolbar, searching = false, searchingError = false }) => {
  const [typeList, setTypeList] = useState(type);
  const [order, setOrder] = useState('Por relevancia');
  const [productsListState, setProductsListState] = useState((productsList || {}).map((item, index) => ({
    ...item,
    order: index + 1
  })));

  const parseNumber = (str) => {
    const number = str.replace(' €', '').replace(',', '.')
    if(number.indexOf('.') > -1) {
      return parseFloat(number);
    } else {
      return parseInt(number);
    }
  }

  const productsListOrdered = () => {
    if(order === 'Por relevancia' || !showToolbar) {
      return (productsListState || []).sort((a, b) => {
        return a.order - b.order;
      });;
    }
    if(order.includes('caros')) {
      return productsList.sort((a, b) => {
        return parseNumber(b.Price) - parseNumber(a.Price);
      });
    }
    if(order.includes('baratos')) {
      return productsList.sort((a, b) => {
        return parseNumber(a.Price) - parseNumber(b.Price);
      });
    }
    if(order.includes('vendidos')) {
      return productsList.sort((a, b) => {
        return parseNumber(b.TotalReviews) - parseNumber(a.TotalReviews);
      });
    }
  }

  const renderContent = item => {
    const { DetailPageURL, ImageUrl, Title } = item;
    return (
      <a href={DetailPageURL} target="_blank" rel="nofollow noopener noreferrer" className={`flex p-4 ${typeList === 'carousel' ? 'flex-wrap justify-around' : ''} ${typeList === 'list' ? 'border-0 hover:bg-primary-100' : 'border rounded-md'} hover:border-primary-800 hover:cursor-pointer focus:outline-none focus:bg-primary-100 focus:border-primary-800`}>
        <img src={ImageUrl} loading="lazy" alt={Title} className="flex-shrink-0 object-cover object-center rounded-lg" />
        <div className="flex-1 px-2 overflow-auto">
          <div className="text-gray-700 truncate-2-lines">{Title}</div>
          <ProductActionPrice product={item} />
        </div>
      </a>
    )
  }

  const renderItem = (item, index) => {
    const { ASIN } = item;
    return (
      <li key={ASIN} className="w-full p-2 xl:w-1/3 lg:w-1/2">
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

  const renderSortProducts = () => {
    return (
      <div className="flex items-center justify-end p-2 px-4 my-2 border-b-2">
        <div className="flex-1">
          <button className={`${typeList === 'grid' ? 'bg-primary-500 text-white' : null} border mx-1 rounded-md text-blueGray-600 p-2`} onClick={() => setTypeList('grid')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={typeList === 'grid' ? '#fff' : '#49b2a1'}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button className={`${typeList === 'list' ? ' bg-primary-500 text-white' : null} border mx-1 rounded-md text-blueGray-600 p-2`} onClick={() => setTypeList('list')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"  stroke={typeList === 'list' ? '#fff' : '#49b2a1'}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          {
            type === 'carousel' ?
              <button className={`${typeList === 'carousel' ? ' bg-primary-500 text-white' : null} border mx-1 rounded-md text-blueGray-600 p-2`} onClick={() => setTypeList('carousel')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"  stroke={typeList === 'carousel' ? '#fff' : '#49b2a1'}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </button>
            : null
          }
        </div>
        <div>
          <label htmlFor="order" className="block text-primary-500">Ordenar por</label>
          <select className="p-2 bg-transparent border rounded-md text-blueGray-500 border-blueGray-500" name="order" value={order} onChange={(event) => setOrder(event.currentTarget.value)}>
            {orderProducts.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  return (
    <>
      {
        productsList?.length ?
          showToolbar && renderSortProducts()
        : null
      }
      {
        productsList?.length && typeList === 'grid' ?
          <ul className="flex flex-wrap px-4">
            {productsListOrdered().map((item, index) => renderItem(item, index))}
          </ul>
        : null
      }
      {
        productsList?.length && typeList === 'carousel' ?
          <Slider {...settings} >
            {productsListOrdered().map((item, index) => (renderCarouselItem(item, index)))}
          </Slider>
        : null
      }
      {
        productsList?.length && typeList === 'list' ?
          <ul className="flex flex-wrap px-4">
            {productsListOrdered().map((item, index) => renderItemList(item, index))}
          </ul>
        : null
      }
    </>)
}

export default ProductsList
