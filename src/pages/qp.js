import React, { useLayoutEffect, useState }  from 'react';
import Layout from '../components/Layout';
import SearcherCombo from '../components/SearcherCombo';
import ProductsList from '../components/productsList';
import { orderProducts } from '../utils/utils';


const QuickProduct = () => {
  const {search} = window.location;
  const [productsList, setProductsList] = useState(undefined);
  const [searching, setSearching] = useState(false);
  const [searchingError, setSearchingError] = useState(false);
  const [type, setType] = useState('list');
  const [order, setOrder] = useState('Por relevancia');
  
  useLayoutEffect(() => {
    if(search && search.length && search.split('s=').length > 1) {
      try {
        setProductsList(undefined);
        setSearching(true);
        fetch('https://us-central1-automatic-web-dashboard-back.cloudfunctions.net/app/list-of-products-by-query/' + base64Decode(search.split('s=')[1]))
        .then(response => response.json())
        .then(data => {
          setSearchingError(false);
          setProductsList(data.map((item, index) => ({
            ...item,
            order: index + 1
          })));
          setSearching(false);
        })
        .catch(error => {
          setSearchingError(true);
        })
        .finally(() => {
          const searcherCombo = document.querySelector('#searcherCombo');
          const main = document.querySelector('main');
          const top = searcherCombo.clientHeight;
          main.scroll({
            top,
            behavior: 'smooth'
          })
        })
      } catch (error) {
        setSearchingError(false);
        setSearching(false);
        setProductsList([]);
      }
    }
  }, [search])

  // decode a base64 string
  const base64Decode = (str) => {
    return decodeURIComponent(atob(str).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  const parseNumber = (str) => {
    const number = str.replace(' €', '').replace(',', '.')
    if(number.indexOf('.') > -1) {
      return parseFloat(number);
    } else {
      return parseInt(number);
    }
  }

  const productsListOrdered = () => {
    if(order === 'Por relevancia') {
      return productsList.sort((a, b) => {
        return a.order - b.order;
      });
    }
    if(order.includes('caros')) {
      return productsList.sort((a, b) => {
        return parseNumber(b.Price) - parseNumber(a.Price);
      });
    }
    if(order.includes('baratos')) {
      return productsList.sort((a, b) => {
        return parseNumber(a.Price) - parseNumber(b.Price);
      });
    }
    if(order.includes('vendidos')) {
      return productsList.sort((a, b) => {
        return parseNumber(b.TotalReviews) - parseNumber(a.TotalReviews);
      });
    }
  }

  return (
    <Layout>
      <SearcherCombo />
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-between w-full md:w-4/5 md:flex-row text-blueGray-300">
          {
            searching ?
              <div>Loading</div>
            : null
          }
          {
            searchingError ?
              <div>Error</div>
            : null
          }
          {productsList ?
            productsList.length ?
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-end p-2 px-4 my-2 border-b-2">
                <div className="flex-1">
                  <button className={`${type === 'grid' ? 'bg-primary-500 text-white' : null} border mx-2 text-blueGray-600 p-2`} onClick={() => setType('grid')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={type === 'grid' ? '#fff' : '#49b2a1'}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className={`${type === 'list' ? ' bg-primary-500 text-white' : null} border mx-2 text-blueGray-600 p-2`} onClick={() => setType('list')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"  stroke={type === 'list' ? '#fff' : '#49b2a1'}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <div>
                  <label htmlFor="order" className="block text-primary-500">Ordenar por</label>
                  <select className="p-2 bg-transparent border rounded-md text-blueGray-500 border-blueGray-500" name="order" value={order} onChange={(event) => setOrder(event.currentTarget.value)}>
                    {orderProducts.map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <ProductsList type={type} productsList={productsListOrdered()} />
            </div>
            : <div>No hay datos</div>
          : null}
        </div>
      </div>
    </Layout>
  )
}


export default QuickProduct
