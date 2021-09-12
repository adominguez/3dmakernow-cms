import technology from '../img/features/technology.svg';
import printerVolume from '../img/features/printerVolume.svg';
import printerThickness from '../img/features/printerThickness.svg';
import accuracy from '../img/features/accuracy.svg';
import extrusorNumber from '../img/features/extrusorNumber.svg';
import extrusorType from '../img/features/extrusorType.svg';
import filamentDiameter from '../img/features/filamentDiameter.svg';
import nozzlePrinterDiameter from '../img/features/nozzlePrinterDiameter.svg';
import level from '../img/features/level.svg';
import printingSpeed from '../img/features/printingSpeed.svg';
import extrusorTemp from '../img/features/extrusorTemp.svg';
import bedTemp from '../img/features/bedTemp.svg';
import supportMaterials from '../img/features/supportMaterials.svg';
import slicer from '../img/features/slicer.svg';
import inputFormat from '../img/features/inputFormat.svg';
import outputFormat from '../img/features/outputFormat.svg';
import lcdDisplay from '../img/features/lcdDisplay.svg';
import conectivity from '../img/features/conectivity.svg';
import machineDimensions from '../img/features/machineDimensions.svg';
import machineWeight from '../img/features/machineWeight.svg';
import shippingDimensions from '../img/features/shippingDimensions.svg';
import shippingWeight from '../img/features/shippingWeight.svg';
import input from '../img/features/input.svg';
import output from '../img/features/output.svg';

