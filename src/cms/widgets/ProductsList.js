import React, { useState, useEffect } from 'react';
import CMS from 'netlify-cms-app';
import SearcherProductsList from '../../components/SearcherProductsList';
import { wrapper } from './styles.js';
import { Helmet } from 'react-helmet'

export const ProductsListControl = (props) => {
  const { onChange } = props;
  const widgets = CMS.getWidgets('input');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [productsSelected, setProductsSelected] = useState([]);
  const [productsList, setProductsList] = useState(undefined);
  const [type, setType] = useState('grid');
  const InputWidget = widgets.find(item => item.name === 'string').control;

  useEffect(() => {
    const productsListValue = props?.value?.get('productsList');
    const products = productsListValue && JSON.parse(`[${productsListValue._tail.array.toString().replaceAll('Map ', '')}]`);
    if(products?.length) {
      setProductsList(products);
      setProductsSelected(products);
    }
    if(props?.value?.get('type')) {
      changeType(props?.value?.get('type'));
    }
    setChange({
      parsedType: props?.value?.get('type') || type,
      parsedProducts: products || productsList
    })
  }, [])

  const setChange = ({ parsedType, parsedProducts }) => {
    onChange({
      type: parsedType || type,
      productsList: (parsedProducts?.length && parsedProducts) || (productsSelected?.length && productsSelected) || (productsList?.length && productsList),
    });
  }

  const addProducts = (parsedProducts) => {
    setProductsSelected(parsedProducts);
    setChange({ parsedProducts });
  }

  const changeType = (parsedType) => {
    setType(parsedType)
    setChange({ parsedType });
  }

  const getAmazonInformation = async () => {
    const url = `https://us-central1-automatic-web-dashboard-back.cloudfunctions.net/app/list-of-products-by-query/${keyword}`
    setLoading(true);
    setError(false);
    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        setProductsList(data);
        !productsSelected?.length && setChange({ parsedProducts: data });
      })
      .catch(error => {
        setError(true);
      }).finally(() => {
        setLoading(false);
      });
  }

  const isTypeSelected = (value) => {
    return type === value;
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/admin/cms.css" />
      </Helmet>
      <div style={wrapper}>
        <div className="flex">
          <label htmlFor="type" className={`relative p-1 m-2 flex items-center border border-blueGray-300 rounded-md ${isTypeSelected('grid') ? 'bg-white' : 'bg-blueGray-200 opacity-50'}`}>
            <input type="radio" name="type" value="grid" className="absolute w-full h-full opacity-0 hover:cursor-pointer" checked={isTypeSelected('grid')} onChange={() => changeType('grid')} />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Grid
          </label>
          <label htmlFor="type" className={`relative p-1 m-2 flex items-center border border-blueGray-300 rounded-md ${isTypeSelected('carousel') ? 'bg-white' : 'bg-blueGray-200 opacity-50'}`}>
            <input type="radio" name="type" value="carousel" className="absolute w-full h-full opacity-0 hover:cursor-pointer" checked={isTypeSelected('carousel')} onChange={() => changeType('carousel')} />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
            Carrusel
          </label>
          <label htmlFor="type" className={`relative p-1 m-2 flex items-center border border-blueGray-300 rounded-md ${isTypeSelected('list') ? 'bg-white' : 'bg-blueGray-200 opacity-50'}`}>
            <input type="radio" name="type" value="list" className="absolute w-full h-full opacity-0 hover:cursor-pointer" checked={isTypeSelected('list')} onChange={() => changeType('list')} />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            Listado
          </label>
        </div>
        <div>
          <label>
            Buscar productos por palabra clave
            <InputWidget forID="key" name="key" value={keyword} onChange={(value) => setKeyword(value)} classNameWrapper="css-83wr9v" />
            <button className={`p-2 bg-blueGray-600 text-white rounded-md my-2 ${!keyword ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!keyword} onClick={() => getAmazonInformation()} >Ver productos</button>
          </label>
        </div>
        <SearcherProductsList error={error} loadingProducts={loading} products={productsList} productsSelected={productsSelected} setProductsSelected={(products) => addProducts(products)} />
      </div>
    </>
  )
}