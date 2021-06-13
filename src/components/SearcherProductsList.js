import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/slick.css";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ProductsStars from '../components/ProductsStar';

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: false,
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

const SearcherProductsList = ({ loadingProducts, products = [], setProductsSelected, productsSelected = [], error }) => {
  const isProductSelected = (asin) => {
    return productsSelected.find(product => product.ASIN === asin)
  }

  const toggleSelectProduct = (evt) => {
    const { value } = evt.currentTarget
    const itemSelected = products.find(item => item.ASIN === value)
    if (isProductSelected(value)) {
      setProductsSelected(productsSelected.filter(product => product.ASIN !== itemSelected.ASIN))
    } else {
      setProductsSelected(productsSelected.concat([itemSelected]))
    }
  }

  const isProductsEmpty = () => {
    return !!productsSelected?.length
  }

  const selectAllProducts = () => {
    if (products?.length) {
      deSelectAllProducts()
      setProductsSelected([].concat(products))
    }
  }

  const deSelectAllProducts = () => {
    if (isProductsEmpty()) {
      setProductsSelected([])
    }
  }
  return (
    <>
      {
        error ? <div className="p-4 text-red-500">Ha habido problemas al mostrar la información</div> : null
      }
      {
        productsSelected?.length ?
          <Slider {...settings} >
            {productsSelected.map(({ ASIN, ImageUrl, Title }) => (
              <div key={ASIN} className="p-2">
                <div className="border rounded-sm">
                  <div className="relative featured-thumbnail">
                    <button className="absolute p-2 bg-red-100 rounded-3xl right-2 top-2" onClick={() => setProductsSelected(productsSelected.filter(product => product.ASIN !== ASIN))}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ef4444">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: ImageUrl,
                        alt: Title,
                      }}
                    />
                  </div>
                  <h3 className="truncate-2-lines">{Title}</h3>
                </div>
              </div>
            ))}
          </Slider>
          : null
      }
      {
        loadingProducts
          ? <div>Loading</div>
          : products?.length ? <div className="flex justify-end mx-4">
            <button className={`border border-blueGray-500 rounded-md mx-2 p-2 ${!products?.length ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!products?.length} onClick={selectAllProducts}>
              Seleccionar todo
              </button>
            <button className={`border border-blueGray-500 rounded-md p-2 ${!isProductsEmpty() ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!isProductsEmpty()} onClick={deSelectAllProducts}>
              Deseleccionar todo
              </button>
          </div> : null
      }
      <ul className="flex flex-wrap px-4">
        {
          products?.length && !loadingProducts
            ? products.map(item => {
              const { ASIN, ImageUrl, Title, Rating, TotalReviews, Price } = item;
              return (
                <li key={ASIN} className="w-full p-2 xl:w-1/3 md:w-1/2">
                  <label htmlFor="products" className={`relative block w-full h-full border-2 rounded-md ${isProductSelected(ASIN) ? 'border-secondary-500' : 'border-transparent'}`}>
                    <input type="checkbox" name="products" value={ASIN} className="absolute w-full h-full opacity-0 cursor-pointer" checked={isProductSelected(ASIN)} onChange={toggleSelectProduct} />
                    {
                      isProductSelected(ASIN)
                        ? <div className="absolute w-6 h-6 right-2 bottom-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00897b">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        : ''
                    }
                    <div className="flex flex-col">
                      <img src={ImageUrl} alt={Title} className="flex-shrink-0 object-cover object-center rounded-lg" />
                      <div className="px-2 overflow-auto">
                        <div className="text-gray-700 truncate-2-lines">{Title}</div>
                        <span className="pr-4 text-2xl text-center text-primary-500">{Price}</span>
                        <ProductsStars amazonRate={Rating} amazonRatings={TotalReviews} />
                      </div>
                    </div>
                  </label>
                </li>
              )
            })
            : ''
        }
      </ul>
    </>
  )
}

export default SearcherProductsList
