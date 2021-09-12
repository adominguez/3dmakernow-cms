import React from 'react'
import { HTMLContent } from '../components/Content'
import { replaceImgUrl, splitStaticUrl } from '../utils/utils'
import ProductAffiliateLinks from './ProductAffiliateLinks'

const ProductDetailImage = ({
  featuredimage,
  title,
  content,
  amazonLink,
  aliexpressLink,
  customLinks,
}) => {
  const image = featuredimage.absolutePath
    ? splitStaticUrl(featuredimage.absolutePath)
    : featuredimage
  return (
    <div className="flex flex-col w-full md:flex-row">
      {image ? (
        <div className="flex items-center justify-center flex-1">
          <img
            src={replaceImgUrl(image)}
            alt={title || 'Comprar impresora 3D'}
          />
        </div>
      ) : null}
      {content ? (
        <div className="flex-1">
          <HTMLContent
            className="custom-section section-centered"
            content={content}
          />
          <ProductAffiliateLinks
            amazonLink={amazonLink}
            aliexpressLink={aliexpressLink}
            customLinks={customLinks}
          />
        </div>
      ) : null}
    </div>
  )
}

export default ProductDetailImage
