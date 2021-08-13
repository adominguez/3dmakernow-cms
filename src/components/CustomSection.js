import React from "react";
import { HTMLContent } from '../components/Content'
import { capitalize } from '../utils/utils';

const CustomSection = ({sectionContent, title, showBorder }) => {

  return (
    <section className={`flex justify-center w-full border-b ${showBorder ? 'border-blueGray-300' : null}`}>
      <div className="flex flex-col w-full p-4 md:w-4/5 text-blueGray-500">
        {
          title ?
            <h2 className="p-2 text-2xl font-medium text-center lg:text-3xl text-secondary-500">
              {capitalize(title)}
            </h2>
          : null
        }
        <HTMLContent className="flex-1 my-2 text-base font-light lg:text-lg" content={sectionContent} />
      </div>
    </section>
  )
}

export default CustomSection;