export const matchKeyProperties = {
    feature: {
        text: 'Características',
        data: {
            materialType: {
                title: 'Tipo de material',
                icon: technology,
                info: 'Es el tipo de material, PLA, PETG, TPU, Flexible, Resina...'
            },
            technology: {
                title: 'Tecnología',
                icon: technology,
                info: 'info'
            },
            printerVolume: {
                title: 'Volumen de impresión',
                icon: printerVolume,
                info: 'Es el máximo tamaño al que puede imprimir una impresora 3D en largo x ancho x alto y se mide en mm x mm x mm.'
            },
            layerResolution: {
                title: 'Resolución de capa',
                icon: printerThickness,
                info: 'La resolución de capa es <b>la distancia que una impresora 3D permite que haya entre capa y capa de una pieza</b>, a menor distancia, mayor detalle podrá tener la impresión.'
            },
            axisPrecision: {
                title: 'Precisión en los ejes',
                icon: accuracy,
                info: 'Es la exactitud con la que una impresora puede reproducir una pieza sobre los tres ejes.'
            },
            extrusorNumber: {
                title: 'Número de extrusores',
                icon: extrusorNumber,
                info: 'Número de extrusores que tiene la impresora.'
            },
            extrusor: {
                title: 'Extrusor',
                icon: extrusorType,
                info: 'Si es extrusor directo o bowden, modelo del extrusor o datos relevantes del mismo.'
            },
            filamentDiameter: {
                title: 'Diámetro de filamento',
                icon: filamentDiameter,
                info: 'Es el <b>diametro que debe tener el filamento que se utilice para imprimir en la impresora</b>, se mide en mm normalmente suele ser de 1,75mm.'
            },
            nozzleDiameterList: {
                title: 'Diámetro del nozzle',
                icon: nozzlePrinterDiameter,
                info: 'Es el <b>diametro que tiene la boquilla de la impresora</b>, se mide en mm y determina el grosor que va tener el hilo de filamento al salir por la boquilla, lo normal es que tenga 0,4mm.'
            },
            bedLevel: {
                title: 'Nivelación de la cama',
                icon: level,
                info: 'Es posible que algunas impresoras tengan nivelación automática de la cama, en caso contrario deberá ser de forma manual.'
            },
            printerSpeed: {
                title: 'Velocidad de impresión',
                icon: printingSpeed,
                info: 'Es la velocidad a la que puede imprimir una impresora 3D y se expresa en mm/s.'
            },
            extrusorTemperature: {
                title: 'Temperatura máxima del hotend',
                icon: extrusorTemp,
                info: 'Máxima temperatura a la que se puede calentar el extrusor, esto es importante ya que <b>algunos materiales necesitan temperaturas muy altas para imprimirlos</b>.'
            },
            BedTemperature: {
                title: 'Temperatura máxima de la cama',
                icon: bedTemp,
                info: 'Temperatura máxima que puede alcanzar la cama caliente, esto es importante ya que <b>algunos materiales necesitan que la cama esté a temperaturas muy altas para imprimirlos</b>.'
            },
            materials: {
                title: 'Materiales soportados',
                icon: supportMaterials,
                info: 'Materiales con los que se puede imprimir en la impresora 3D.'
            },
            reelSize: {
                title: 'Tamaño de la bobina',
                icon: supportMaterials,
                info: 'Tamaño que tiene la bobina.'
            },
            reelDiameter: {
                title: 'Diámetro del eje',
                icon: accuracy,
                info: 'Es el hueco interior de plástico de la bobina, es interesante para saber si cabe en el soporte de tu impresora.'
            },
            composition: {
                title: 'Composición',
                icon: printerVolume,
                info: 'Composición del material.'
            },
        }
    },
    temperature: {
        text: 'Temperatura',
        data: {
            temperatureRange: {
                title: 'Rango de temperatura',
                icon: extrusorTemp,
                info: 'Es el rango de temperaturas entre las que se puede imprimir este material.'
            },
            optimalTemperature: {
                title: 'Temperatura óptima',
                icon: bedTemp,
                info: 'Es el rango de temperaturas óptimas entre las que se puede imprimir este material.'
            }
        }
    },
    software: {
        text: 'Software',
        data: {
            slicer: {
                title: 'Slicer',
                icon: slicer,
                info: 'Software con el que se pueden ajustar los parámetros para adaptarlos a la impresión.'
            },
            inputFormat: {
                title: 'Formatos de entrada',
                icon: inputFormat,
                info: 'Los tipos de formatos de entrada que admite la impresora.'
            },
            firmware: {
                title: 'Firmware',
                icon: outputFormat,
                info: 'El firmware se asemejaría al sistema operativo que lleva la impresora en su placa.'
            },
            display: {
                title: 'Pantalla',
                icon: lcdDisplay,
                info: 'Normalmente las impresoras incorporan una pantalla a través de la cual se lleva el control de la impresora.'
            },
            conectivity: {
                title: 'Conectividad',
                icon: conectivity,
                info: 'El método con el que puede conectarse para importar los archivos a la impresora.'
            },
        }
    },
    unboxing: {
        text: 'Unboxing',
        data: {
            printerSize: {
                title: 'Tamaño de impresora',
                icon: machineDimensions,
                info: 'Dimensiones de la impresora expresada en mm.'
            },
            printerWeight: {
                title: 'Peso de impresora',
                icon: machineWeight,
                info: 'Peso de la impresora expresado en kg.'
            },
            unboxingSize: {
                title: 'Tamaño de la caja',
                icon: shippingDimensions,
                info: 'Dimensiones del paquete expresado en mm.'
            },
            unboxingWeight: {
                title: 'Peso de la caja',
                icon: shippingWeight,
                info: 'Peso del paquete expresado en kg.'
            },
        }
    },
    electricity: {
        text: 'Electricidad',
        data: {
            input: {
                title: 'Capacidad de entrada',
                icon: input,
                info: 'Es la tensión que acepta la impresora, por lo general <b>suele estar en torno a los 100-240V de corriente alterna, y en torno a 50-60Hz de frecuencia</b>.'
            },
            voltage: {
                title: 'Voltaje',
                icon: output,
                info: 'Es el voltaje que necesita la impresora para poder trabajar, se expresa en Voltios (V) y generalmente <b>suele estar en los 12V</b>.'
            },
        }
    },
    content: {
        text: 'Contenido',
        data: {
            content: {
                title: 'Contenido',
            }
        }
    }
}