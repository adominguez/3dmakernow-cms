import PropTypes from 'prop-types'
import React from 'react'

const NavButton = ({ opened, buttonClicked }) => {
  return (
    <button
      className={`focus:outline-none focus:border-opacity-0 md:hidden relative border-0 transform rotate-0 cursor-pointer w-5 h-5 transition-transform duration-500 ease-in-out m-4 ${
        opened ? 'open' : ''
      }`}
      onClick={() => buttonClicked()}
    >
      <span
        className={`absolute block h-0.5 rounded-sm opacity-100 transform transition-all duration-500 rotate-0 ease-in-out ${
          opened
            ? 'top-2 w-0 left-1/2 bg-primary-500'
            : 'top-1 w-full left-0 bg-secondary-500'
        }`}
      />
      <span
        className={`absolute block w-full h-0.5 rounded-sm opacity-100 left-0 transform transition-all duration-500 ease-in-out top-2 ${
          opened ? 'rotate-45 bg-primary-500' : 'rotate-0 bg-secondary-500'
        }`}
      />
      <span
        className={`absolute block w-full h-0.5 rounded-sm opacity-100 left-0 transform transition-all duration-500 ease-in-out top-2 ${
          opened ? '-rotate-45 bg-primary-500' : 'rotate-0 bg-secondary-500'
        }`}
      />
      <span
        className={`absolute block h-0.5 rounded-sm opacity-100 transform transition-all duration-500 rotate-0 ease-in-out ${
          opened
            ? 'top-2 w-0 left-1/2 bg-primary-500'
            : 'top-3 w-full left-0 bg-secondary-500'
        }`}
      />
    </button>
  )
}

NavButton.propTypes = {
  opened: PropTypes.bool,
  buttonClicked: PropTypes.func,
}

NavButton.defaultProps = {
  opened: false,
}

export default NavButton
