import React from "react";
import { HTMLContent } from '../components/Content'

const AdvantagesDisadvantajes = ({ advantagesDisadvantajes }) => {

  const advantages = advantagesDisadvantajes.advantages;
  const disadvantages = advantagesDisadvantajes.disadvantages;

  const renderItem = (item, key, type) => (
    <div key={key} className={`flex justify-between border-l-8 border rounded-md text-blueGray-600 p-2 my-3 ${type === 'advantage' ? 'border-green-700' : 'border-red-600'}`}>
      <div className="flex-1">
        <HTMLContent content={item.text} />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col w-full bg-white rounded-md md:flex-row">
      <div className="flex-1 p-2">
        {advantages && advantages.length ?
          <>
            <h3 className="text-center text-blueGray-600">Ventajas</h3>
            {
              advantages.map((item, key) => renderItem(item, key, 'advantage'))
            }
          </>
          : null
        }
      </div>
      <div className="flex-1 p-2">
        {
          disadvantages && disadvantages.length ?
          <>
            <h3 className="text-center text-blueGray-600">Desventajas</h3>
            {
              disadvantages.map((item, key) => renderItem(item, key, 'disadvantaje'))
            }
          </>
          : null
        }
      </div>
    </div>
  )
}

export default AdvantagesDisadvantajes;