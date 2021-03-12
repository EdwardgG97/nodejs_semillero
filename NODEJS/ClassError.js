/**
 *  Class Error
 */

class HTTPError extends Error {

    constructor(status, statusText, url) {
        super(`${status} ${statusText}: ${url}`);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }

    get name (){
        return "HTTPError";
    }

}


let error = new HTTPError(404, "Not Found", "https://zoom.us/j/92769666327?pwd=bU5vQTFBbC81LzVPamFBd0Y3UEJydz09");
console.log(error.status);
console.log(error.message);
console.log(error.name);

//*******************+++Ejercicios **************++
class IndexOutError extends Error {

    constructor(nombre, mensaje) {
        super(`${nombre} ${mensaje}`);
        this.nombre = nombre;
        this.mensaje = mensaje;
    }

    get name (){
        return "Index fuera de rango";
    }

}


let error2 = new IndexOutError("Out of range", "Index fuera de rango del array, valide nuevamente");
console.log(error2.message);
console.log(error2.name);

function rangoArray(posicion) {
    try{
        let array = ["prueba1","prueba2"];
        console.log(array[posicion]);
        throw new IndexOutError("Out of range", "Index fuera de rango del array, valide nuevamente");
    } catch (err) {
        throw(err);
    }
}

console.log(rangoArray(4));