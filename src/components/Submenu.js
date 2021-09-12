import { Link, withPrefix } from 'gatsby'
import React from 'react'
import { submenu } from '../utils/utils'
import Parser from 'html-react-parser'

const Submenu = ({ submenu = {} }) => {
  const { showSubmenu, menuItems } = submenu
  return (
    <>
      {showSubmenu && menuItems && menuItems.length ? (
        <nav className="flex justify-center w-full bg-white text-primary-500">
          <ul className="flex flex-row md:w-4/5 ">
            {menuItems.map(({ name, icon, route }, index) =>
              route ? (
                <Link
                  key={index}
                  className="flex flex-col items-center justify-center px-4 py-2 text-center border-b-4 border-transparent cursor-pointer hover:border-primary-500 focus:border-primary-500"
                  to={route}
                  title={name}
                >
                  {icon ? Parser(icon) : null} {name}
                </Link>
              ) : (
                <p
                  key={index}
                  className="flex flex-col items-center justify-center px-4 py-2 text-center border-b-4 border-primary-500"
                >
                  {icon ? Parser(icon) : null} {name}
                </p>
              )
            )}
          </ul>
        </nav>
      ) : null}
    </>
  )
}

export default Submenu
