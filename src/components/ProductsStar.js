import PropTypes from 'prop-types'
import React from 'react'

const ProductsStars = ({
  amazonRate,
  amazonRatings,
  totalNumberOfStars = 5,
  hideAmazonRatings,
  hideAmazonRate,
}) => {
  const completeRateNumber =
    !hideAmazonRatings &&
    amazonRate &&
    Array.from(Array(parseInt(amazonRate)).keys())
  const incompleteRateNumber =
    !hideAmazonRatings &&
    amazonRate &&
    Array.from(Array(totalNumberOfStars - parseInt(amazonRate)).keys())
  return (
    <span className="flex flex-col py-1">
      {amazonRatings && !hideAmazonRate && (
        <span className="text-gray-500">{amazonRatings} opiniones</span>
      )}
      <div className="flex">
        {!hideAmazonRate &&
          amazonRate &&
          completeRateNumber.map((rate) => (
            <svg
              key={rate}
              fill="#fb923c"
              stroke="#fb923c"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-secondary-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          ))}
        {!hideAmazonRate &&
          amazonRate &&
          incompleteRateNumber.map((rate) => (
            <svg
              key={`none-${rate}`}
              fill="none"
              stroke="#fb923c"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-secondary-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          ))}
      </div>
    </span>
  )
}

ProductsStars.defaultProps = {
  hideAmazonRatings: false,
  hideAmazonRate: false,
}

export default ProductsStars
