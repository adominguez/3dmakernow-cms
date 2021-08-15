import React from "react";
import { Link } from "gatsby";

const ProductAffiliateLinks = ({ amazonLink, aliexpressLink, customLinks }) => {

  return (
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
  )
}

export default ProductAffiliateLinks;