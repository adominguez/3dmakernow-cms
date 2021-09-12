import React from 'react'
import { HTMLContent } from './Content'

const Tooltip = ({ children, content, title, className }) => (
  <div className={`relative has-tooltip ${className}`}>
    <span className="p-1 -mt-8 leading-5 bg-gray-100 rounded shadow-lg w-80 tooltip">
      {title ? <p className="p-2 font-bold">{title}</p> : null}
      <HTMLContent className="p-2" content={content} />
    </span>
    {children}
  </div>
)

export default Tooltip
