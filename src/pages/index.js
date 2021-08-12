import React from 'react'
import Layout from '../components/Layout'
import SearcherCombo from '../components/SearcherCombo'
import CategoriesList from '../components/CategoriesList';
import ReviewRoll from '../components/ReviewRoll'

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

const printersCategory = [
  {
    name: 'Impresoras 3D de gran formato',
    description: 'En esta guía encontrarás lo que necesitas para empezar a hacer impresiones 3D a lo grande.',
    route: '/impresoras-3d-gran-formato',
    callToAction: 'Quiero imprimir a lo grande',
    image: 'impresora-3d-gran-formato'
  },
  {
    name: 'Impresoras 3D profesionales',
    description: '¿Quieres montar un negocio de impresión 3D?, accede a esta guía de impresión 3D profesional.',
    route: '/impresoras-3d-profesionales',
    callToAction: 'Quiero ver impresoras profesionales',
    image: 'impresora-3d-profesional'
  },
  {
    name: 'Kit de impresoras 3D para montar',
    description: 'Si te gusta cacharrear con los cables esta es tu sección, en esta guía te enseñamos como funcionan.',
    route: '/impresoras-3d-profesionales',
    callToAction: 'Quiero montar mi impresora 3D',
    image: 'kit-impresora-3d'
  },
]

const resinCategory = [
  {
    name: 'Impresoras 3D de resina',
    description: '¿Quieres empezar a imprimir con resina? En esta guía te contamos todo lo necesario.',
    route: '/impresoras-3d-resina',
    callToAction: 'Quiero imprimir con resina',
    image: 'impresora-3d-resina'
  },
  {
    name: 'Resinas para impresora 3D',
    description: 'Encuentra aquí una guía con las mejores guías del mercado para hacer tus impresiones con resina.',
    route: '/resina-3d',
    callToAction: 'Quiero ver las resinas 3D',
    image: 'resinas-3d'
  }
]

const filamentCategory = [
  {
    name: 'Filamento PLA',
    description: 'Encuentra aquí el filamento PLA que buscas',
    route: 'filamento-pla',
    callToAction: 'Quiero imprimir con PLA',
    image: 'filamento-pla'
  },
  {
    name: 'Filamento PETG',
    description: 'Has probado el filamento PETG? Aquí te enseñamos en que consiste y cual comprar',
    route: '/filamento-petg',
    callToAction: 'Quiero imprimir con PETG',
    image: 'filamento-petg'
  },
  {
    name: 'Filamento TPU',
    description: '¿Quieres probar algo nuevo? Aquí te ofrecemos filamento TPU, descubre este filamento tan chulo',
    route: '/filamento-tpu',
    callToAction: 'Quiero imprimir con TPU',
    image: 'filamento-flexible'
  },
]

const Home = () => {
  return (
    <Layout
    metatitle="Este es un título chulo para la página de inicio"
    metadescription="Esta es una descripción chula para la página de inicio">
    <SearcherCombo useAsTitle />
    <section id="searcherCombo" className="flex justify-center w-full p-8 border-b bg-blueGray-200 border-blueGray-300">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          La impresora 3D perfecta para cada Maker
        </h2>
        <h3 className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">Nos preocupamos por que cada persona pueda disfrutar de impresiones 3D únicas.</h3>
        <p className="my-2 text-center">Sabemos que la impresión 3D es un mundo bastante extenso, con muchas particularidades, por eso, <b>comprar una impresora 3D en muchas ocasiones no es una tarea nada sencilla</b>, no te preocupes, te acompañaremos de la mano para ayudarte a encontrar la impresora 3D que buscas en función de lo que necesites.</p>
        <p className="my-2 text-center">¿Y como vais a hacer eso? te preguntarás, muy sencillo, <b>hemos preparado para tí estas guías adaptadas con toda la información que necesitas en cada uno de los casos</b>, para que sepas bien en que aspectos debes fijarte en función del tipo de impresora que estés buscando, tamaño, calidad, precio... .</p>
      </div>
    </section>
    <section className="flex justify-center w-full p-8">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          No se cómo ni por dónde empezar en la impresión 3D, ¡Estoy perdido 😖 !
        </h2>
        <p className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">Si nunca has realizado una impresión 3D y quieres comenzar, te enseñamos todo lo necesario para empezar.</p>
        <CategoriesList categories={initialCategories} color="orange" />
      </div>
    </section>
    <section className="flex justify-center w-full p-8">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          ¿Ya tienes experiencia en la impresión 3D y quieres dar un pasito más?
        </h2>
        <p className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">Aquí puedes encontrar unas guías que hemos elaborado para tí en función del tipo de impresora que estés buscando.</p>
        <CategoriesList categories={printersCategory} />
      </div>
    </section>
    <section className="flex justify-center w-full p-8">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          ¿No sabes que filamento necesitas?
        </h2>
        <p className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">No te preocupes, te ayudamos a que puedas elegir el tipo de filamento que necesitas.</p>
        <CategoriesList categories={filamentCategory} />
      </div>
    </section>
    <section className="flex justify-center w-full p-8">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">
          Te explicamos lo que necesitas para imprimir con resina
        </h2>
        <p className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">Si te gusta imprimir con resina, o no lo has probado todavía pero te gustaría, en este apartado encontrarás lo que necesitas.</p>
        <CategoriesList categories={resinCategory} />
      </div>
    </section>
    <section id="searcherCombo" className="flex justify-center w-full p-8 border-b bg-blueGray-200 border-blueGray-300">
      <div className="flex flex-col justify-between w-full md:w-4/5 text-blueGray-500">
        <h2 className="p-2 text-2xl font-light text-center md:font-extralight lg:text-3xl text-primary-500">Últimas reviews de impresoras 3D</h2>
        <p className="block text-xl text-center font-extralight md:font-thin lg:text-2xl text-blueGray-400">¿Quieres conocer más en profundidad alguna impresora? Aquí puedes ver las últimas reviews de impresoras</p>
        <ReviewRoll maxProducts={8} />
      </div>
    </section>
  </Layout>)
}

export default Home
