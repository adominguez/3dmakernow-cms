export const windowGlobal = typeof window !== 'undefined' && window

export const actualUrlpath = () => {
  return windowGlobal?.location?.pathname.replace(/\//g, '')
}

export const capitalize = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : null
}

export const replaceImgUrl = (url) => {
  return url && url.replace('/static', '')
}

export const splitStaticUrl = (url) => {
  return url && url.split('/static')[1]
}

export const isOdd = (num) => num % 2

export const imageCarouselSettings = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const sliderSettings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const convertedKeyProperties = (object) => Object.keys(object || {})

export const printyText = {
  'Impresoras 3D': {
    text: 'Aquí verás una selección de las mejores impresoras 3D que puedes encontrar hoy en día en función de lo que necesites.',
    img: 'printy-qp.png',
  },
  Filamentos: {
    text: '¿Qué tipo de filamento estás buscando? Selecciona el color que más te guste y encuentra el filamento que buscas.',
    img: 'printy-qp-filamento.png',
  },
  Resinas: {
    text: '¿Tienes una impresora de resina? Selecciona un color y encuentra la que más se ajuste a tus necesidades.',
    img: 'printy-qp-resins.png',
  },
  'Accesorios y recambios': {
    text: '¿Estás teniendo problemas con tu impresora o quieres mejorarla? Aquí podrás encontrar los accesorios y recambios más buscados.',
    img: 'printy-qp-accesorios.png',
  },
  Postprocesado: {
    text: '¿Ya has realizado tu impresión pero no ha quedado como pensabas? Aquí puedes ver materiales y herramientas para mejorar tus piezas.',
    img: 'printy-qp-postprocesado.png',
  },
}

export const products = [
  'Impresoras 3D',
  'Filamentos',
  'Resinas',
  'Accesorios y recambios',
  'Postprocesado',
]

export const printersTypes = [
  'Baratas',
  'De resina',
  'De gran formato',
  'De doble extrusor',
  'Profesionales',
]

export const filamentsTypes = ['PLA', 'PETG', 'ABS', 'TPU', 'Flexible']

export const filamentsColor = [
  'Blanco',
  'Negro',
  'Gris',
  'Verde',
  'Rojo',
  'Azul',
  'Amarillo',
  'Morado',
  'Naranja',
  'Transparente',
  'Oro',
  'Plata',
  'Cobre',
  'multicolor',
  'madera',
]

export const resinsColor = [
  'Blanca',
  'Negra',
  'Gris',
  'Verde',
  'Roja',
  'Azul',
  'Amarilla',
  'Morada',
  'Naranja',
  'Transparente',
]

export const accesorios = [
  'Boquillas',
  'tubo ptef',
  'Hotend',
  'Extrusor',
  'Placa base',
  'Fuente de alimentación',
  'Fleje magnético',
  'Ventilador',
  'Pantalla',
  'Sensor de nivelación',
  'Fijador',
  'Kit de herramientas',
]

export const postprocesados = [
  'Pinturas',
  'Destornilladores',
  'Pegamento',
  'Aerógrafos',
  'Calibre',
]

export const orderProducts = [
  'Por relevancia',
  'Precio más baratos primero',
  'Precio más caros primero',
  'Más vendidos',
]

export const errorMessages = {
  errorTitle: 'Uppps, algo no funciona bien',
  noResults: 'No se han encontrado resultados',
  noInternetConnection: 'No hay conexión a Internet',
  noProducts:
    'No hay productos para mostrar para los parámetros seleccionados, cambia los parámetros y vuelve a intentarlo de nuevo',
  searchProductError:
    'No se pudo conectar con la web. Por favor, recarga la página de nuevo o trata de realizar una nueva búsqueda.',
}
