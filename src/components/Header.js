import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import logoMovil from '../img/logo-movil.svg'
import NavButton from './NavButton'
import SearchInput from './SearchInput'

const Navbar = ({ focusSearch, cancelSearch, searchOpened, menuOpened, toggleMenu, isScrolling }) => {

  return (
    <header className={`bg-white principal-container flex justify-center w-full ${menuOpened ? 'z-20' : 'z-10'} ${isScrolling ? 'shadow-lg' : ''}`}>
      <div className={`justify-between w-full flex md:p-4 relative`}>
        <Link to="/" className={`leading-none text-2xl sm:block sm:text-center no-underline outline-none text-white hover:text-secondary-500 focus:text-secondary-500 w-16 md:w-60 p-2 md:p-0`}>
          <picture className="w-30">
            <source media="(max-width: 768px)" srcSet={logoMovil}></source>
            <img className="md:w-full md:h-full" loading="lazy" src={logo} alt="3DMakerNow" />
          </picture>
        </Link>
        <div className="relative flex items-center justify-center flex-1 mx-2 md:mx-3">
          <SearchInput onfocusInput={() => focusSearch()} onCancelSearch={() => cancelSearch()} opened={searchOpened} />
        </div>
        <nav role="navigation" aria-label="main-navigation" className={`flex absolute flex-col w-full z-20 bg-white top-16 ${menuOpened ? 'overflow-auto h-auto' : 'overflow-hidden h-0'} md:h-auto md:relative md:top-0 md:flex-row md:w-auto md:z-0 items-center`}>
          <Link className="p-2" to="/about">
            About
          </Link>
          <Link className="p-2" to="/impresoras">
            Impresoras 3D
          </Link>
          <Link className="p-2" to="/materiales">
            Materiales
          </Link>
          <Link className="p-2" to="/contact">
            Contact
          </Link>
          <Link className="p-2" to="/contact/examples">
            Form Examples
          </Link>
        </nav>
        <div className="flex items-center">
          <NavButton buttonClicked={() => toggleMenu()} opened={menuOpened} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
