import React from 'react'
import CustomSection from '../../components/CustomSection'
import Layout from '../../components/Layout'
import PrinterRoll from '../../components/PrinterRoll'
import { products, printersTypes } from '../../utils/utils'
import SearcherCombo from '../../components/SearcherCombo'

const page = {
  metaTitle: 'Metatitle de la página',
  metaDescription: 'Metadescription de la página',
  featuredimage: '/img/longer-lk5-pro-0.png',
  title: 'Encuentra la impresora 3D que estás buscando',
  subtitle: 'Te ayudamos a encontrar la impresora 3D que necesitas.',
}

const PrinterPage = () => {
  const renderSearcherCombo = () => {
    typeof sessionStorage !== 'undefined' &&
      sessionStorage.setItem(
        'searcherCombo',
        JSON.stringify({
          sessionProduct: products[0],
          sessionPrinterType: printersTypes[0],
        })
      )
    return (
      <SearcherCombo useAsTitle title={page.title} subtitle={page.subtitle} />
    )
  }

  return (
    <Layout
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      featuredimage={page.featuredimage}
    >
      {renderSearcherCombo()}
      <CustomSection backgroundColor="Claro" showBorder={true}>
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          sustituir este título por algo referente a las impresoras
        </h2>
        <h3 className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">
          Crear un subtítulo para el título.
        </h3>
        <p className="my-2 text-center">
          Insertar aquí un texto de unas 200 o 300 palabras sobre la elección de
          impresoras en función de las review que hemos preparado al usuario
        </p>
        <PrinterRoll type="list" />
      </CustomSection>
    </Layout>
  )
}

export default PrinterPage
