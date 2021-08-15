import React from "react";
import ImageGalery from "./ImageGalery";
import { HTMLContent } from '../components/Content'
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
          <HTMLContent className="flex-1 my-2 text-lg font-light" content={initialValuation} />
          <div className="flex flex-wrap justify-center">
            {
              amazonLink ?
                <Link to={amazonLink} className="p-2 m-2 text-lg text-center text-gray-800 bg-orange-300 rounded-full hover:bg-orange-400 focus:bg-orange-400">
                  Comprar en Amazon
                </Link>
              : null
            }
            {
              aliexpressLink ?
                <Link to={aliexpressLink} className="p-2 m-2 text-lg text-center text-gray-100 rounded-full bg-rose-600 hover:bg-rose-700 focus:bg-rose-700">
                  Comprar en Aliexpress
                </Link>
              : null
            }
            {
              customLinks && customLinks.length ?
                customLinks.map(({link, store = 'tienda'}, key) => (
                  link ?
                    <Link key={key} to={link} className="p-2 m-2 text-lg text-center text-gray-100 bg-blue-600 rounded-full hover:bg-blue-700 focus:bg-blue-700">
                      Comprar en {store}
                    </Link> : null
                ))
              : null
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailValoration;