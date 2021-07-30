import { Link } from "gatsby";
import React from "react";
import { submenu } from '../utils/utils';
import Parser from 'html-react-parser';

const Submenu = ({ title }) => {
  return (
    <>
      {submenu[title] && submenu[title].length ?
        <nav className="flex justify-center w-full text-white bg-primary-500">
          <ul className="flex flex-row justify-between w-full md:w-4/5 ">
            {
              submenu[title].map(({ label, title, icon, to }) => (
                <Link className="flex-1 p-2 text-center" to={to} title={title}>
                  {icon ? Parser(icon) : null} {label}</Link>
              ))
            }
          </ul>
        </nav>
        : null}
    </>
  )
}

export default Submenu;