import React, { useState } from 'react';
import CountCharacters from './CountCharacters';
import { wrapper } from './styles.js';
import { Helmet } from 'react-helmet'

export const SeoPageControl = (props) => {
  const { onChange } = props;
  const [ value, setValue ] = useState({
    name: '',
    title: '',
    description: ''
  })

  const generateTitle = () => {
    setValue({
      ...value,
      title: 'Holi, esto es un título'
    });
  }

  const generateDescription = () => {
    setValue({
      ...value,
      description: 'Holi, esto es una descripción'
    });
  }

  const changeInput = (evt) => {
    const target = evt.currentTarget;
    const input = target.getAttribute('name');
    const newValue = {
      ...value,
      [input]: target.value
    }
    setValue(newValue);
    onChange(newValue)
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/admin/cms.css" />
      </Helmet>
      <div style={wrapper}>
        <div className="flex justify-end">
          <button disabled={!value.name} className={`p-2 mx-1 border rounded-md hover:bg-blueGray-600 hover:text-white focus:bg-blueGray-600 focus:text-white ${!value.name  ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => generateTitle()}>Generar Título</button>
          <button disabled={!value.name} className={`p-2 mx-1 border rounded-md hover:bg-blueGray-600 hover:text-white focus:bg-blueGray-600 focus:text-white ${!value.name  ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => generateDescription()}>Generar Descripción</button>
        </div>
        <label>
          Nombre de la página
          <input name="name" type="text" className="css-83wr9v focus:border-blue-600" value={value.name} onChange={changeInput} />
        </label>
        <label>
          Título de la página
          <input name="title" type="text" className="css-83wr9v" value={value.title} onChange={changeInput} />
          <CountCharacters phrase={value.title} maxLength={70} />
        </label>
        <label>
          Descripción de la página
          <textarea name="description" value={value.description} className="css-wesa1q-TextControl" onChange={changeInput} />
          <CountCharacters phrase={value.description} maxLength={150} />
        </label>
      </div>
    </>
  )
}