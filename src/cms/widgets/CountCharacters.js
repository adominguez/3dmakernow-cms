import React from 'react'

const CountCharacters = ({ phrase, maxLength }) => {
  return (
    <div className="flex justify-end">
      {phrase ? (
        <span className={phrase.length >= maxLength ? 'text-red-500' : ''}>
          {phrase.length}
        </span>
      ) : (
        0
      )}{' '}
      | <span>{maxLength}</span>
    </div>
  )
}
export default CountCharacters
