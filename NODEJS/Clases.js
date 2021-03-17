/**
 * Clases en JavaScript
 * En JS una clase es un cojunto d eobjetos que heredan propiedades del mismo objeto prototipo.
 * El objeto protopipo es la caracteristica central de una clase.
 */

//Forma antigua de crear una clase en JS.
//Esto es un constructor que inicializa nuevos objetos.
function Range(from, to) {
    this.from = from;
    this.to = to;
}

//Funciona para rangos textuales, de fechas y númerico. Devuelve verdadero si x está en el rango.
Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },

    [Symbol.iterator]: function* () { //Funcion generadora que hace iterables los rangos de nuestra clase.
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString: function () {
        return "(" + this.from + " ... " + this.to + ")";
    }
};

let range = new Range(1, 10);
console.log(range.includes(6));
console.log(range.includes(3));
console.log(range.includes(35));
console.log(range.toString());
console.log([...range]);


/**
 * CLASE DE FORMA ACTUAL ES6.
 */

class RangeCurrent {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    *[Symbol.iterator]() { //Funcion generadora que hace iterables los rangos de nuestra clase.
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString() {
        return "(" + this.from + " ... " + this.to + ")";
    }
}

let rengeCurrent = new RangeCurrent(1, 10);
console.log(rengeCurrent.includes(6));
console.log(rengeCurrent.includes(3));
console.log(rengeCurrent.includes(35));
console.log(rengeCurrent.toString());
console.log([...rengeCurrent]);

class Span extends RangeCurrent {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

let span1 = new Span(1, -1);
console.log(span1.includes(5));
console.log(span1.toString());

//Función como expresión
let square = function (x) {
    return x * x;
}
console.log(square(6));

//Clase como expresión
let Square = class {
    constructor(x) {
        this.area = x * x;
    }
}

console.log(new Square(4).area);

let newSquare = new Square(6);
console.log(newSquare);

/*************************************MÉTODOS ESTATICOS **************************************/

class Cuadrado {
    static calcularCuadrado(num) {
        return num * num;
    }

    static texto = "Hola";
    #propiedadPrivada = 0; //variable privada ->#
}

let cuadrado = Cuadrado.calcularCuadrado(4);
console.log(cuadrado);
console.log(Cuadrado.texto);

let cuadrado2 = new Cuadrado();
console.log(cuadrado2.propiedadPrivada);