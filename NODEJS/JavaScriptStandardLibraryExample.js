/*Ejercicio donde valide los valores del SetTest, sí pertenecen a los productos de la tabla de multiplicar 2
* Si algún valor no pertenece se agrega al segundo Set, si pertenece muestra mensaje correcto.
* Al final muestra una matriz de los valores obtenidos.
*/
let setTest = new Set([2,4,8,12,14,16,18]);
let setTwo = new Set();

for (let i = 1; i <= 10; i++) {
    let resultado = 2 * i;
    console.log(resultado);
    for (let prime of setTest) {
        if (setTest.has(resultado)) {
            console.log("Contiene valor "+ resultado);
            break;
        } else {
            console.log("No contiene valor: "+ resultado);
            setTwo.add(resultado);     
            break;     
        }
    }    
}

console.log([...setTest]);
//Valores faltantes
console.log([...setTwo]);


