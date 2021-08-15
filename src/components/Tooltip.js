import React from 'react';
import { HTMLContent } from './Content'


const Tooltip = ({ children, content, title }) => {

    return (
        <div class='has-tooltip'>
            <span class='tooltip rounded shadow-lg p-1 bg-gray-100 -mt-8 leading-5'>
                {
                    title ?
                        <p className="p-2 font-bold">{title}</p>
                    : null
                }
                <HTMLContent className="p-2" content={content} />
            </span>
            {children}
        </div>
    )
}


export default Tooltip
