import React, { useLayoutEffect, useState }  from 'react';
import Layout from '../components/Layout';
import SearcherCombo from '../components/SearcherCombo';
import ProductsList from '../components/productsList';
import ErrorMessage from '../components/errorMessage';
import { errorMessages } from '../utils/utils';
import LoadingSpinner from '../components/LoadingSpinner';


const QuickProduct = () => {
  const {search} = window.location;
  const [productsList, setProductsList] = useState(undefined);
  const [searching, setSearching] = useState(false);
  const [searchingError, setSearchingError] = useState(false);
  
  useLayoutEffect(() => {
    setSearchingError(false);
    if(search && search.length && search.split('s=').length > 1) {
      try {
        scrollToProducts()
        setProductsList(undefined);
        setSearching(true);
        fetch('https://us-central1-automatic-web-dashboard-back.cloudfunctions.net/app/list-of-products-by-query/' + base64Decode(search.split('s=')[1]))
        .then(response => response.json())
        .then(data => {
          setProductsList(data);
        })
        .catch(error => {
          setSearchingError(true);
        })
        .finally(() => {
          scrollToProducts()
          setSearching(false);
        })
      } catch (error) {
        setSearching(false);
        setProductsList([]);
      }
    }
  }, [search]);

  const scrollToProducts = () => {
    const searcherCombo = document.querySelector('#searcherCombo');
    const main = document.querySelector('main');
    const top = searcherCombo.clientHeight;
    if(searcherCombo) {
      main.scroll({
        top,
        behavior: 'smooth'
      })
    }
  }

  // decode a base64 string
  const base64Decode = (str) => {
    return decodeURIComponent(atob(str).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  return (
    <Layout>
      <SearcherCombo />
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-between w-full md:w-4/5 md:flex-row text-blueGray-300">
          {
            searching ?
              <div className="flex items-center justify-center flex-1 p-4">
                <LoadingSpinner />
              </div>
            : null
          }
          {
            searchingError ?
              <ErrorMessage textError={!window.navigator.onLine ? errorMessages.noInternetConnection : errorMessages.searchProductError} />
            : null
          }
          {productsList ?
            productsList.length ?
            <div className="flex flex-col w-full">
              <ProductsList showToolbar productsList={productsList} />
            </div>
            : <ErrorMessage textError={errorMessages.noProducts} type="empty" />
          : null}
        </div>
      </div>
    </Layout>
  )
}


export default QuickProduct
