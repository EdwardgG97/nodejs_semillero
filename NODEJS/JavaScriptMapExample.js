//Map donde se almacena como valor las vocales y como llave la pronuniación en inglés
let mapTest = new Map([
    ["a", "ei"]
]);
//Se almacenan las vocales faltantes con su respectiva pronunciación
mapTest.set("e", "i").set("i", "ai").set("o", "ou").set("u","iu");

//Mostramos la cantidad de elementos almacenados en el Map
console.log("Cantidad de vocales: "+mapTest.size);

//Imprimimos los valores del Map con un forEach
mapTest.forEach((key, value) => console.log(`vocal ${value} - pronunciación en Inglés: ${key}`));