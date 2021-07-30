import React from 'react';
import { errorMessages } from '../utils/utils';


const ErrorMessage = ({textError, type='error'}) => {

  return (
    <div className="flex flex-col items-center justify-center flex-1 p-2">
        <div className="flex items-center justify-center flex-1">
            {type === 'error' ?
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#b91c1c">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="p-2 text-3xl text-red-700 font-extralight">{errorMessages.errorTitle}</p>
                </>
            : null}
            {type === 'empty' ?
                <>
                    <p className="p-2 text-3xl text-red-700 font-extralight">{errorMessages.noResults}</p>
                </>
            : null}
        </div>
        <p className="px-2 text-2xl font-thin text-center text-red-500">{textError}</p>
    </div>
  )
}


export default ErrorMessage
