import React from 'react'
import Layout from '../components/Layout'
import SearcherCombo from '../components/SearcherCombo'
import CategoriesList from '../components/CategoriesList';

const initialCategories = [
  {
    name: 'Aprende impresión 3D desde cero',
    description: 'Piérdele el miedo a la impresión 3D y aprende todo lo que necesitas saber para empezar en este mundo y convertirte en un verdadero maker.',
    route: '/guia-inicio-impresion-3d',
    callToAction: 'Quiero ser Maker',
    image: 'guia-inicio-impresion-3d'
  },
  {
    name: '¿Qué impresora 3D comprar para empezar?',
    description: 'En esta guía encontrárás las mejores impresoras 3D que puedes comprar para empezar en la impresión 3D.',
    route: '/comprar-tu-primera-impresora-3d',
    callToAction: 'Quiero mi primera impresora 3D',
    image: 'primer-impresora-3d'
  },
]

const Home = () => {

  return (
    <Layout
    metatitle="Este es un título chulo para la página de inicio"
    metadescription="Esta es una descripción chula para la página de inicio">
    <SearcherCombo useAsTitle />
    <section id="searcherCombo" className="flex justify-center w-full p-4 border-b bg-blueGray-200 border-blueGray-300">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          La impresora 3D perfecta para cada Maker
        </h2>
        <h3 className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">Nos preocupamos por que cada persona pueda disfrutar de impresiones 3D únicas.</h3>
        <p className="my-2 text-center">Sabemos que la impresión 3D es un mundo bastante extenso, con muchas particularidades, por eso, <b>comprar una impresora 3D en muchas ocasiones no es una tarea nada sencilla</b>, no te preocupes, te acompañaremos de la mano para ayudarte a encontrar la impresora 3D que buscas en función de lo que necesites.</p>
        <p className="my-2 text-center">¿Y como vais a hacer eso? te preguntarás, muy sencillo, <b>hemos preparado para tí estas guías adaptadas con toda la información que necesitas en cada uno de los casos</b>, para que sepas bien en que aspectos debes fijarte en función del tipo de impresora que estés buscando, tamaño, calidad, precio... .</p>
      </div>
    </section>
    <section id="searcherCombo" className="flex justify-center w-full p-4">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          No se cómo ni por dónde empezar en la impresión 3D, ¡Estoy perdido 😖 !
        </h2>
        <h3 className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">Si nunca has realizado una impresión 3D y quieres comenzar, te enseñamos todo lo necesario para empezar.</h3>
        <CategoriesList categories={initialCategories} />
      </div>
    </section>
  </Layout>)
}

export default Home
