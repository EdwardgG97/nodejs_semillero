/**
 * MODULOS.
 * Pequeños, medianos y grandes programas se ensamblen y funcionen correctamente.
 * Consiste en ocultar detalles de implementación privada.
 * Mantener ordenado el namespace global para que los modulos no puedan modificar accidentalmente variables, funciones y clases definidas
 * por otros modulos. 
 */

const statsInit = (
    function () {
        const sum = (x, y) => x + y;
        const square = x => x * x;

        function mean(data) {
            return data.reduce(sum) / data.length;
        }

        function stdDev(data) {
            let m = mean(data);
            return Math.sqrt(
                data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
            );
        }

        return {
            mean,
            sum,
            stdDev
        }
    }
        ());


console.log(statsInit.mean([1, 3, 5, 7, 9]));
console.log(statsInit.stdDev([1, 3, 5, 9]));
console.log(statsInit.sum(1, 3));


const calculadoraInit = (function () {
    const multiplicar = (x, y) => x * y;
    const restar = (x, y) => x - y;
    const dividir = (x, y) => x / y;
    const sumar = (x, y) => x + y;


    return {
        multiplicar,
        restar,
        dividir,
        sumar
    }
}());

console.log(calculadoraInit.multiplicar(3, 4));


const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['stats.js'] = (function () {
    const exports = {};

    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function (data) {
        return data.reduce(sum) / data.length;
    };

    exports.stdDev = function (data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    };

    return exports;
}());


modules['calculadora.js'] = (function () {

    const exports = {};

    exports.multiplicar = function (x, y) { return x * y };
    exports.restar = function (x, y) { return x - y };
    exports.dividir = function (x, y) { return x / y };
    exports.sumar = function (x, y) { return x + y };

    return exports;

}());


const stats = require('stats.js');
console.log(stats.mean([1, 2, 3, 9]));
//console.log(stats.stdDev([1,2,4,5,6]));

const calculadora = require('calculadora.js');
console.log(calculadora.sumar(1, 4));

/**
 * Modulos ES6
 * Los modulos ES6 son oficiales para todos los navegadores, excepto Internet Explorer.
 * En estos módulos, cada archivo tiene su propio contexto privado
 * y se puede usar las declaraciones de importación y exportación.
 * Siempre están en modo estricto automaticamente.
 */

export const PI = Math.PI;
export function gradosARadianes(grados) {
    return grados * Math.PI / 180;
}

export class Circle {

    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}


//Segunda alternativa para exportar
const PI = Math.PI;
function gradosARadianes(grados) {
    return grados * Math.PI / 180;
}

class Circle {

    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}

export { PI, gradosARadianes, Circle };

//Para exportar un solo elemento, usamos la palabra: default
//En un modulo o archivo completo Js, solo debe usarse una vez la palabra default.
// La palabra export =(se entiende como)= public -> en Java
/**
 * La palabra clave export solo debe aparecer en el nivel superior de nuestro código JavaScript, es decir, 
 * no se puede usar export dentro de una clase, un ciclo o una función.
 */
export default class BitSet {
}

/**
 * IMPORT:
 * la palabra clave import importa los elementos exportados de los modulos
 */

import BitSet from './bitset.js'; // elementos exportados con default.

import { mean, stdDev } from './stats.js' // Importando varios elementos.

/**
 * Para tener en cuenta y evitar errores.
 * 1 - Las importaciones solo pueden aparecer en el nivel superior del modulo.
 * 2 - Por convención las importaciones se colocan al inicio del modulo.
 * 3 - Para la ruta del modulo se pueden usar comillas simples o dobles ("path",'path')
 */

import * as stast from './stats.js'; //Importar todos los elementos de un modulo.

stast.mean(); //llamando a los elementos exportados en stats.js

/**
 * Import para los casos especiales en los que se tenga un export default y otras exportaciones
 * suponiendo que el archivo bitset.js, tenga en default y otros elementos exportados
 */

import BitSet, { otroElementoExportado, segundoElemntoExportado } from './bitset.js';

//Suponiendo que se va a importar un archivo que no tiene exports.
import './archivoSinExport.js';

//import renombrado: Util para importar dos modulos con el mismo nombre.
import { mean, stdDev } from './stats.js'
import { mean as meanOther, stdDev2 } from './otherstats.js'
import { default as BitSet_v2 } from './bitset.js';

// renombrando los exports
/**
 * TENER EN CUENTA:
 * 1- Expresiones como Math.cos NO está permitida dentro del export.
 */
export { PI_2 as NumeroPI, gradosARadianes2 as convertir, Circle2 as Circulo };

/**
 * Re-exports: Re-exportaciones
 */

import {mean} from "./stats/mean.js";
import {stdDev} from "./stats/stdDev.js";

//Re-export desde nuevo archivo 
export {mean, stdDev};

//Re-export  desde los import
export {mean} from './stats/stdDev.js'
export {stvDev} from './stats/stdDev.js'

//Re-export de todos los elementos desde los import
export * from './stats/mean.js';
export * from './stats/stdDev.js';

//Importar modulos re-exportados, también se puede renombrar
import {mean as meanOthername, stdDev} from './stats.js';

// Re-exportar elementos default
export {default as mean} from './stats/mean.js';
export {default as stdDev} from './stats/stdDev.js';
