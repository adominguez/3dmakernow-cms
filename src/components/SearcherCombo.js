import React, { useEffect, useState } from "react";
import { Link, withPrefix } from "gatsby";
import PropTypes from "prop-types";
import { products, printersTypes, filamentsTypes, filamentsColor, resinsColor, accesorios, postprocesados, printyText } from '../utils/utils'

const SearcherCombo = ({ useAsTitle, 
  title='Todo lo que buscas para imprimir en 3D está a tu alcance',
  subtitle='Encuentra lo que necesitas de una forma sencilla, fácil y rápida.'}) => {
  const { sessionProduct, sessionPrinterType, sessionFilamentColor, sessionFilamentType, sessionPostprocesado, sessionAccesorio, sessionResinColor } = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('searcherCombo') ? JSON.parse(sessionStorage.getItem('searcherCombo')) : {}
  const [product, setProduct] = useState(sessionProduct || products[0]);
  const [printerType, setPrinterType] = useState(sessionPrinterType || printersTypes[0]);
  const [filamentType, setFilamentType] = useState(sessionFilamentType || filamentsTypes[0]);
  const [filamentColor, setFilamentColor] = useState(sessionFilamentColor || filamentsColor[0]);
  const [resinColor, setResinColor] = useState(sessionResinColor || resinsColor[0]);
  const [accesorio, setAccesorio] = useState(sessionAccesorio || accesorios[0]);
  const [postprocesado, setPostprocesado] = useState(sessionPostprocesado || postprocesados[0]);

  useEffect(() => {
    if(product === products[0]) {
      sessionStorage.setItem('searcherCombo', JSON.stringify({
        sessionProduct: product,
        sessionPrinterType: printerType
      }));
    }
    if(product === products[1]) {
      sessionStorage.setItem('searcherCombo', JSON.stringify({
        sessionProduct: product,
        sessionFilamentType: filamentType,
        sessionFilamentColor: filamentColor
      }));
    }
    if(product === products[2]) {
      sessionStorage.setItem('searcherCombo', JSON.stringify({
        sessionProduct: product,
        sessionResinColor: resinColor
      }));
    }
    if(product === products[3]){
      sessionStorage.setItem('searcherCombo', JSON.stringify({
        sessionProduct: product,
        sessionAccesorio: accesorio
      }));
    }
    if(product === products[4]){
      sessionStorage.setItem('searcherCombo', JSON.stringify({
        sessionProduct: product,
        sessionPostprocesado: postprocesado
      }));
    }
  }, [product, printerType, filamentType, filamentColor, resinColor, accesorio, postprocesado]);

  const searcherForm = () => {
    return (
      <>
        <label htmlFor="product" className="block p-2 text-primary-500">¿Qué producto estás buscando?</label>
        <select className="p-2 text-white bg-transparent border border-white rounded-md" name="product" value={product} onChange={(event) => setProduct(event.currentTarget.value)}>
          {products.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </>
    )
  }

  const printerForm = () => {
    return (
      <>
        <label htmlFor="printer" className="block p-2 text-primary-500">¿Qué tipo de impresora 3D quieres?</label>
        <select className="p-2 text-white bg-transparent border border-white rounded-md" name="printer" value={printerType} onChange={(event) => setPrinterType(event.currentTarget.value)}>
          {printersTypes.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </>
    )
  }

  const filamentForm = () => {
    return (
      <>
        <label htmlFor="filament" className="block p-2 text-primary-500">¿Qué tipo de filamento estás buscando?</label>
        <select className="p-2 text-white bg-transparent border border-white rounded-md" name="filament" value={filamentType} onChange={(event) => setFilamentType(event.currentTarget.value)}>
          {filamentsTypes.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <label htmlFor="filament" className="block p-2 text-primary-500">¿Qué color quieres?</label>
        <select className="p-2 text-white bg-transparent border border-white rounded-md" name="filament" value={filamentColor} onChange={(event) => setFilamentColor(event.currentTarget.value)}>
          {filamentsColor.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </>
    )
  }

  const resinaForm = () => {
    return (
      <>
        <label htmlFor="resina" className="block p-2 text-primary-500">¿Qué color quieres?</label>
        <select className="p-2 text-white bg-transparent border border-white rounded-md" name="resina" value={resinColor} onChange={(event) => setResinColor(event.currentTarget.value)}>
          {resinsColor.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </>
    )
  }

  const accesoriosForm = () => {
    return (
      <>
        <label htmlFor="accesorios" className="block p-2 text-primary-500">¿Qué accesorios estás buscando?</label>
        <select className="p-2 text-white bg-transparent border border-white rounded-md" name="accesorios" value={accesorio} onChange={(event) => setAccesorio(event.currentTarget.value)}>
          {accesorios.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </>
    )
  }

  const postprocesadoForm = () => {
    return (
      <>
        <label htmlFor="postprocesado" className="block p-2 text-primary-500">¿Qué postprocesado estás buscando?</label>
        <select className="p-2 text-white bg-transparent border border-white rounded-md" name="postprocesado" value={postprocesado} onChange={(event) => setPostprocesado(event.currentTarget.value)}>
          {postprocesados.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </>
    )
  }

  const transformProduct = () => {
    if(product === 'Impresoras 3D') {
      return `impresoras 3D ${printerType}`;
    }
    if(product === 'Filamentos') {
      return `Filamento ${filamentType} ${filamentColor}`;
    }
    if(product === 'Resinas') {
      return `Resina 3D ${resinColor}`;
    }
    if(product === 'Accesorios y recambios') {
      return `${accesorio} para impresora 3D`;
    }
    if(product === 'Postprocesado') {
      if(postprocesado === 'Pinturas') {
        return `${postprocesado} para wargames`;
      } else if(postprocesado === 'Pegamento') {
        return `Pegamento para plástico`;
      } else if(postprocesado === 'Aerógrafos') {
        return `Aerógrafo para modelismo`;
      } else if(postprocesado === 'Destornilladores') {
        return `Destornilladores precisión`;
      } else {
        return postprocesado;
      }
    }
  }

  /**
   * Encoding a string to base64
   */
  const base64Encode = (str) => {
    return typeof btoa !== 'undefined' && btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    }));
  }

  const getUrl = () => {
    return `${withPrefix('/')}qp?s=${base64Encode(transformProduct().toLowerCase())}`;
  }

  return (
    <div id="searcherCombo" className="flex justify-center w-full bg-gradient-to-r from-secondary-300 via-secondary-600 to-secondary-900">
      <div className="flex flex-col justify-between w-full md:w-4/5 md:flex-row text-blueGray-300">
        <div className="flex justify-center flex-1">
          <div className="w-full p-2">
            {
              useAsTitle ?
                <>
                  <h1 className="block p-2 text-2xl text-center text-primary-500 md:text-3xl lg:text-4xl">
                    {title}
                  </h1>
                  <h2 className="block text-xl text-center font-extralight md:text-2xl lg:text-3xl">{subtitle}</h2>
                </>
              :
              <>
                <h2 className="block p-2 text-2xl text-center text-primary-500 md:text-3xl lg:text-4xl">
                  {title}
                </h2>
                <h3 className="block text-xl text-center font-extralight md:text-2xl lg:text-3xl">{subtitle}</h3>
              </>
            }
            <div className="flex flex-col p-2">
              {searcherForm()}
              {product === "Impresoras 3D" ? printerForm() : null}
              {product === "Filamentos" ? filamentForm() : null}
              {product === "Resinas" ? resinaForm() : null}
              {product === "Accesorios y recambios" ? accesoriosForm() : null}
              {product === "Postprocesado" ? postprocesadoForm() : null}
              <Link to={getUrl()} className="p-2 m-6 text-2xl text-center text-white rounded-md cursor-pointer bg-primary-500 hover:bg-primary-700 focus:bg-primary-700">Ver {product}</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col items-end justify-center flex-1 p-2">
            <div className="w-full p-2 text-xl text-center border rounded-xl">
              <p className="font-mono font-thin">{printyText[product].text}</p>
            </div>
            <img src={`img/${printyText[product].img}`} width="450" />
          </div>
        </div>
      </div>
    </div>
  )
}

SearcherCombo.propTypes = {
  opened: PropTypes.bool,
  onfocusInput: PropTypes.func,
  onCancelSearch: PropTypes.func,
}

export default SearcherCombo;