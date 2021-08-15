import React from "react";
import { HTMLContent } from '../components/Content'
import { replaceImgUrl } from '../utils/utils';
import ProductAffiliateLinks from "./ProductAffiliateLinks";

const ProductDetailImage = ({ featuredimage, title, whereBuy, amazonLink, aliexpressLink, customLinks }) => {

  return (
    <div className="flex flex-col w-full md:flex-row">
      {
        featuredimage ?
          <div className="flex-1">
            <img src={replaceImgUrl(featuredimage)} alt={title} />
          </div>
          : null
      }
      {
        whereBuy.whereBuyText ?
          <div className="flex-1">
            <HTMLContent className="custom-section" content={whereBuy.whereBuyText} />
            <ProductAffiliateLinks amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
          </div>
          : null
      }
    </div>
  )
}

export default ProductDetailImage;