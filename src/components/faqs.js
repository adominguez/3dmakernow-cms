import React, { useState, useEffect } from 'react'
import { HTMLContent } from '../components/Content'
import { capitalize } from '../utils/utils'

const Faqs = ({ asks }) => {
  const [faqs, setFaqs] = useState(asks)

  useEffect(() => {
    setFaqs(asks)
  }, [asks])

  const clickedFaq = (index) => {
    const newFaqs = [...faqs]
    newFaqs[index].open = !newFaqs[index].open
    setFaqs(newFaqs)
  }

  return (
    <div>
      {faqs && faqs.length ? (
        <div>
          {faqs.map(({ ask, response, open }, index) => {
            return (
              <div key={index} className="my-2">
                <button
                  className={`flex justify-between w-full rounded-md p-2 text-left hover:bg-blueGray-200 focus:bg-blueGray-200 focus:outline-none ${
                    open ? 'bg-blueGray-200' : ''
                  }`}
                  onClick={() => clickedFaq(index)}
                >
                  <h3 className="text-lg font-bold">{capitalize(ask)}</h3>
                  <span
                    className={`transform transition-transform ${
                      open ? 'rotate-90' : '-rotate-90'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`text-blueGray-500 ${
                    open ? 'h-auto overflow-auto p-2' : 'h-0 overflow-hidden'
                  }`}
                >
                  <HTMLContent content={response} />
                </div>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default Faqs
