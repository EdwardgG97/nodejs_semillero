//Ejercicio Individual
// Trabajar con vocales de una palabra.
let palabra = "edward garcia";
let match3 = palabra.match(/[aeiou]/g); 
console.log(match3);

/*EJERCICIOS:
1. Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
2. A veces nos intersa no sólo saber si una cadena cumple un determinado patrón, sino extraer determinadas partes de él. Por ejemplo, 
    si una fecha está en el formato "27/11/2012" puede interesarnos extraer los números. Una expresión regular que vale para esta cadena puede ser
3. Escoger un algoritmo excepto El algoritmo de la Criba de Eratóstenes y utilizar los typed arrays en javascript. Del archivo pdf
4. Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]
5. Programe una expresión regular que de este texto   "papa" tururú" obtenga ["papa", "pa"]
6. Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]
7. Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]
8. Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10 km"]
9. Programe una expresión regular que de este texto   "11.22" obtenga [".22"]
10. Programe una expresión regular que de este texto    "11 km 12 km 14 m" obtenga ["14"]
11. ¿Porque devuelve null  "hola".match(/HOLA/) y como arreglarlo para que devuelva ["hola"]?
12. Programe una expresión regular que de este texto  "hola\ntu" obtenga ["tu"]
*/

//Punto 1.
let punto1 = "AEIOUeioub BARCELONA";
let exR1 = punto1.match(/[^aeiou]/gi);
console.log(exR1);

//Puno 2.
console.log("27/11/2012".replace(/[/]/g, ""));

//Punto 3.


//Punto 4. - "'hola tu' tururú" obtenga ["'hola tu'", "'"]
console.log("'hola tu' tururú".match(/(["']).*\1/,""));

//Punto 5. - "papa" tururú" obtenga ["papa", "pa"]
console.log("papa tururú".match(/[p][a]/g));

//Punto 6. - "java es güay" obtenga ["java"]
console.log("java es güay".match(/\java\b/));

//Punto 7. "11 millas 10 km" obtenga ["10"]
console.log("11 millas 10 km".match(/\s+10\s+/g));

//Punto 8. "11 millas 10 km" obtenga ["10 km"]
console.log("11 millas 10 km".match(/\s+10 km\s+/g));

//Punto 9. "11.22" obtenga [".22"]
console.log("11.22".replace(/1./,""));

//Punto 10. "11 km 12 km 14 m" obtenga ["14"]
console.log("11 km 12 km 14 m".match(/\d+/g));

//Punto 11. "hola".match(/HOLA/) devuelva ["hola"]
console.log("hola".match(/HOLA/i));

//Punto 12. "hola\ntu" obtenga ["tu"]
console.log("hola\ntu".replace(/[hola\n]/g,""));
