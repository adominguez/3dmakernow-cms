import React from 'react'
import { Link } from 'gatsby'
import { sliderSettings } from '../utils/utils'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../components/slick.css'

export const UpgradesToPrint = ({
  upgrades,
  className,
  settings = sliderSettings,
}) => {
  return (
    <Slider className={className} {...settings}>
      {upgrades &&
        upgrades.length &&
        upgrades.map((item, key) => (
          <div className="w-full p-2" key={key}>
            <Link
              className={`flex-col overflow-hidden border-2 border-gray-300 rounded-md flex max-h-96 group hover:border-primary-300 focus:ring-2 focus:ring-primary-500 outline-none centered-flex bg-white`}
              to={item.link}
            >
              <div className="relative items-center flex-grow overflow-hidden flex-2 centered-flex">
                <img src={item.image} alt={item.text} />
                <h3 className="text-primary-500 w-full p-1 text-center">
                  {item.text}
                </h3>
              </div>
            </Link>
          </div>
        ))}
    </Slider>
  )
}
