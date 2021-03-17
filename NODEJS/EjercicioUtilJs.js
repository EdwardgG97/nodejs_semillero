class Util {

    constructor(nameFunction, valor1, valor2) {
        this.nameFunction = nameFunction;
        this.valor1 = valor1;
        this.valor2 = valor2;
        setTimeout(() => { console.log("Ready..."); }, 1000); //Primer parametro función a ejecutar, segundo parametro tiempo en milisegundos
        setTimeout(() => { console.log("Go..."); this.init(nameFunction, valor1, valor2) }, 4000);
    }

    init(nameFunction, valor1, valor2) {
        switch (nameFunction) {
            case "Sumar":
                console.log(calculadoraInit.sumar(valor1, valor2));
                break;
            case "Restar":
                calculadoraInit.restar(valor1, valor2);
                break;
            case "Multiplicar":
                calculadoraInit.multiplicar(valor1, valor2);
                break;
            case "Dividir":
                calculadoraInit.dividir(valor1, valor2);
                break;
            case "URL":
                this.datosURL(valor1);
                break;
            case "Dinero":
                console.log(formatMoney.euro().format(valor1));
                console.log(formatMoney.dolar().format(valor1));
                console.log(formatMoney.yen().format(valor1));
                console.log(formatMoney.pesoColombia().format(valor1));
                break;

            default:
                console.log("N/A");
                break;
        }
    }

    datosURL(url) {
        var url2 = new URL(url);
        console.log(url2.href);
        console.log(url2.origin);
        console.log(url2.protocol);
        console.log(url2.host);
        console.log(url2.hostname);
        console.log(url2.port);
        console.log(url2.pathname);
        console.log(url2.search);
        console.log(url2.hash);
    }

}

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

const formatMoney = (function () {
    const exports = {};

    exports.euro = function () {
        return Intl.NumberFormat("es", { style: "currency", currency: "EUR" });
    };

    exports.dolar = function () {
        return Intl.NumberFormat("us", { style: "currency", currency: "USD" });
    };

    exports.yen = function () {
        return Intl.NumberFormat("jp", { style: "currency", currency: "JPY" });
    };

    exports.pesoColombia = function () {
        return Intl.NumberFormat("col", { style: "currency", currency: "COP" });
    };

    return exports;
}());


//Ejecutar
console.log(new Util("Sumar", 3, 4));
console.log(new Util("URL", "https://example.com:8000/path/name?q=term#fragment"));
console.log(new Util("Dinero", 10, null));