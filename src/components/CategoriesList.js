import React from 'react'
import { Link } from 'gatsby'

const CategoriesList = ({ categories }) => {
  return (
    <div className="flex flex-wrap">
      {
        categories.map(({ image, name, description, route, callToAction }, key) => (
          <div key={key} className="w-full p-4 sm:w-1/2 lg:w-1/3">
            <Link className={`flex-col overflow-hidden border-2 border-gray-300 rounded-md flex max-h-96 group hover:border-primary-300 focus:ring-2 focus:ring-primary-500 outline-none centered-flex bg-white`} to={route}>
              <div className="relative items-center flex-grow overflow-hidden flex-2 centered-flex">
                <picture>
                  <img className="flex-shrink-0 object-cover object-center w-full rounded-md" src={`img/${image}-desktop.png`} alt={name} />
                </picture>
                <div className="absolute bottom-0 left-0 w-full p-1 text-center bg-opacity-70 bg-primary-700">
                  <h3 className={`text-xl md:text-2xl font-medium truncate-2-lines text-white`} title={name}>{name}</h3>
                  {
                    description &&
                    <p className="text-base font-light text-blueGray-100">{description}</p>
                  }
                  {
                    callToAction &&
                    <p className="p-2 m-2 text-base font-semibold bg-white rounded-full text-primary-500 group-hover:text-white group-hover:bg-primary-800 group-focus:text-white group-focus:bg-primary-800">{callToAction}</p>
                  }
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
};

export default CategoriesList;
