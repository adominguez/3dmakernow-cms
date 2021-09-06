import React, { useState, useEffect } from 'react';
import CMS from 'netlify-cms-app';
import { wrapper } from './styles.js';
import { Helmet } from 'react-helmet'

export const CompareProductsControl = (props) => {
  const { onChange } = props;
  const { compareProducts } = props.entry.getIn(['data']).toJS().comparation || {}
  const widgets = CMS.getWidgets('input');
  const [properties, setProperties] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProperty, setNewProperty] = useState('');
  const [product, setProduct] = useState(null);
  const [productState, setProductState] = useState('create');
  const [view, setView] = useState('properties');
  const InputWidget = widgets.find(item => item.name === 'string').control;  

  useEffect(() => {
    if (compareProducts) {
      if(compareProducts.properties && compareProducts?.properties?.length !== properties?.length) {
        setProperties(compareProducts.properties);
      }
      if(compareProducts.products && compareProducts?.products?.length !== products?.length) {
        const newProducts = compareProducts.products.map(({propertiesValues, ...rest}) => {
          const comparation = {};
          compareProducts.properties.forEach((item, index) => {
            comparation[item] = propertiesValues[index];
          });
          return {
            ...rest,
            ...comparation
          }
        });
        setProducts(newProducts);
        change({newProperties: compareProducts.properties, newProducts})
      }
    }
  }, []);

  const change = ({ newProperties, newProducts }) => {
    const convertedProducts = newProducts || products;
    
    onChange({
      products: convertedProducts && convertedProducts.length && convertedProducts.map(product => {
        const { name, image, link, id, ...rest } = product;
        return { id, name, image, link, propertiesValues: Object.values(rest)};
      }),
      properties: newProperties || properties,
    });
  }

  const addNewProperty = () => {
    const newProperties = [...properties, newProperty];
    setProperties(newProperties);
    setNewProperty('');
    change({ newProperties });
  }

  const saveProduct = () => {
    let newProducts = [];
    if(productState === 'create') {
      newProducts = [...products, {...product, id: products.length}];
    } else {
      newProducts = products.map(item => {
        if(item.id === product.id) {
          return product;
        }
        return item;
      });
    }
    setProducts(newProducts);
    setProduct(null);
    change({ newProducts });
    setProductState('create');
  }

  const removeProperty = (index) => {
    const newProperties = [...properties];
    newProperties.splice(index, 1);
    setProperties(newProperties);
    change({ newProperties });
  }

  const removeProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    change({ newProducts });
  }

  const editProduct = (index) => {
    setProduct(products[index]);
    setProductState('edit');
  }

  const hasProperties = () => {
    return properties.length > 0;
  }

  const renderProperties = () => (
    <div style={wrapper}>
      <div className="flex items-end my-2">
        <label>
          Añade una nueva propiedad a comparar
          <InputWidget forID="key" name="key" value={newProperty} onChange={value => setNewProperty(value)} classNameWrapper="css-83wr9v" />
        </label>
        <button className={`p-2 bg-blueGray-600 text-white rounded-md my-2 mx-4`} onClick={() => addNewProperty()} >Añadir propiedad a comparar</button>
      </div>
      {properties && properties.length ?
        <ul>
          {properties.map((item, index) => (
            <li key={index} className={`flex justify-between border-b`}>
              <div className="flex items-center px-2 text-blueGray-500">{item}</div>
              <button className={`p-2 bg-white text-red-500 rounded-md my-3 mx-4`} onClick={() => removeProperty(index)} >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </li>
          ))}
        </ul>
        : <div className="flex text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Todavía no hay ninguna propiedad, comienza creando una nueva propiedad</div>
      }
      <div className="flex justify-end">
        <button className={`${!hasProperties() ? 'opacity-50' : ''} p-2 border-blueGray-600 border text-blueGray-600 rounded-md my-2 mx-4`} disabled={!hasProperties()} onClick={() => setView('products')}>Configurar productos</button>
      </div>
    </div>
  )

  const setProductKey = (key, value) => {
    setProduct({
      ...product,
      [key]: value
    })
  }

  const cancelProduct = () => {
    setProduct(null);
    setProductState('create');
  }

  const isProductValidated = () => {
    const validateProperties = properties.map(item => {
      return product[item] !== undefined && product[item] !== '';
    })
    return product && product.name && product.image && !validateProperties.includes(false);
  }

  const renderProducts = () => (
    <div style={wrapper}>
      {
        product ?
          <>
            <label>
              Nombre del producto
              <InputWidget forID="name" name="name" value={product["name"]} onChange={value => setProductKey('name', value)} classNameWrapper="css-83wr9v" />
            </label>
            <label>
              url imagen del producto
              <InputWidget forID="image" name="image" value={product["image"]} onChange={value => setProductKey('image', value)} classNameWrapper="css-83wr9v" />
            </label>
            <label>
              Link de compra
              <InputWidget forID="image" name="link" value={product["link"]} onChange={value => setProductKey('link', value)} classNameWrapper="css-83wr9v" />
            </label>
            {
              properties && properties.length && properties.map((item, index) => (
                <label key={index}>
                  {item}
                  <InputWidget forID={item} name={item} value={product[item]} onChange={value => setProductKey(item, value)} classNameWrapper="css-83wr9v" />
                </label>
              ))
            }
            <div className="flex justify-end">
              <button className={`p-2 border border-blueGray-600 text-blueGray-600 rounded-md my-2 mx-4`} onClick={cancelProduct}>Cancelar</button>
              <button disabled={!isProductValidated()} className={`p-2 bg-blueGray-600 text-white rounded-md my-2 mx-4 ${!isProductValidated() ? 'opacity-50' : ''}`} onClick={() => saveProduct()}>Guardar</button>
            </div>
          </>
          : <>
            <div className="flex justify-end">
              <button className={`p-2 bg-blueGray-600 text-white rounded-md my-2 mx-4`} onClick={() => setProduct({})} >Añade producto a comparar</button>
            </div>
            {products && products.length ?
              <ul>
                {products.map((item, index) => (
                  <li key={index} className={`flex justify-between border-b`}>
                    <div className="flex items-center px-2 text-blueGray-500">{item.name}</div>
                    <div>
                      <button className={`p-2 bg-white text-blue-400 rounded-md my-3 mx-4`} onClick={() => editProduct(index)} >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </button>
                      <button className={`p-2 bg-white text-red-500 rounded-md my-3 mx-4`} onClick={() => removeProduct(index)} >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              : <div className="flex text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Todavía no hay ningún producto, crea un nuevo producto para comparar</div>
            }
          </>
      }
      <div className="flex">
        <button className={`p-2 border-blueGray-600 border text-blueGray-600 rounded-md my-2 mx-4`} onClick={() => setView('properties')}>Configurar propiedades</button>
      </div>
    </div>
  )

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/admin/cms.css" />
      </Helmet>
      {
        view === 'properties' ?
          renderProperties()
          : renderProducts()
      }
    </>
  )
}