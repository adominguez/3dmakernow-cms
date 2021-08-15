import React, {useState} from "react";
import { capitalize, convertedKeyProperties } from '../utils/utils';
import { HTMLContent } from '../components/Content'
import CustomSection from "./CustomSection";
import Tooltip from "./Tooltip";

const matchKeyProperties = {
  feature: {
    text: 'Características',
    data: {
      technology: {
        title: 'Tecnología',
        icon: 'technology.svg',
        info: 'info'
      },
      printerVolume: {
        title: 'Volumen de impresión',
        icon: 'printerVolume.svg',
        info: 'Es el máximo tamaño al que puede imprimir una impresora 3D en largo x ancho x alto y se mide en mm x mm x mm.'
      },
      layerResolution: {
        title: 'Resolución de capa',
        icon: 'printerThickness.svg',
        info: 'La resolución de capa es <b>la distancia que una impresora 3D permite que haya entre capa y capa de una pieza</b>, a menor distancia, mayor detalle podrá tener la impresión.'
      },
      axisPrecision: {
        title: 'Precisión en los ejes',
        icon: 'accuracy.svg',
        info: 'Es la exactitud con la que una impresora puede reproducir una pieza sobre los tres ejes.'
      },
      extrusorNumber: {
        title: 'Número de extrusores',
        icon: 'extrusorNumber.svg',
        info: 'Número de extrusores que tiene la impresora.'
      },
      extrusor: {
        title: 'Extrusor',
        icon: 'extrusorType.svg',
        info: 'Si es extrusor directo o bowden, modelo del extrusor o datos relevantes del mismo.'
      },
      filamentDiameter: {
        title: 'Diámetro de filamento',
        icon: 'filamentDiameter.svg',
        info: 'Es el <b>diametro que debe tener el filamento que se utilice para imprimir en la impresora</b>, se mide en mm normalmente suele ser de 1,75mm.'
      },
      nozzleDiameterList: {
        title: 'Diámetro del nozzle',
        icon: 'nozzlePrinterDiameter.svg',
        info: 'Es el <b>diametro que tiene la boquilla de la impresora</b>, se mide en mm y determina el grosor que va tener el hilo de filamento al salir por la boquilla, lo normal es que tenga 0,4mm.'
      },
      bedLevel: {
        title: 'Nivelación de la cama',
        icon: 'level.svg',
        info: 'Es posible que algunas impresoras tengan nivelación automática de la cama, en caso contrario deberá ser de forma manual.'
      },
      printerSpeed: {
        title: 'Velocidad de impresión',
        icon: 'printingSpeed.svg',
        info: 'Es la velocidad a la que puede imprimir una impresora 3D y se expresa en mm/s.'
      },
      extrusorTemperature: {
        title: 'Temperatura máxima del hotend',
        icon: 'extrusorTemp.svg',
        info: 'Máxima temperatura a la que se puede calentar el extrusor, esto es importante ya que <b>algunos materiales necesitan temperaturas muy altas para imprimirlos</b>.'
      },
      BedTemperature: {
        title: 'Temperatura máxima de la cama',
        icon: 'bedTemp.svg',
        info: 'Temperatura máxima que puede alcanzar la cama caliente, esto es importante ya que <b>algunos materiales necesitan que la cama esté a temperaturas muy altas para imprimirlos</b>.'
      },
      materials: {
        title: 'Materiales soportados',
        icon: 'supportMaterials.svg',
        info: 'Materiales con los que se puede imprimir en la impresora 3D.'
      },      
    }
  },
  software: {
    text: 'Software',
    data: {
      slicer: {
        title: 'Slicer',
        icon: 'slicer.svg',
        info: 'Software con el que se pueden ajustar los parámetros para adaptarlos a la impresión.'
      },
      inputFormat: {
        title: 'Formatos de entrada',
        icon: 'inputFormat.svg',
        info: 'Los tipos de formatos de entrada que admite la impresora.'
      },
      firmware: {
        title: 'Firmware',
        icon: 'outputFormat.svg',
        info: 'El firmware se asemejaría al sistema operativo que lleva la impresora en su placa.'
      },
      display: {
        title: 'Pantalla',
        icon: 'lcdDisplay.svg',
        info: 'Normalmente las impresoras incorporan una pantalla a través de la cual se lleva el control de la impresora.'
      },
      conectivity: {
        title: 'Conectividad',
        icon: 'conectivity.svg',
        info: 'El método con el que puede conectarse para importar los archivos a la impresora.'
      },
    }
  },
  unboxing: {
    text: 'Unboxing',
    data: {
      printerSize: {
        title: 'Tamaño de impresora',
        icon: 'machineDimensions.svg',
        info: 'Dimensiones de la impresora expresada en mm.'
      },
      printerWeight: {
        title: 'Peso de impresora',
        icon: 'machineWeight.svg',
        info: 'Peso de la impresora expresado en kg.'
      },
      unboxingSize: {
        title: 'Tamaño de la caja',
        icon: 'shippingDimensions.svg',
        info: 'Dimensiones del paquete expresado en mm.'
      },
      unboxingWeight: {
        title: 'Peso de la caja',
        icon: 'shippingWeight.svg',
        info: 'Peso del paquete expresado en kg.'
      },
    }
  },
  electricity: {
    text: 'Electricidad',
    data: {
      input: {
        title: 'Capacidad de entrada',
        icon: 'input.svg',
        info: 'Es la tensión que acepta la impresora, por lo general <b>suele estar en torno a los 100-240V de corriente alterna, y en torno a 50-60Hz de frecuencia</b>.'
      },
      voltage: {
        title: 'Voltaje',
        icon: 'output.svg',
        info: 'Es el voltaje que necesita la impresora para poder trabajar, se expresa en Voltios (V) y generalmente <b>suele estar en los 12V</b>.'
      },
    }
  },
  content: {
    text: 'Contenido',
    data: {
      content: {
        title: 'Contenido',
      }
    }
  }
}

