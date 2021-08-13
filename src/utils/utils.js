export const windowGlobal = typeof window !== 'undefined' && window;

export const actualUrlpath = () => {
    return windowGlobal?.location?.pathname.replace(/\//g, '');
}

export const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const iconPrinter = `<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51"><circle cx="35.352" cy="25.132" r=".571"/><path d="M28.742 26.805c.709 0 1.286-.577 1.286-1.286s-.577-1.286-1.286-1.286c-.707 0-1.285.577-1.285 1.286.001.71.578 1.286 1.285 1.286zm0-2.139a.854.854 0 110 1.708.854.854 0 010-1.708z"/><path d="M45.893 2.184L16.8.001a.685.685 0 00-.668.394L4.943 4.125a.686.686 0 00-.466.647v38.909a.68.68 0 00.352.596l11.283 6.269a.672.672 0 00.714.45l29.091-3.272a.682.682 0 00.605-.678V2.864a.679.679 0 00-.629-.68zM15.932 48.887l-10.09-5.605V5.265L15.932 1.9v46.987zm29.226-2.451L17.43 49.555V1.417l27.728 2.08v42.939z"/><path d="M22.028 38.277c.016 0 .033 0 .049-.002l19.07-1.361a1.23 1.23 0 001.199-1.228V10.231a1.23 1.23 0 00-1.199-1.227l-19.07-1.362a1.228 1.228 0 00-1.276 1.225V37.05a1.23 1.23 0 001.227 1.227zm9.618-23.818a2.695 2.695 0 001.248-2.692l2.315.1a.544.544 0 00.545-.545V9.986l5.229.374v25.198l-17.084 1.22v-6.237l15.322-.537v5.523h.545v-6.089l-10.396.365a.93.93 0 00.17-.281l.215-.607.584.277a.922.922 0 00.945-.109c.275-.217.531-.473.764-.759a.909.909 0 00.113-.956l-.277-.582.256-.092c.033.092.082.18.146.26.148.187.321.358.514.514a.924.924 0 00.945.113.902.902 0 00.799.594l.295.016.334-.016a.901.901 0 00.8-.593.911.911 0 00.942-.112c.188-.149.36-.321.518-.515a.906.906 0 00.115-.948.914.914 0 00.594-.804l.016-.323-.016-.306a.905.905 0 00-.596-.793.902.902 0 00-.113-.945 3.213 3.213 0 00-.518-.518.927.927 0 00-.941-.112.9.9 0 00-.803-.592l-.326-.017-.297.017a.9.9 0 00-.803.593.91.91 0 00-.648-.033c-.243-.204-.658-.401-1.143-.628-.568-.269-1.521-.719-1.627-1.029-.029-.083-.057-.196-.018-.256.146-.224.928-.283 1.396-.318.441-.034.824-.063 1.062-.178 1.003-.43 1.189-.979 1.171-1.366-.03-.602-.612-1.151-1.513-1.434-.215-.072-.448-.125-.68-.178-.863-.196-1.213-.332-1.193-.879.327-.301.811-.817 1.094-1.449zm-6.919 11.715a.23.23 0 01-.155-.207l-.024-.436.024-.461a.233.233 0 01.155-.207l1.31-.465-.598-1.255a.234.234 0 01.029-.246c.2-.247.42-.466.656-.653a.232.232 0 01.245-.028l1.252.595.465-1.31a.23.23 0 01.205-.154l.438-.025.465.025a.23.23 0 01.207.154l.466 1.31 1.252-.597a.23.23 0 01.246.029c.238.192.459.413.652.655a.228.228 0 01.027.245l-.594 1.252 1.291.459a.226.226 0 01.153-.206l.694-.247-.317-.665a.24.24 0 01.028-.247 2.83 2.83 0 01.41-.409.236.236 0 01.246-.027l.662.315.248-.695a.229.229 0 01.205-.154l.266-.015.291.015a.227.227 0 01.205.154l.246.694.664-.316a.232.232 0 01.246.029c.149.12.287.258.408.41a.23.23 0 01.027.246l-.314.663.695.248a.237.237 0 01.154.207l.015.264-.015.289a.237.237 0 01-.154.207l-.694.248.315.664a.233.233 0 01-.028.246c-.124.153-.262.29-.411.409a.234.234 0 01-.244.028l-.664-.315-.246.695a.233.233 0 01-.205.154l-.266.015h-.028l-.264-.015a.23.23 0 01-.205-.154l-.246-.695-.666.315a.234.234 0 01-.244-.028 2.643 2.643 0 01-.41-.409.234.234 0 01-.028-.245l.315-.666-.656-.233-.02.34a.23.23 0 01-.154.207l-1.309.467.598 1.253a.236.236 0 01-.029.246 4.132 4.132 0 01-.656.653.235.235 0 01-.244.028l-1.252-.596-.466 1.311a.232.232 0 01-.207.154l-.438.024h-.028l-.436-.024a.227.227 0 01-.205-.154l-.467-1.311-1.254.596a.238.238 0 01-.246-.029 4.194 4.194 0 01-.652-.653.234.234 0 01-.029-.246l.596-1.254-1.304-.466zm7.443-2.392c-.041.015-.08.033-.119.053l-.168-.06.203-.43a.922.922 0 00.084.437zm.026-1.258c.097.05.183.097.257.142-.057.059-.117.104-.17.169-.016.018-.027.036-.041.055a.912.912 0 00-.046-.366zM22.166 9.017l3.045.218v1.68c0 .301.244.545.545.545l1.838.079c-.049.201-.076.41-.076.625a2.7 2.7 0 001.281 2.296c.256.574.678 1.047.996 1.354-.069 1.292 1.023 1.558 1.779 1.729.206.047.414.093.612.16.627.196.966.518.978.734.01.189-.26.424-.718.62-.12.059-.497.087-.801.11-.765.058-1.63.123-1.985.667-.117.18-.225.488-.068.934.087.254.299.477.574.682l-.41.196-.215-.605a.903.903 0 00-.806-.602l-.501-.027-.474.027a.901.901 0 00-.802.6l-.216.609-.581-.276a.924.924 0 00-.949.108 4.917 4.917 0 00-.759.754.91.91 0 00-.116.96l.278.582-.609.216a.906.906 0 00-.601.805l-.025.498.025.472a.899.899 0 00.601.801l.61.217-.277.586a.898.898 0 00.111.949c.222.277.477.533.757.759a.92.92 0 00.954.111l.584-.276.216.605c.05.144.14.262.246.359l-3.854.135v.021l-1.188.134V9.017zm0 21.701l1.188-.134v6.233l-1.188.085v-6.184zM8.28 36.706l4.818 1.739a.675.675 0 00.232.041c.676 0 1.227-.55 1.227-1.227V9.078A1.23 1.23 0 0013.33 7.85a.666.666 0 00-.133.013l-4.855.957a1.228 1.228 0 00-1.148 1.225v25.441c0 .63.475 1.149 1.086 1.22zm.279-26.539l4.637-.914V31.21l-2.592.428v4.419l.547.136V32.1l2.045-.337v5.269l-4.541-1.641a.523.523 0 00-.096-.026V10.167zM25.721 43.651v-.009c.318-.151.469-.415.461-.717-.012-.378-.299-.685-.836-.639-.314.025-.6.157-.744.287l.125.387c.105-.09.314-.21.527-.229.285-.023.422.13.428.325.01.29-.275.43-.504.449l-.221.019.012.4.229-.02c.303-.025.596.098.605.439.012.228-.133.477-.51.508a1.143 1.143 0 01-.6-.128l-.1.423c.143.092.42.165.736.14.645-.055 1.002-.475.986-.963-.01-.39-.276-.635-.594-.672zM27.255 42.044c-.293.024-.568.07-.785.129l.092 2.952c.162.009.379.008.666-.018.527-.044.951-.219 1.211-.513.25-.28.4-.695.385-1.229-.016-.513-.188-.854-.455-1.068-.257-.209-.607-.295-1.114-.253zm.06 2.621c-.1.008-.205.017-.273.009l-.066-2.146c.068-.023.18-.047.336-.06.617-.052.975.296.99.961.026.76-.345 1.185-.987 1.236zM30.963 41.965c-.308.026-.531.07-.693.116l.086 2.73.451-.038-.033-1.043c.061.007.137.005.223-.002.322-.026.604-.146.779-.362.135-.159.203-.385.193-.646-.006-.26-.109-.468-.262-.592-.164-.134-.41-.191-.744-.163zm.02 1.369a.805.805 0 01-.223-.002l-.029-.938c.047-.016.138-.036.263-.047.313-.025.512.122.521.43.009.327-.191.529-.532.557zM33.199 42.521c-.191.017-.398.179-.479.47l-.015.001-.025-.382-.396.034c.018.181.027.373.035.645l.043 1.354.453-.039-.031-1.035a.937.937 0 01.01-.156c.033-.229.179-.398.396-.417a.606.606 0 01.133.005l-.016-.478a.478.478 0 00-.108-.002zM33.617 42.53l.061 2.001.459-.039-.063-2zM33.834 42.224c.158-.013.254-.141.25-.292-.01-.156-.107-.267-.265-.253-.151.013-.252.141-.248.296.007.151.111.26.263.249zM35.553 42.32a.685.685 0 00-.562.395l-.011.001-.03-.298-.4.034c.016.172.025.364.033.595l.045 1.405.457-.039-.035-1.174a.635.635 0 01.012-.167c.045-.156.166-.311.346-.326.25-.021.352.188.361.476l.035 1.13.455-.039-.037-1.187c-.021-.633-.353-.832-.669-.806zM37.469 43.839c-.176.015-.238-.108-.246-.35l-.027-.884.434-.037-.012-.378-.434.038-.018-.57-.439.156.014.452-.258.022.01.378.26-.022.029.94c.008.263.059.439.158.547.088.095.23.145.396.131a.916.916 0 00.328-.078l-.02-.384a.675.675 0 01-.175.039zM38.703 42.054c-.576.048-.863.596-.847 1.15.021.611.375.98.959.932a1.57 1.57 0 00.625-.177l-.075-.343a1.323 1.323 0 01-.498.132c-.289.024-.55-.11-.57-.472l1.205-.102c.008-.046.012-.121.01-.215-.014-.438-.223-.954-.809-.905zm-.418.872c.012-.208.123-.501.403-.524.304-.025.388.272.39.457l-.793.067zM40.75 41.88c-.191.017-.398.179-.479.469l-.015.001-.026-.38-.396.034c.018.18.026.373.035.644l.043 1.356.455-.039-.033-1.035a.97.97 0 01.01-.158c.033-.229.178-.396.395-.416a.62.62 0 01.135.005l-.016-.477a.424.424 0 00-.108-.004z"/></svg>`;

export const submenu = {
    "Creality Ender 3": [
        {
            label: "Impresora",
            title: "análisis y review",
            icon: iconPrinter,
            to: "/"
        },
        {
            label: "Complementos",
            title: "Complementos que se pueden comprar",
            icon: "",
            to: "/complementos"
        },
        {
            label: "Mejoras",
            title: "mejoras para imprimir",
            icon: "",
            to: "/mejoras"
        },
        {
            label: "Recursos",
            title: "Recursos sobre la impresora",
            icon: "",
            to: "/"
        },
        {
            label: "Videos",
            title: "Vídeos de la Ender 3",
            icon: "",
            to: "/"
        }
    ]
}

export const printyText = {
    "Impresoras 3D" : {
        text: "Aquí verás una selección de las mejores impresoras 3D que puedes encontrar hoy en día en función de lo que necesites.",
        img: "printy-qp.png"
    },
    "Filamentos" : {
        text: "¿Qué tipo de filamento estás buscando? Selecciona el color que más te guste y encuentra el filamento que buscas.",
        img: "printy-qp-filamento.png"
    },
    "Resinas": {
        text: "¿Tienes una impresora de resina? Selecciona un color y encuentra la que más se ajuste a tus necesidades.",
        img: "printy-qp-resins.png"
    },
    "Accesorios y recambios": {
        text: "¿Estás teniendo problemas con tu impresora o quieres mejorarla? Aquí podrás encontrar los accesorios y recambios más buscados.",
        img: "printy-qp-accesorios.png"
    },
    "Postprocesado": {
        text: "¿Ya has realizado tu impresión pero no ha quedado como pensabas? Aquí puedes ver materiales y herramientas para mejorar tus piezas.",
        img: "printy-qp-postprocesado.png"
    }
}

export const products = [
    "Impresoras 3D",
    "Filamentos",
    "Resinas",
    "Accesorios y recambios",
    "Postprocesado"
];
  
export const printersTypes = [
    "Baratas",
    "De resina",
    "De gran formato",
    "De doble extrusor",
    "Profesionales"
];
  
export const filamentsTypes = [
    "PLA",
    "PETG",
    "ABS",
    "TPU",
    "Flexible",
];
  
export const filamentsColor = [
    "Blanco",
    "Negro",
    "Gris",
    "Verde",
    "Rojo",
    "Azul",
    "Amarillo",
    "Morado",
    "Naranja",
    "Transparente",
    "Oro",
    "Plata",
    "Cobre",
    "multicolor",
    "madera",
];
  
export const resinsColor = [
    "Blanca",
    "Negra",
    "Gris",
    "Verde",
    "Roja",
    "Azul",
    "Amarilla",
    "Morada",
    "Naranja",
    "Transparente"
];
  
export const accesorios = [
    "Boquillas",
    "tubo ptef",
    "Hotend",
    "Extrusor",
    "Placa base",
    "Fuente de alimentación",
    "Fleje magnético",
    "Ventilador",
    "Pantalla",
    "Sensor de nivelación",
    "Fijador",
    "Kit de herramientas"
];
  
export const postprocesados = [
    "Pinturas",
    "Destornilladores",
    "Pegamento",
    "Aerógrafos",
    "Calibre"
];

export const orderProducts = [
    "Por relevancia",
    "Precio más baratos primero",
    "Precio más caros primero",
    "Más vendidos"
]

export const errorMessages = {
    "errorTitle": "Uppps, algo no funciona bien",
    "noResults": "No se han encontrado resultados",
    "noInternetConnection": "No hay conexión a Internet",
    "noProducts": "No hay productos para mostrar para los parámetros seleccionados, cambia los parámetros y vuelve a intentarlo de nuevo",
    "searchProductError": "No se pudo conectar con la web. Por favor, recarga la página de nuevo o trata de realizar una nueva búsqueda."
}