import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { itemsToSearch } from "../utils/searcher.js";
import { actualUrlpath } from "../utils/utils.js";

const SearchInput = ({onfocusInput, onCancelSearch, opened}) => {
  const [keyword, setKeyword] = useState([]);
  const [showFilteredList, setShowFilteredList] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [focused, focusInput] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const escFunction = (event) => {
    if(event.keyCode === 27) {
      const search = document.querySelector('#search');
      search.blur();
      focusInput(false)
    }
  }

  const setFocus = () => {
    const search = document.querySelector('#search');
    search.focus();
    onfocusInput();
    focusInput(true)
  }

  const resetKeyword = () => {
    setKeyword('');
    setFocus();
  }

  const filterByKeyword = (event) => {
    const { currentTarget: {value}, keyCode } = event;
    const filteredResults = itemsToSearch.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setKeyword(value);
    setShowFilteredList(true);
    setFilteredResults(filteredResults);
    if(keyCode === 40 && filteredResults.length && keyword.length) {
      const nextSibling = event.currentTarget.parentElement.parentElement.nextElementSibling.children[0].children[0].children[0];
      nextSibling.focus();
    }
  }

  const arrowPressKey = (event) => {
    const {keyCode} = event;
    if(keyCode === 40) {
      const nextSibling = event.currentTarget.parentElement.nextElementSibling;
      nextSibling && nextSibling.children.length && nextSibling.children[0].focus()
    }
    if(keyCode === 38) {
      const prevSibling = event.currentTarget.parentElement.previousElementSibling;
      prevSibling && prevSibling.children.length ? prevSibling.children[0].focus() : setFocus();
    }
  }

  const renderListItem = (item, index) => {
    return (
      <li key={index} className={`${index !== 0 ? 'border-t-2' : '' } border-gray-200 border-solid`}>
        <Link onKeyUp={arrowPressKey} to={`/${item.url}`} className="flex p-3 hover:bg-gray-200 focus:bg-gray-200">
          {item.name}
        </Link>
      </li>
    )
  }

  const setLastPagesVisited = () => {
    const local = localStorage.getItem('lastPageVisited');
    const lastPages = local ? JSON.parse(local).filter(item => item.url !== actualUrlpath()).reverse().slice(0, 5) : [];
    return <>
      {
        lastPages.length ? 
          <>
            <h3 className="text-xl text-primary-500">Ultimas páginas que has visto</h3>
            <ul className="my-2">
              {
                lastPages.map((item, index) => (
                  renderListItem(item, index)
                ))
              }
            </ul>
          </> : ''
      }
    </>
  }

  return (
    <div className={`top-0 w-full py-5 px-1 md:p-4 ${opened ? 'md:absolute rounded-t-none fixed left-0 bg-white md:rounded-lg z-20' : 'absolute'}`} >
      <div className={`relative flex w-full h-10 rounded-3xl border-transparent border-2 hover:bg-gray-200 ${opened ? 'bg-gray-200 border-primary-500 border-2' : ''}`}>
        <div className="flex items-center w-6 h-full mx-2">
          {
            keyword.length ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#49b2a1" onClick={resetKeyword}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#222" onClick={setFocus}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
        </div>
        <label htmlFor="search" className="w-full mr-3">
        <input id="search" value={keyword} name="search" onFocus={setFocus} onKeyUp={filterByKeyword} onChange={filterByKeyword} placeholder="Buscar en el sitio..." autoComplete="off" className={`w-full py-2 text-sm bg-transparent focus:outline-none`}/>
        </label>
        {
          opened ? 
            <div className="flex items-center w-6 h-full mx-4">
              <button onClick={() => onCancelSearch()} className="text-gray-300">
                ESC
              </button>
            </div>
          : ''
        }
      </div>
      {
        opened ?
          <div className={`flex flex-col w-full mt-2 overflow-y-auto bg-white rounded-b-md max-h-80`}>
            {
              keyword.length ?
                <>
                  <ul>
                    {filteredResults.map((item, index) => (
                      renderListItem(item, index)
                    ))}
                  </ul>
                </>
              :
                <>
                  <h3 className="text-xl text-primary-500">Te sugerimos esto</h3>
                  <ul className="my-2">
                    {
                      renderListItem({name: 'sugerencia', url: 'sugerencia'}, 0)
                    }
                  </ul>
                  {
                    setLastPagesVisited()
                  }
                </>
            }
            {
              keyword.length ?
                <div className="flex-1 p-3 text-center text-gray-400">
                  No hay resultados para esta consulta
                </div> : ''
            }
          </div>
        : null
      }
    </div>
  )
}

SearchInput.propTypes = {
  opened: PropTypes.bool,
  onfocusInput: PropTypes.func,
  onCancelSearch: PropTypes.func,
}

export default SearchInput;