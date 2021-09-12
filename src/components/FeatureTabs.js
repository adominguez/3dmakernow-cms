import React, { useState } from 'react'
import { convertedKeyProperties } from '../utils/utils'
import { HTMLContent } from '../components/Content'
import CustomSection from './CustomSection'
import Tooltip from './Tooltip'
import { matchKeyProperties } from '../utils/properties'

const Tab = ({ properties, activeTab = 'feature' }) => {
  const data = Object.entries(matchKeyProperties[activeTab].data)

  const renderTechnologyTooltip = (technology) => {
    switch (technology) {
      case 'FDM':
        return '<b>Impresora de FDM:</b> es un tipo de impresión por el que <b>la pieza se va realizando capa a capa</b>. El material se va fundiendo a su paso por el extrusor de la impresora y va realizando la pieza.'
      case 'Resina':
        return '<b>Impresora de resina:</b> la impresión 3D se realiza mediante resina líquida, gracias a una luz photónica que va solidificando el material capa a capa.'
      default:
        break
    }
  }

  return (
    <div className="p-2">
      {properties &&
        data.map((item, key) => {
          return item[0] === 'content' ? (
            <div>
              <HTMLContent
                className="flex flex-col w-full feature-tabs md:flex-row"
                content={properties.content}
              />
            </div>
          ) : properties[item[0]] ? (
            <div key={key} className={`leading-8 border-b flex items-center`}>
              {item[1].icon ? (
                <img
                  src={item[1].icon}
                  alt={item[1].title}
                  className="w-6 mr-2"
                />
              ) : null}
              <b>{item[1].title}</b>:{' '}
              <span className="mr-2">{properties[item[0]]}</span>
              {item[1].info ? (
                <Tooltip
                  className="hidden md:block"
                  content={
                    item[0] === 'technology'
                      ? renderTechnologyTooltip(properties[item[0]])
                      : item[1].info
                  }
                  title={item[1].title}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#94a3b8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Tooltip>
              ) : null}
            </div>
          ) : null
        })}
    </div>
  )
}

const FeatureTabs = ({ properties }) => {
  const initialSelected = properties['feature']
    ? 'feature'
    : properties['software']
    ? 'software'
    : properties['unboxing']
    ? 'unboxing'
    : properties['electricity']
    ? 'electricity'
    : properties['content']
    ? 'content'
    : 'feature'
  const [activeTab, setActiveTab] = useState(initialSelected)

  const renderActiveTab = () => {
    return <Tab properties={properties[activeTab]} activeTab={activeTab} />
  }

  return (
    <CustomSection
      backgroundColor="Oscuro"
      title="Características técnicas"
      sectionContent={properties.sectionContent}
      title={properties.title || 'Características técnicas'}
    >
      <div className="flex flex-col text-gray-600 bg-white rounded-md">
        <div className="flex flex-col md:flex-row md:justify-between">
          {convertedKeyProperties(properties) &&
          convertedKeyProperties(properties).filter(
            (item) => item !== 'sectionContent' && item !== 'title'
          ).length
            ? convertedKeyProperties(matchKeyProperties).map((item, key) =>
                properties[item] ? (
                  <label
                    key={key}
                    htmlFor="url"
                    className={`relative rounded-t-md flex-1 text-center ${
                      activeTab === item
                        ? 'border-b-4 border-primary-500 text-primary-500'
                        : 'border-b'
                    }`}
                  >
                    <input
                      type="radio"
                      name="url"
                      value={item}
                      className={`absolute w-full h-full opacity-0 block hover:cursor-pointer`}
                      checked={activeTab === item}
                      onChange={(e) => setActiveTab(e.currentTarget.value)}
                    />
                    <p className="p-2">{matchKeyProperties[item].text}</p>
                  </label>
                ) : null
              )
            : null}
        </div>
        {renderActiveTab()}
      </div>
    </CustomSection>
  )
}

export default FeatureTabs
