import React from "react";
import { HTMLContent } from '../components/Content'
import { replaceImgUrl } from '../utils/utils';
import ProductAffiliateLinks from "./ProductAffiliateLinks";

const ProductDetailImage = ({ featuredimage, title, content, amazonLink, aliexpressLink, customLinks }) => {
  const image = featuredimage.absolutePath ? featuredimage.absolutePath.split('/static')[1] : featuredimage;
  return (
    <div className="flex flex-col w-full md:flex-row">
      {
        image ?
          <div className="flex-1">
            <img src={replaceImgUrl(image)} alt={title} />
          </div>
          : null
      }
      {
        content ?
          <div className="flex-1">
            <HTMLContent className="custom-section" content={content} />
            <ProductAffiliateLinks amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
          </div>
          : null
      }
    </div>
  )
}

export default ProductDetailImage;