const Tab = ({ properties, activeTab = 'feature' }) => {
  const data = Object.entries(matchKeyProperties[activeTab].data);

  const renderTechnologyTooltip = (technology) => {
    return technology === 'FDM' ? '<b>Impresora de resina:</b> es un tipo de impresión por el que <b>la pieza se va realizando capa a capa</b>. El material se va fundiendo a su paso por el extrusor de la impresora y va realizando la pieza.'
    : `<b>Impresora de resina:</b> la impresión 3D se realiza mediante resina líquida, gracias a una luz photónica que va solidificando el material capa a capa.`
  }

  return (
    <div className="p-2">
      {properties && data.map((item, key) => {
        return item[0] === 'content' ?
          <div>
            <HTMLContent className="flex flex-col w-full md:flex-row" content={properties.content} />
          </div>
        : 
        properties[item[0]] ? <div key={key} className={`leading-8 border-b flex items-center`}>
          {
            item[1].icon ?
              <img src={`/img/${item[1].icon}`} alt={item[1].title} className="w-6 mr-2" />
            : null
          }
            <b>{item[1].title}</b>: <span className="mr-2">{properties[item[0]]}</span>
            {item[1].info ?
              <Tooltip className="hidden md:block" content={item[0] === 'technology' ? renderTechnologyTooltip(properties[item[0]]) : item[1].info} title={item[1].title}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#94a3b8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Tooltip>
            : null}
          </div> : null
      })}
    </div>
  )
}

const FeatureTabs = ({ properties }) => {
  const initialSelected = properties['feature'] ? 'feature' : properties['software'] ? 'software' : properties['unboxing'] ? 'unboxing' : properties['electricity'] ? 'electricity' : properties['content'] ? 'content' : 'feature';
  const [activeTab, setActiveTab] = useState(initialSelected);

  const renderActiveTab = () => {
    return <Tab properties={properties[activeTab]} activeTab={activeTab} />;
  }

  return (
    <CustomSection backgroundColor="Oscuro" title="Características técnicas" sectionContent={properties.sectionContent} title={properties.title || 'Características técnicas'}>
      <div className="flex flex-col text-gray-600 bg-white rounded-md">
        <div className="flex flex-col md:flex-row md:justify-between">          
          {
            convertedKeyProperties(properties) && convertedKeyProperties(properties).filter(item => item !== 'sectionContent' && item !== 'title').length ?
              convertedKeyProperties(matchKeyProperties).map((item, key) => (
                properties[item] ?
                  <label key={key} htmlFor="url" className={`relative rounded-t-md flex-1 text-center ${activeTab === item ? 'border-b-4 border-primary-500 text-primary-500' : 'border-b'}`}>
                    <input type="radio" name="url" value={item} className={`absolute w-full h-full opacity-0 block hover:cursor-pointer`} checked={activeTab === item} onChange={e => setActiveTab(e.currentTarget.value)} />
                    <p className="p-2">{matchKeyProperties[item].text}</p>
                  </label>
                  : null
              ))
              : null
          }
        </div>
        {renderActiveTab()}
      </div>
    </CustomSection>
  )
}

export default FeatureTabs;