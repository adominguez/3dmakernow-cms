import PropTypes from "prop-types";
import React from "react";
import ProductsStars from "./ProductsStar";

const ProductActionPrice = ({ product, buttonText, hideAmazonRatings, hideAmazonRate, useAction, relativePath, tag }) => {
	return (
		<div className="flex flex-col">
			<div>
				<span className="pr-4 text-2xl text-center text-primary-500">{product?.Price.replace('.', ',')}</span>
				<ProductsStars hideAmazonRatings={hideAmazonRatings} hideAmazonRate={hideAmazonRate} amazonRate={product.Rating} amazonRatings={product.TotalReviews} />
			</div>
			{
				useAction ?
				<a className="flex items-center w-auto px-4 py-2 text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-700 focus:bg-primary-700" href={`${relativePath ? '../' : ''}goto?url=${product.link}&tag=${tag}`} target="_blank" rel="nofollow noopener noreferrer">
					{buttonText}
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</a>
				: 
				<button className="flex items-center w-auto px-4 py-2 text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-700 focus:bg-primary-700">
					{buttonText}
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</button>
			}
		</div>
	)
}

ProductActionPrice.propTypes = {
	product: PropTypes.object,
	buttonText: PropTypes.string,
	hideAmazonRate: PropTypes.bool,
	hideAmazonRatings: PropTypes.bool,
	useAction: PropTypes.bool,
	relativePath: PropTypes.bool,
	tag: PropTypes.string
}

ProductActionPrice.defaultProps = {
	buttonText: 'Ver más información',
	hideAmazonRate: false,
	hideAmazonRatings: false,
	useAction: false,
	relativePath: false
}

export default ProductActionPrice;