import React from "react";
import { HTMLContent } from '../components/Content'
import { capitalize } from '../utils/utils';

const colors = {
  Claro: {
    backgroundColor: 'bg-white',
    textColor: 'text-blueGray-500'
  },
  Medio: {
    backgroundColor: 'bg-blueGray-200',
    textColor: 'text-blueGray-800'
  },
  Oscuro: {
    backgroundColor: 'bg-blueGray-800',
    textColor: 'text-blueGray-200'
  }
}

const CustomSection = ({sectionContent, title, showBorder, backgroundColor='Claro', children }) => {

  return (
    <section className={`flex justify-center w-full ${colors[backgroundColor].backgroundColor} ${showBorder ? 'border-blueGray-300 border-b' : null}`}>
      <div className={`flex flex-col w-full p-4 md:w-4/5 ${colors[backgroundColor].textColor}`}>
        {
          title ?
            <h2 className="p-2 text-2xl font-medium text-center lg:text-3xl text-primary-500">
              {capitalize(title)}
            </h2>
          : null
        }
        {
          sectionContent ?
            <HTMLContent className="flex-1 my-2 text-lg font-light custom-section" content={sectionContent} />
          : null
        }
        {children}
      </div>
    </section>
  )
}

export default CustomSection;