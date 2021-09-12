import PropTypes from 'prop-types'
import React from 'react'
import { isOdd, capitalize } from '../utils/utils'

const CompareProducts = ({
  compareProducts: { properties, products } = {},
  informationButtonText,
}) => {
  const renderTableAttributes = () => {
    return (
      <div className="mt-px overflow-hidden border-t border-b border-l border-gray-300 rounded-tl-lg rounded-bl-lg">
        <p
          className={`flex items-center justify-start h-12 px-4 -mt-px text-center text-primary-500 bg-gray-200`}
        >
          Producto
        </p>
        {properties &&
          properties.length &&
          properties.map((property, index) => (
            <p
              key={`productData-${index}`}
              className={`flex items-center justify-start h-12 px-4 -mt-px text-center text-textColor-500 ${
                isOdd(index) ? 'bg-gray-200' : 'bg-white'
              }`}
            >
              {capitalize(property)}
            </p>
          ))}
      </div>
    )
  }

  const renderProductData = (propertiesValues) => {
    return propertiesValues.map((data, dataIndex) => (
      <p
        key={`product-data-${dataIndex}`}
        className={`h-12 px-4 -mt-px leading-10 truncate border-gray-300 text-textColor-500 text-center flex justify-center ${
          isOdd(dataIndex) ? 'bg-gray-200' : 'bg-white'
        }`}
      >
        <span className="block pr-1 font-bold lg:hidden">
          {properties[dataIndex]}:
        </span>
        {data}
      </p>
    ))
  }

  const renderProductInformation = () => {
    return products.map(({ name, image, link, propertiesValues }, key) => (
      <div
        key={`product-${key}`}
        className={`w-full mb-10 border-2 border-gray-300 rounded-lg lg:w-1/${products.length} lg:mt-px lg:mb-0 lg:border-none lg:rounded-none`}
      >
        <div
          className={`flex flex-col items-center justify-center h-48 px-2 text-center bg-white rounded-t-lg ${
            key === 0 ? 'lg:rounded-tl-lg' : ''
          } ${key === products.length - 1 ? 'lg:rounded-tr-lg' : ''}`}
        >
          <img
            loading="lazy"
            className="flex-shrink-0 object-cover object-center h-44"
            src={image}
            alt={name}
          />
        </div>
        <p
          className="h-12 px-4 -mt-px leading-10 text-center truncate bg-gray-200 border-t border-gray-300 text-primary-500"
          title={name}
        >
          {name}
        </p>
        {renderProductData(propertiesValues)}
        <div className="p-6 text-center border-t border-gray-300 rounded-bl-lg centered-flex">
          <a
            className="flex items-center w-auto px-4 py-2 mt-auto text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-700 focus:bg-primary-700"
            href={link}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {informationButtonText}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-auto"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    ))
  }

  return (
    <div className="container flex flex-wrap px-4">
      <div className="hidden mt-48 lg:w-1/4 lg:block">
        {properties && properties.length && renderTableAttributes()}
      </div>
      <div className="flex flex-wrap w-full border-gray-300 rounded-lg lg:w-3/4 lg:border">
        {products && products.length && renderProductInformation()}
      </div>
    </div>
  )
}

CompareProducts.propTypes = {
  products: PropTypes.array,
  informationButtonText: PropTypes.string,
}

CompareProducts.defaultProps = {
  products: [],
  informationButtonText: 'Ver más información',
}

export default CompareProducts
