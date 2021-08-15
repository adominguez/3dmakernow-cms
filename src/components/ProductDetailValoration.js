import React from "react";
import ImageGalery from "./ImageGalery";
import { HTMLContent } from './Content'
import ProductAffiliateLinks from './ProductAffiliateLinks'
import { Link } from "gatsby";
import { capitalize, replaceImgUrl } from '../utils/utils';

const ProductDetailValoration = ({ pageTitle, productsImages, initialValuation, amazonLink, aliexpressLink, customLinks }) => {

  const images = productsImages?.filter(item => item !== 'undefined').map(image => ({
    src: image?.src?.childImageSharp?.fluid?.src || replaceImgUrl(image?.src),
    alt: image?.alt
  }))

  return (
    <section className="flex justify-center w-full border-b bg-blueGray-200 border-blueGray-300">
      <div className="flex flex-col justify-between w-full md:flex-row md:w-4/5 text-blueGray-500">
        <div className="flex flex-col justify-center flex-1">
          {
            images && images.length ?
              <ImageGalery images={images} />
            : null
          }
        </div>
        <div className="flex flex-col flex-1 p-4">
          <h1 className="p-2 text-2xl font-light text-center lg:text-3xl text-primary-500">
            {capitalize(pageTitle)}
          </h1>
          <HTMLContent className="flex-1 my-2 text-lg font-light custom-section" content={initialValuation} />
          <ProductAffiliateLinks amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
        </div>
      </div>
    </section>
  )
}

export default ProductDetailValoration;