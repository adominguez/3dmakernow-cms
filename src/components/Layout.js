import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import CookieConsent from "react-cookie-consent";
import { itemsToSearch } from "../utils/searcher.js";
import { actualUrlpath, errorMessages, windowGlobal } from "../utils/utils.js";
import ErrorMessage from './ErrorMessage';
import logoMovil from '../img/logo-movil.svg'

const TemplateWrapper = ({ children, metaTitle, metaDescription, featuredimage }) => {
  const { onLine } = windowGlobal && windowGlobal?.navigator;
  const { title, description } = useSiteMetadata()
  const [layoutOpened, toggleLayout] = useState(false);
  const [searchOpened, toggleSearch] = useState(false);
  const [menuOpened, toggleMenu] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    setLocalStorage();

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      layoutClicked();
    }
  }

  const setLocalStorage = () => {
    const item = itemsToSearch.find(item => item.url === actualUrlpath());
    const cacheData = JSON.parse(localStorage.getItem('lastPageVisited')) || [];
    if (item && !cacheData.find(page => page.url === item.url)) {
      const cacheDataTransformed = cacheData.map(item => ({ ...item, active: false }));
      const sessionData = cacheDataTransformed.concat({ ...item, active: true });
      localStorage.setItem('lastPageVisited', JSON.stringify(sessionData));
    }
  }

  const menuClicked = () => {
    toggleMenu(!menuOpened);
    toggleLayout(!layoutOpened);
  }

  const layoutClicked = () => {
    toggleLayout(false);
    toggleMenu(false);
    toggleSearch(false);
  }

  const focusSearch = () => {
    toggleMenu(false);
    toggleLayout(true);
    toggleSearch(true);
  }

  const scrollLayout = (evt) => {
    const { scrollTop } = evt.currentTarget;
    if (scrollTop > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  return (
    <div className={`flex flex-col h-screen 'bg-backgroundSite`}>
      <Helmet>
        <html lang="es" />
        <title>{metaTitle || title}</title>
        <meta name="description" content={metaDescription || description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle || title} />
        <meta property="og:description" content={metaDescription || description} />
        <meta property="og:locale" content='es_ES' />
        <meta property="og:image" content={`${withPrefix('/')}${featuredimage}`}
        />
      </Helmet>
        <>
          {
            layoutOpened ?
              <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-screen bg-gray-900 bg-opacity-50" onClick={layoutClicked}></div> : ''
          }
          <Header toggleMenu={menuClicked} menuOpened={menuOpened} focusSearch={focusSearch} cancelSearch={layoutClicked} searchOpened={searchOpened} isScrolling={isScrolling} />
          <main className={`overflow-y-auto overflow-x-hidden flex-1`} onScroll={scrollLayout}>
            {children}
          </main>
          {
            typeof onLine !== 'undefined' && !onLine ?
              <div className="absolute bg-white border border-red-700 rounded-md max-w-max bottom-2 right-6">
                <ErrorMessage textError={errorMessages.noInternetConnection} />
              </div>
              : null
          }
          <CookieConsent
            enableDeclineButton
            buttonText="aceptar"
            declineButtonText="Rechazar"
            location="none"
            overlay
            style={{
              backgroundColor: '#49b2a1',
              width: '400px',
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              left: 'auto'
            }}
            cookieName="google-analytics">
            Doy mi consentimiento, pero cambiame los textos
          </CookieConsent>
        </>
    </div>
  )
}

export default TemplateWrapper