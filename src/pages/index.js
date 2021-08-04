import React from 'react'
import Layout from '../components/Layout'
import SearcherCombo from '../components/SearcherCombo'

const Home = () => (
  <Layout
    metatitle="Este es un título chulo para la página de inicio"
    metadescription="Esta es una descripción chula para la página de inicio">
    <SearcherCombo useAsTitle />

  </Layout>
)

export default Home
